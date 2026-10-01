// React is provided by the application's runtime; keep this import for React.createElement.
// @ts-ignore - allow builds that do not include React's type declarations in the editor.
import React from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemSection } from './components/sections/ProblemSection';
import { SolutionSection } from './components/sections/SolutionSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { CustomerFeaturesSection } from './components/sections/CustomerFeaturesSection';
import { ProviderFeaturesSection } from './components/sections/ProviderFeaturesSection';
import { ServiceLifecycleSection } from './components/sections/ServiceLifecycleSection';
import { LiveTrackingSection } from './components/sections/LiveTrackingSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { SystemArchitectureSection } from './components/sections/SystemArchitectureSection';
import { DatabasePostgisSection } from './components/sections/DatabasePostgisSection';
import { PaymentArchitectureSection } from './components/sections/PaymentArchitectureSection';
import { SecuritySection } from './components/sections/SecuritySection';
import { AdminPlatformSection } from './components/sections/AdminPlatformSection';
import { ProjectMetricsSection } from './components/sections/ProjectMetricsSection';
import { RoadmapSection } from './components/sections/RoadmapSection';
import { DeveloperArchitectureSection } from './components/sections/DeveloperArchitectureSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';

export default function App() {
  const scrollToInteractiveDemo = () => {
    const el = document.getElementById('interactive-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTech = () => {
    const el = document.getElementById('technology');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    React.createElement(
      'div',
      { className: 'min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white' },
      React.createElement(Navbar, { onOpenDemo: scrollToInteractiveDemo }),
      React.createElement(
        'main',
        { className: 'flex-1' },
        React.createElement(
          'div',
          { id: 'interactive-demo' },
          React.createElement(HeroSection, {
            onExploreClick: scrollToInteractiveDemo,
            onTechClick: scrollToTech,
          }),
        ),
        React.createElement(ProblemSection),
        React.createElement(SolutionSection),
        React.createElement(HowItWorksSection),
        React.createElement(
          'div',
          { id: 'features' },
          React.createElement(CustomerFeaturesSection),
          React.createElement(ProviderFeaturesSection),
        ),
        React.createElement(ServiceLifecycleSection),
        React.createElement(LiveTrackingSection),
        React.createElement(SystemArchitectureSection),
        React.createElement(DatabasePostgisSection),
        React.createElement(TechStackSection),
        React.createElement(PaymentArchitectureSection),
        React.createElement(SecuritySection),
        React.createElement(AdminPlatformSection),
        React.createElement(ProjectMetricsSection),
        React.createElement(RoadmapSection),
        React.createElement(DeveloperArchitectureSection),
        React.createElement(FinalCtaSection, {
          onExploreClick: scrollToInteractiveDemo,
        }),
      ),
      React.createElement(Footer),
    )
  );
}
