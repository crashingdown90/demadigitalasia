const fs = require('fs');
const file = './src/data/blog.js';

let content = fs.readFileSync(file, 'utf8');

// Extract the blogPosts array
// We can use a simple trick to evaluate it since it's an ES module export.
// We'll replace "export const blogPosts =" with "module.exports ="
let scriptContent = content.replace('export const blogPosts =', 'module.exports =');
fs.writeFileSync('./temp_eval.js', scriptContent);

try {
  const posts = require('./temp_eval.js');
  
  let report = "## Hasil Audit Artikel Blog DEMA DIGITAL ASIA\n\n";
  let totalPosts = posts.length;
  let shortContentCount = 0;
  let missingHeadingsCount = 0;

  report += `Total Artikel: **${totalPosts}**\n\n`;

  posts.forEach((post, index) => {
    report += `### ${index + 1}. ${post.title.id}\n`;
    report += `- **Kategori:** ${post.category.id}\n`;
    report += `- **Slug:** \`${post.slug}\`\n`;

    // Word Count ID
    let wordCountId = post.content.id.split(/\s+/).filter(w => w.length > 0).length;
    // Word Count EN
    let wordCountEn = post.content.en.split(/\s+/).filter(w => w.length > 0).length;
    
    report += `- **Jumlah Kata:** ID: ${wordCountId} kata | EN: ${wordCountEn} kata\n`;

    if (wordCountId < 500) {
      report += `  - ⚠️ *Peringatan: Konten Bahasa Indonesia terlalu pendek (Disarankan >600 kata untuk SEO)*\n`;
      shortContentCount++;
    }

    // SEO Structure Check (Headings in markdown)
    let hasH2 = post.content.id.includes('## ');
    let hasH3 = post.content.id.includes('### ');

    if (hasH2 || hasH3) {
      report += `- **Struktur SEO:** ✅ Memiliki Sub-heading (H2/H3)\n`;
    } else {
      report += `- **Struktur SEO:** ❌ Tidak memiliki Sub-heading (Sangat buruk untuk SEO)\n`;
      missingHeadingsCount++;
    }

    // Image/Thumbnail check
    let hasThumbnail = post.thumbnail && post.thumbnail.length > 0;
    if (!hasThumbnail) {
      report += `- **Thumbnail:** ❌ Tidak ada\n`;
    }

    // Markdown Image check in content
    let hasInContentImg = post.content.id.includes('![');
    if (!hasInContentImg) {
      report += `- **Gambar Konten:** ⚠️ Tidak ada gambar ilustrasi di dalam artikel\n`;
    }

    report += '\n';
  });

  report += `### Ringkasan Audit:\n`;
  report += `- **Artikel Kurang Panjang (Thin Content):** ${shortContentCount}\n`;
  report += `- **Artikel Tanpa Struktur Heading (SEO Buruk):** ${missingHeadingsCount}\n`;

  fs.writeFileSync('./audit_report.md', report);
  console.log('Audit completed. Report generated at audit_report.md');
} catch(e) {
  console.error("Failed to parse blog.js: ", e);
} finally {
  fs.unlinkSync('./temp_eval.js');
}
