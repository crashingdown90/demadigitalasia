import HeroSection from '../../components/HeroSection';
import IndustryGrid from '../../components/IndustryGrid';
import TheCoreSection from '../../components/TheCoreSection';
import IntelligenceHubSection from '../../components/IntelligenceHubSection';

import TracingLines from '../../components/TracingLines';

export default function App() {
  return (
    <div className="relative">
      <TracingLines />
      <HeroSection />
      <IndustryGrid />
      <TheCoreSection />
      <IntelligenceHubSection />
    </div>
  );
}
