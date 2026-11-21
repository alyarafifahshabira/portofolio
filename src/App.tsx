import { useEffect, useState } from 'react';
import type { HighlightItem } from './data/portfolioData';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { EducationSection } from './components/EducationSection';
import { AchievementsSection } from './components/AchievementsSection';
import { FooterSection } from './components/FooterSection';
import { ExperienceModal } from './components/ExperienceModal';

export default function App() {
  const [selectedHighlight, setSelectedHighlight] =
    useState<HighlightItem | null>(null);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bg-cream text-ink font-body">
      <HeroSection />

      <main>
        <ExperienceSection onSelectHighlight={setSelectedHighlight} />
        <CapabilitiesSection />
        <EducationSection />
        <AchievementsSection />
      </main>

      <FooterSection />

      <ExperienceModal
        item={selectedHighlight}
        onClose={() => setSelectedHighlight(null)}
      />
    </div>
  );
}
