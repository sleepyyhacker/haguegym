import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { GymSection } from "@/components/GymSection";
import { PilatesSection } from "@/components/PilatesSection";
import { FAQSection } from "@/components/FAQSection";
import { IntakeSection } from "@/components/IntakeSection";
import { Footer } from "@/components/Footer";
import { ContinuousSnake } from "@/components/ContinuousSnake";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ContinuousSnake />
      <Navigation />
      <Hero />
      <GymSection />
      <PilatesSection />
      <FAQSection />
      <IntakeSection />
      <Footer />
    </div>
  );
};

export default Index;
