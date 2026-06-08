import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { GenerationsSection } from './components/GenerationsSection';
import { EquipmentSection } from './components/EquipmentSection';
import { ComparisonSection } from './components/ComparisonSection';
import { NewsSection } from './components/NewsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <GenerationsSection />
        <ComparisonSection />
        <EquipmentSection />
        <NewsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}