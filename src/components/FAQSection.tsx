import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Moet ik trainen op een vaste dag en tijd?",
      answer: "Nee, het inplannen van je trainingen is flexibel. Je kan per training kiezen welke dag en tijd je komt. Vooruit plannen kan tot 2 weken vooruit."
    },
    {
      question: "Ik heb helemaal geen ervaring, is dat een probleem?",
      answer: "Zeker niet! Bij ons traint iedereen op zijn of haar eigen niveau. Dus van beginner tot topsporter."
    },
    {
      question: "Trainer er meer mannen of vrouwen in de gym?",
      answer: "50/50 ongeveer. Misschien soms iets meer vrouwen."
    },
    {
      question: "Kan ik trainen met een blessure?",
      answer: "Zeker! Het programma en de oefeningen worden aangepast aan de blessure met als doel om van de blessure af te komen."
    }
  ];

  return (
    <section id="faq" className="py-32 px-4 relative overflow-hidden bg-zinc-800 text-white transition-all duration-1000">
      {/* Sophisticated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary)/0.08)_0%,_transparent_70%)]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--primary)/0.1)_1px,_transparent_0)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,_black,_transparent)]" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary via-accent to-primary border border-white/20 rounded-full px-10 py-4 mb-8 shadow-lg backdrop-blur-sm">
              <HelpCircle className="w-6 h-6 text-white" />
              <span className="text-white font-bold tracking-wide">Veelgestelde Vragen</span>
            </div>
            <h2 className="mb-6 font-display text-white">Alles wat je moet weten</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Vind antwoorden op de meest gestelde vragen over onze gym en pilates lessen
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-3xl px-10 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 overflow-hidden group"
              >
                <AccordionTrigger className="text-left text-lg font-bold hover:no-underline py-8 group-hover:text-primary transition-colors">
                  <span className="text-foreground pr-6 font-display">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-8 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
