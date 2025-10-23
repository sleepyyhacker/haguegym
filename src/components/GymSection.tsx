import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dumbbell, Users, Clock, Trophy, Check } from "lucide-react";
import { Tour360 } from "@/components/360Tour";
import IMG4885 from "@/assets/IMG_4885.jpg";
import IMG4890 from "@/assets/IMG_4890.jpg";
import IMG4922 from "@/assets/IMG_4922.jpg";
import IMG4982 from "@/assets/IMG_4982.jpg";
import IMG5054 from "@/assets/IMG_5054.jpg";
import JulienPhoto from "@/assets/Julien.webp";
import AikoPhoto from "@/assets/aiko.webp";
import LucienPhoto from "@/assets/lucien.webp";
import NadiaPhoto from "@/assets/nadia.webp";
import CaelumPhoto from "@/assets/caelum.webp";

export const GymSection = () => {
  const scrollToIntake = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const features = [
    {
      icon: Dumbbell,
      title: "Kracht Circuit",
      description: "8 machines in de ideale volgorde voor een full body workout"
    },
    {
      icon: Users,
      title: "Personal Training",
      description: "Maximaal 4 personen per sessie voor optimale begeleiding"
    },
    {
      icon: Clock,
      title: "Efficiënt",
      description: "Complete full body workout in slechts 45 minuten"
    },
    {
      icon: Trophy,
      title: "Voor Iedereen",
      description: "Van beginner tot gevorderde sporter"
    }
  ];

  const benefits = [
    "Full body krachttraining in 45 minuten",
    "8 machines in de ideale volgorde",
    "Nooit wachten op een machine",
    "Voor beginner en gevorderde sporter",
    "Minimale kans op blessures",
    "Onbeperkt inplannen"
  ];

  const pricing = [
    {
      title: "Basis abonnement",
      price: "€60",
      period: "per maand",
      features: [
        "12 maanden looptijd",
        "Onbeperkt krachttraining + groepslessen",
        "In 45 minuten een complete full body workout",
        "6 maanden: €70 per maand",
        "2 maanden: €80 per maand"
      ]
    },
    {
      title: "Personal training",
      price: "€25",
      period: "per training",
      features: [
        "1 trainer op max 4 klanten",
        "16x trainen (looptijd 16 weken)",
        "Trainen op afspraak",
        "Krachttraining (focus op free weights)",
        "Pakketprijs €400 voor 16 trainingen"
      ]
    }
  ];

  const trainers = [
    { name: "Julien", role: "Founder, Personal trainer", photo: JulienPhoto },
    { name: "Aiko", role: "Personal trainer", photo: AikoPhoto },
    { name: "Lucien", role: "Personal trainer", photo: LucienPhoto },
    { name: "Nadia", role: "Personal trainer", photo: NadiaPhoto },
    { name: "Caelum", role: "Personal trainer", photo: CaelumPhoto }
  ];

  const reviews = [
    {
      text: "De expertise van Julien is ongekend. Zelfs als ik vragen heb waar niet direct antwoord op is dan kan ik de volgende dag een appje verwachten met antwoorden op mijn moeilijke vragen.",
      author: "Niqshal"
    },
    {
      text: "Super fijne gym waar je je eigen 'station' hebt met alles wat je nodig hebt voor je training, waardoor je niet eindeloos hoeft te wachten op je mede-sporters.",
      author: "Jessica"
    },
    {
      text: "Ik ben heel erg tevreden met de HagueGym. Julien is echt een top trainer en bovendien een heel aardige vent die je altijd met veel energie en een groot glimlach verwelkomt.",
      author: "Paola"
    }
  ];

  return (
    <section id="gym" className="py-32 px-4 relative overflow-hidden bg-white transition-all duration-1000">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--primary)/0.03)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_hsl(var(--accent)/0.03)_0%,_transparent_50%)]" />
      
      {/* Floating decorative shapes */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      
      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary via-accent to-primary text-white rounded-full px-10 py-4 mb-8 shadow-2xl backdrop-blur-sm border border-white/20">
            <Dumbbell className="w-6 h-6" />
            <span className="font-bold tracking-wide">Fitness & Health Hub</span>
          </div>
          <h2 className="mb-8 font-display leading-tight">
            Train op jouw niveau,<br />bereik jouw doelen
          </h2>
          <p className="text-2xl font-display italic text-primary mb-6 leading-relaxed">
            Een oldskool buurtgym net als vroegah!
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Haguegym is een kleine gym met persoonlijke aandacht. Een plek waar iedereen zich op z'n gemak voelt. 
            Niet een plek waar je naar toe moet, maar waar je naar toe wilt!
          </p>
        </div>

        {/* Image gallery and 360 Tour */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <img 
              src={IMG4890} 
              alt="HagueGym training sessie" 
              className="w-full h-[350px] object-cover rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all duration-500"
            />
            <img 
              src={IMG4922} 
              alt="HagueGym Fitness Hub" 
              className="w-full h-[350px] object-cover rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all duration-500"
            />
            <img 
              src={IMG5054} 
              alt="HagueGym locatie" 
              className="w-full h-[350px] object-cover rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all duration-500"
            />
          </div>
          
          {/* 360 Tour Section */}
          <div className="text-center mb-8">
            <div className="inline-block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-white px-8 py-4 rounded-2xl border-2 border-primary/10 shadow-elegant">
                <h3 className="text-2xl font-bold text-foreground">Ontdek onze gym in 360°</h3>
                <p className="text-muted-foreground mt-2">Bekijk onze faciliteiten van alle kanten</p>
              </div>
            </div>
          </div>
          
          <Tour360
            tourId="9lBwT7-pZ"
            title="HagueGym 360° Tour"
            description="Bekijk onze moderne gym met alle faciliteiten"
            height="500px"
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-white border-0 shadow-card hover:shadow-elegant transition-smooth text-center rounded-2xl"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Benefits with simple layout */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-8">Waarom HagueGym?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="rounded-full bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-base leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <img 
              src={IMG4982}
              alt="HagueGym trainingsruimte"
              className="w-full h-full min-h-[300px] object-cover rounded-xl shadow-elegant grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Pricing */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-white px-12 py-6 rounded-2xl border-2 border-primary/10 shadow-elegant">
                <div className="inline-flex items-center gap-3 mb-2">
                  <div className="h-1 w-1 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-xs font-heading font-bold tracking-[0.3em] text-primary/60 uppercase">Pricing</span>
                  <div className="h-1 w-1 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h3 className="text-5xl font-heading font-bold text-foreground tracking-tight">
                  Tarieven
                </h3>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {pricing.map((plan, index) => (
              <Card 
                key={index} 
                className="relative p-10 bg-gradient-to-br from-white via-white to-primary/5 border-2 border-primary/10 hover:border-primary/30 shadow-elegant hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 rounded-3xl overflow-hidden group"
              >
                {/* Decorative gradient orbs */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-4">
                    <h4 className="text-lg font-bold text-primary">{plan.title}</h4>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-black bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent">{plan.price}</span>
                      <span className="text-muted-foreground text-lg font-medium">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <div className="rounded-full bg-gradient-to-br from-primary to-accent p-1 mt-0.5 group-hover/item:scale-110 transition-transform">
                          <Check className="h-4 w-4 text-white flex-shrink-0" />
                        </div>
                        <span className="text-base leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={scrollToIntake}
                    className="w-full shadow-lg hover:shadow-xl hover:shadow-primary/30 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
                    size="lg"
                  >
                    Maak afspraak
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Trainers */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-white px-12 py-6 rounded-2xl border-2 border-primary/10 shadow-elegant">
                <div className="inline-flex items-center gap-3 mb-2">
                  <div className="h-1 w-1 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-xs font-heading font-bold tracking-[0.3em] text-primary/60 uppercase">Team</span>
                  <div className="h-1 w-1 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h3 className="text-5xl font-heading font-bold text-foreground tracking-tight">
                  Ons Team
                </h3>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {trainers.map((trainer, index) => (
              <Card key={index} className="p-6 bg-card border-border text-center hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4">
                  <img 
                    src={trainer.photo} 
                    alt={trainer.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-bold mb-1 text-foreground">{trainer.name}</h4>
                <p className="text-sm text-muted-foreground">{trainer.role}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-white px-12 py-6 rounded-2xl border-2 border-primary/10 shadow-elegant">
                <div className="inline-flex items-center gap-3 mb-2">
                  <div className="h-1 w-1 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-xs font-heading font-bold tracking-[0.3em] text-primary/60 uppercase">Reviews</span>
                  <div className="h-1 w-1 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h3 className="text-5xl font-heading font-bold text-foreground tracking-tight">
                  Wat onze leden zeggen
                </h3>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-8 bg-white border-0 shadow-card rounded-2xl">
                <div className="text-primary mb-4 text-2xl">★★★★★</div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">"{review.text}"</p>
                <p className="font-bold text-foreground">- {review.author}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={scrollToIntake}
            size="lg"
            className="text-lg px-8"
          >
            Boek je intake sessie
          </Button>
        </div>
      </div>
    </section>
  );
};
