const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');
const langDir = path.join(appDir, '[lang]');

// Directories & files to move
const targets = [
  'careers', 'core', 'esg', 'initiate-handshake', 'intelligence-hub',
  'neural-network', 'privacy', 'sector-solutions', 'terms',
  'page.js', 'layout.js'
];

// Create [lang] directory
if (!fs.existsSync(langDir)) {
  fs.mkdirSync(langDir);
}

// Move files and directories
targets.forEach(target => {
  const source = path.join(appDir, target);
  const dest = path.join(langDir, target);
  if (fs.existsSync(source)) {
    fs.renameSync(source, dest);
    console.log(`Moved: ${target} to [lang]/`);
  }
});

// Function to safely update relative paths in moved files
function updateImports(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      updateImports(fullPath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');

      // Replace longest strings first to prevent overlapping replacement issues
      content = content.replace(/'\.\.\/\.\.\/\.\.\/components/g, "'../../../../components");
      content = content.replace(/'\.\.\/\.\.\/\.\.\/data/g, "'../../../../data");
      content = content.replace(/"\.\.\/\.\.\/\.\.\/components/g, '"../../../../components');
      content = content.replace(/"\.\.\/\.\.\/\.\.\/data/g, '"../../../../data');

      content = content.replace(/'\.\.\/\.\.\/components/g, "'../../../components");
      content = content.replace(/'\.\.\/\.\.\/data/g, "'../../../data");
      content = content.replace(/"\.\.\/\.\.\/components/g, '"../../../components');
      content = content.replace(/"\.\.\/\.\.\/data/g, '"../../../data');

      content = content.replace(/'\.\.\/components/g, "'../../components");
      content = content.replace(/'\.\.\/data/g, "'../../data");
      content = content.replace(/"\.\.\/components/g, '"../../components');
      content = content.replace(/"\.\.\/data/g, '"../../data');

      // Fix layout.js global css
      if (file === 'layout.js') {
        content = content.replace(/\"\.\/globals\.css\"/, '"../globals.css"');
      }

      fs.writeFileSync(fullPath, content);
      console.log(`Updated imports in: ${fullPath.replace(appDir, '')}`);
    }
  }
}

// Execute the path updater
updateImports(langDir);
console.log('Successfully completed i18n architectural refactoring.');
