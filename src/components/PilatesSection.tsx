import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Clock, Check } from "lucide-react";
import reformerPilates from "@/assets/reformer-pilates.png";
import gymInterior1 from "@/assets/gym-interior-1.jpg";

export const PilatesSection = () => {
  const benefits = [
    "Bewustzijn van je lichaam en geest",
    "Verbetering van je spierkracht, lichaam en houding",
    "Verbeteren van coördinatie en beheersing",
    "Versterken van je lichaam",
    "Minder nek, hoofd en rugklachten"
  ];

  const reformerFeatures = [
    {
      title: "Katrolsysteem",
      description: "Een glijdende kar die zich beweegt door middel van een katrolsysteem, wat een combinatie biedt van weerstand en ondersteuning voor het lichaam."
    },
    {
      title: "Veren",
      description: "De Reformer gebruikt veren (springs) om verschillende mate van spanning en weerstand te creëren. Dit helpt om de spieren tegelijkertijd te versterken en te verlengen."
    },
    {
      title: "Posities",
      description: "Werken op de Reformer geeft de meest geweldige mogelijkheden om je mobiliteit en stabiliteit in evenwicht te brengen in allerlei verschillende posities."
    }
  ];

  const pricing = [
    { title: "Single Class", price: "€30", duration: "" },
    { title: "2x Try-out Class", price: "€40", duration: "1 maand geldig" },
    { title: "5 rittenkaart", price: "€135", duration: "2 maanden geldig, €27,50 per les" },
    { title: "10 rittenkaart", price: "€250", duration: "3 maanden geldig, €25,- per les" },
    { title: "20 rittenkaart", price: "€450", duration: "6 maanden geldig, €22,50 per les" },
    { title: "40 rittenkaart", price: "€800", duration: "12 maanden geldig, €20,- per les" }
  ];

  const faqs = [
    {
      question: "Wat zijn de kleding voorschriften?",
      answer: "Draag geen losse kleding tijdens Reformer Pilates. Het is belangrijk dat de instructeur je lichaamsvormen goed kan zien. Draag speciale Pilates/antislip sokken. Geen ritsen in je broek of shirt in verband met beschadigen van de Reformer."
    },
    {
      question: "Moet je lenig zijn voor pilates?",
      answer: "Nee, ook als je heel stijf bent kan je gewoon meedoen met een les en zal het bevorderend zijn voor je lenigheid."
    },
    {
      question: "Wat is het verschil tussen Level 1 en Level 2?",
      answer: "Level 1 leer je de basis techniek en oefeningen. Na het beheersen van level 1 kan je door naar level 2, waar de uitdaging nog groter wordt."
    }
  ];

  return (
    <section id="pilates" className="py-32 px-4 relative overflow-hidden bg-zinc-100 transition-all duration-1000">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--accent)/0.05)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--primary)/0.05)_0%,_transparent_50%)]" />
      
      {/* Floating shapes */}
      <div className="absolute top-32 left-10 w-72 h-72 bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_hsl(var(--border)/0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_hsl(var(--border)/0.1)_1px,_transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,_black,_transparent)]" />
      
      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 gradient-accent text-white rounded-full px-8 py-3 mb-6 shadow-lg glow-accent">
            <Heart className="w-5 h-5" />
            <span className="font-semibold">Reformer Pilates Studio</span>
          </div>
          <h2 className="mb-6">
            Sterk, soepel en<br />in balans
          </h2>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
            Werk aan een mooie, strakke, gebalanceerde houding
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Reformer Pilates bij Haguegym is een groepsles van maximaal 6 personen onder begeleiding van een docent. 
            De oefeningen worden uitgevoerd op daarvoor speciaal ontwikkelde apparatuur. Als beginner start je op level 1 
            en na ongeveer 15 lessen kan je naar level 2.
          </p>
        </div>


        {/* Benefits with overlapping images */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-8">Voordelen van Reformer Pilates</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-base leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] hidden md:block">
              <img 
                src={reformerPilates}
                alt="Reformer Pilates apparatuur"
                className="absolute left-0 top-0 w-3/5 h-[350px] object-cover rounded-2xl shadow-2xl z-10"
              />
              <img 
                src={gymInterior1}
                alt="Pilates studio interieur"
                className="absolute right-0 bottom-0 w-3/5 h-[350px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Reformer Features */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-[calc((100vw-1280px)/2)] px-4 sm:px-6 lg:px-8 py-20 mb-16 bg-zinc-800 overflow-hidden transition-all duration-1000">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.1)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--accent)/0.1)_0%,_transparent_50%)]" />
          
          {/* Decorative orbs */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl" />
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-accent/10 to-white/10 rounded-2xl blur-xl opacity-60"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-sm px-12 py-6 rounded-2xl border-2 border-white/10 shadow-2xl">
                  <h3 className="text-5xl font-heading font-bold text-white tracking-tight">
                    Het geheim van de Reformer
                  </h3>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {reformerFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="group relative p-8 bg-white hover:bg-white border border-border hover:border-accent/50 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* About Instructor */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">Over Chee-Ling</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Tijdens mijn dansopleiding aan Codarts Rotterdam, maakte ik voor het eerste kennis met Pilates. 
                Omdat ik merkte dat dit super goed voor je lichaam is, heb ik na de dansacademie gelijk mijn 
                certificaat Mat Pilates behaald. In 2010 ben ik m'n eigen Dansstudio gestart in Oegstgeest.
              </p>
              <p>
                Met veel plezier geef ik daar danslessen en mat pilates lessen. 2023 ben ik begonnen met de 
                STOTT Pilates Reformer opleiding, om mij verder te scholen als All Round Pilates Instructor.
              </p>
              <p>
                Ik heb ervaren dat mensen door Pilates hun lichaam versterken en een betere lichaamshouding krijgen. 
                Omdat ik daar veel voldoening uit haal, ben ik in 2024 de HAGUEGYM Reformer Pilates studio gestart.
              </p>
            </div>
          </Card>
        </div>

        {/* Pricing */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-white px-12 py-6 rounded-2xl border-2 border-accent/10 shadow-elegant">
                <div className="inline-flex items-center gap-3 mb-2">
                  <div className="h-1 w-1 rounded-full bg-accent animate-pulse"></div>
                  <span className="text-xs font-heading font-bold tracking-[0.3em] text-accent/60 uppercase">Pricing</span>
                  <div className="h-1 w-1 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h3 className="text-5xl font-heading font-bold text-foreground tracking-tight">
                  Tarieven
                </h3>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricing.map((plan, index) => (
              <Card 
                key={index} 
                className="relative p-6 bg-gradient-to-br from-white via-white to-accent/5 border-2 border-accent/10 hover:border-accent/30 shadow-elegant hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 rounded-3xl overflow-hidden group"
              >
                {/* Floating gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="mb-3">
                    <h4 className="text-xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">{plan.title}</h4>
                  </div>
                  {plan.duration && (
                    <p className="text-sm text-muted-foreground mb-5 min-h-[40px]">{plan.duration}</p>
                  )}
                  <div className="inline-block px-5 py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl mb-4">
                    <p className="text-4xl font-black bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">{plan.price}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Card className="relative p-8 bg-gradient-to-br from-white via-white to-accent/5 border-2 border-accent/10 hover:border-accent/30 shadow-elegant hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 rounded-3xl overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full mb-3">
                  <h4 className="text-lg font-bold text-accent">Private class</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-5">3 maanden geldig, 1 persoon</p>
                <div className="inline-block px-5 py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl">
                  <p className="text-5xl font-black bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">€70</p>
                </div>
              </div>
            </Card>
            <Card className="relative p-8 bg-gradient-to-br from-white via-white to-primary/5 border-2 border-primary/10 hover:border-primary/30 shadow-elegant hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 rounded-3xl overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-3">
                  <h4 className="text-lg font-bold text-primary">Duo class</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-5">3 maanden geldig, 2 personen</p>
                <div className="inline-block px-5 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
                  <p className="text-5xl font-black bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">€100</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Schedule Widget */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h3 className="mb-4">Bekijk het lesrooster en schrijf je in</h3>
            <p className="text-lg text-muted-foreground">
              Kies jouw favoriete tijd en reserveer direct jouw plek in de les
            </p>
          </div>
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-elegant relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />
            
            <div className="relative z-10 w-full rounded-2xl overflow-hidden" style={{ minHeight: '700px' }}>
              <iframe
                src="https://haguegym.trainin.app/widget/schedule?location=NB7EE"
                className="w-full"
                style={{ height: '700px', border: 'none' }}
                title="Pilates Schedule"
              />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-white px-12 py-6 rounded-2xl border-2 border-accent/10 shadow-elegant">
                <div className="inline-flex items-center gap-3 mb-2">
                  <div className="h-1 w-1 rounded-full bg-accent animate-pulse"></div>
                  <span className="text-xs font-heading font-bold tracking-[0.3em] text-accent/60 uppercase">FAQ</span>
                  <div className="h-1 w-1 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h3 className="text-5xl font-heading font-bold text-foreground tracking-tight">
                  Veel gestelde vragen
                </h3>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <h4 className="text-lg font-bold mb-3">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
