import { HeaderNav } from './features/landing/components/HeaderNav';
import { HeroSection } from './features/landing/components/HeroSection';
import { HowItWorksSection } from './features/landing/components/HowItWorksSection';
import { ProblemSection } from './features/landing/components/ProblemSection';
import { SolutionSection } from './features/landing/components/SolutionSection';
import { PricingSection } from './features/landing/components/PricingSection';
import { FaqSection } from './features/landing/components/FaqSection';
import { Footer } from './features/landing/components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <HeaderNav />
      <main className="w-full flex-1">
        <HeroSection />
        <HowItWorksSection />
        <ProblemSection />
        <SolutionSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
