import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContinuousSnake } from "@/components/ContinuousSnake";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ArrowRight, MessageCircle } from "lucide-react";
import IMG4907 from "@/assets/IMG_4907.jpg";
import IMG4922 from "@/assets/IMG_4922.jpg";
import IMG4952 from "@/assets/IMG_4952.jpg";
import IMG4982 from "@/assets/IMG_4982.jpg";
import IMG5000 from "@/assets/IMG_5000.jpg";

const FAQ = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const faqs = [
    {
      category: "Algemeen",
      questions: [
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
      ]
    },
    {
      category: "Gym & Apparatuur",
      questions: [
        {
          question: "Wat voor apparatuur hebben jullie?",
          answer: "We hebben moderne krachtapparatuur, cardio machines, vrije gewichten en functionele trainingsruimte. Alle apparatuur is van topkwaliteit en regelmatig onderhouden."
        },
        {
          question: "Is er begeleiding beschikbaar?",
          answer: "Ja, onze gecertificeerde trainers zijn beschikbaar voor advies en begeleiding. Je kunt ook personal training boeken voor meer persoonlijke aandacht."
        },
        {
          question: "Hoe druk is het in de gym?",
          answer: "We hebben een beperkt aantal leden om ervoor te zorgen dat er altijd voldoende ruimte en apparatuur beschikbaar is. Reserveren is niet nodig voor reguliere training."
        },
        {
          question: "Zijn er kleedkamers en douches?",
          answer: "Ja, we hebben moderne kleedkamers met douches, lockers en alle benodigde faciliteiten."
        }
      ]
    },
    {
      category: "Reformer Pilates",
      questions: [
        {
          question: "Wat is Reformer Pilates precies?",
          answer: "Reformer Pilates is een vorm van Pilates die gebruik maakt van een speciaal apparaat met veren en weerstand. Het biedt een unieke combinatie van kracht, flexibiliteit en balans training."
        },
        {
          question: "Hoe groot zijn de groepen?",
          answer: "Onze Reformer Pilates groepen zijn klein, maximaal 4 personen per les. Dit zorgt voor persoonlijke aandacht en een veilige omgeving."
        },
        {
          question: "Moet ik flexibel zijn om te beginnen?",
          answer: "Nee, flexibiliteit ontwikkel je juist door Pilates te beoefenen. We beginnen altijd op jouw niveau en bouwen langzaam op."
        },
        {
          question: "Wat moet ik meenemen naar de les?",
          answer: "Draag comfortabele sportkleding en neem een handdoek mee. Wij zorgen voor alle benodigde apparatuur en matten."
        }
      ]
    },
    {
      category: "Lidmaatschap & Betaling",
      questions: [
        {
          question: "Wat zijn de tarieven?",
          answer: "We hebben verschillende abonnementen beschikbaar. Neem contact met ons op voor de actuele tarieven en welke optie het beste bij jou past."
        },
        {
          question: "Kan ik mijn abonnement opzeggen?",
          answer: "Ja, je kunt je abonnement opzeggen met een opzegtermijn van 1 maand. Meer details vind je in onze algemene voorwaarden."
        },
        {
          question: "Zijn er proeflessen beschikbaar?",
          answer: "Ja, we bieden gratis proeflessen aan voor zowel gym als Reformer Pilates. Dit is een perfecte manier om kennis te maken met onze faciliteiten."
        },
        {
          question: "Kan ik mijn abonnement pauzeren?",
          answer: "In bijzondere omstandigheden (zoals vakantie of blessure) kunnen we je abonnement tijdelijk pauzeren. Neem contact met ons op om de mogelijkheden te bespreken."
        }
      ]
    },
    {
      category: "Praktische Zaken",
      questions: [
        {
          question: "Wat zijn de openingstijden?",
          answer: "We zijn geopend van maandag t/m vrijdag van 6:00 tot 22:00, en in het weekend van 8:00 tot 20:00. Reformer Pilates lessen zijn op vaste tijden."
        },
        {
          question: "Is er parkeergelegenheid?",
          answer: "Ja, er is voldoende parkeergelegenheid beschikbaar voor onze leden."
        },
        {
          question: "Kan ik mijn trainingen online inplannen?",
          answer: "Ja, we hebben een online systeem waar je je trainingen en lessen kunt inplannen en beheren."
        },
        {
          question: "Wat als ik een les moet annuleren?",
          answer: "Lessen kunnen tot 24 uur van tevoren kosteloos worden geannuleerd. Bij kortere annulering kunnen kosten in rekening worden gebracht."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <ContinuousSnake />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0"
        style={{
          backgroundImage: `url(${IMG4952})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/80 via-zinc-900/80 to-black/80" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="container relative z-10 px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary via-accent to-primary border border-white/20 rounded-full px-10 py-4 mb-8 shadow-lg backdrop-blur-sm">
              <HelpCircle className="w-6 h-6 text-white" />
              <span className="text-white font-bold tracking-wide">Veelgestelde Vragen</span>
            </div>
            <h1 className="text-5xl md:text-6xl mb-8 text-white leading-[1.1] font-display tracking-tight" style={{textShadow: '0 4px 20px rgba(0,0,0,0.5)'}}>
              Alles wat je moet weten
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Vind antwoorden op de meest gestelde vragen over onze gym en pilates lessen
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h2 className="text-3xl font-display mb-8 text-center">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${categoryIndex}-${index}`}
                      className="bg-muted/30 backdrop-blur-sm border border-primary/10 rounded-2xl px-8 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                        <span className="text-foreground pr-6">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-100 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Nog vragen?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Kunnen we je vraag niet beantwoorden? Neem gerust contact met ons op.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-accent text-white hover:bg-accent/90 font-semibold shadow-lg hover:shadow-xl transition-all relative z-20"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Opnemen
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 bg-primary/10 backdrop-blur-sm text-foreground hover:bg-primary/20 hover:border-primary/50 font-semibold shadow-lg hover:shadow-xl transition-all relative z-20"
              >
                Gratis Proefles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
