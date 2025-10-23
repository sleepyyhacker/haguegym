import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContinuousSnake } from "@/components/ContinuousSnake";
import { IntakeSection } from "@/components/IntakeSection";
import { Tour360 } from "@/components/360Tour";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Dumbbell, Clock, Users, Star, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import IMG4885 from "@/assets/IMG_4885.jpg";
import IMG4890 from "@/assets/IMG_4890.jpg";
import IMG4907 from "@/assets/IMG_4907.jpg";
import IMG4922 from "@/assets/IMG_4922.jpg";
import IMG4936 from "@/assets/IMG_4936.jpg";
import IMG4952 from "@/assets/IMG_4952.jpg";
import IMG4966 from "@/assets/IMG_4966.jpg";
import IMG4982 from "@/assets/IMG_4982.jpg";
import IMG5000 from "@/assets/IMG_5000.jpg";
import IMG5017 from "@/assets/IMG_5017.jpg";
import IMG5039 from "@/assets/IMG_5039.jpg";
import IMG5058 from "@/assets/IMG_5058.jpg";
import IMG5075 from "@/assets/IMG_5075.jpg";
import IMG5090 from "@/assets/IMG_5090.jpg";
import IMG5093 from "@/assets/IMG_5093.jpg";
import IMG5094 from "@/assets/IMG_5094.jpg";
import JulienPhoto from "@/assets/Julien.webp";
import AikoPhoto from "@/assets/aiko.webp";
import LucienPhoto from "@/assets/lucien.webp";
import NadiaPhoto from "@/assets/nadia.webp";
import CaelumPhoto from "@/assets/caelum.webp";

const Gym = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative">
      <ContinuousSnake />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${IMG4907})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/20" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="container relative z-10 px-6 py-32">
          <div className="max-w-6xl mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl mb-8 animate-fade-in text-white leading-[1.1] font-display tracking-tight" style={{textShadow: '0 4px 20px rgba(0,0,0,0.5)'}}>
                Moderne Gym.<br />
                Maximale Resultaten.
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Train in onze state-of-the-art gym met de nieuwste apparatuur en persoonlijke begeleiding.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center">
                <Button 
                  onClick={() => scrollToSection('facilities')}
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 font-semibold shadow-lg hover:shadow-xl transition-all relative z-20"
                >
                  Bekijk Faciliteiten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  className="bg-accent text-white hover:bg-accent/90 font-semibold shadow-lg hover:shadow-xl transition-all relative z-20"
                >
                  Gratis Proefles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto" />
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-slate-50 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Onze Faciliteiten</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Alles wat je nodig hebt voor een complete workout in één moderne ruimte.
              </p>
            </div>

            {/* 360 Tour Section */}
            <div className="mb-20">
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
                height="600px"
                className="max-w-5xl mx-auto"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h3 className="text-3xl font-display mb-6">Moderne Apparatuur</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Train met de nieuwste fitness apparatuur van topmerken. Van cardio tot krachttraining, 
                  we hebben alles wat je nodig hebt voor jouw fitness doelen.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Dumbbell className="h-5 w-5 text-primary" />
                    <span>Volledige krachttraining setup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>24/7 toegang mogelijk</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Persoonlijke begeleiding</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src={IMG4907} 
                  alt="Gym Interior" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <img 
                  src={IMG4922} 
                  alt="Gym Training" 
                  className="rounded-2xl shadow-2xl"
                />
                {/* Personal training image */}
                <div className="absolute -top-6 -left-6 w-24 h-24">
                  <img 
                    src={IMG4936} 
                    alt="Personal Training" 
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-display mb-6">Professionele Begeleiding</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Onze ervaren trainers helpen je bij het bereiken van jouw doelen. 
                  Van beginners tot gevorderden, iedereen is welkom.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-primary" />
                    <span>Gecertificeerde trainers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Groepslessen en personal training</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Flexibele tijden</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-slate-100 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Welke Pakketten Bieden We Aan?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Kies het pakket dat het beste bij jouw doelen en budget past.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="relative p-10 bg-gradient-to-br from-white via-white to-primary/5 border-2 border-primary/10 hover:border-primary/30 shadow-elegant hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 rounded-3xl overflow-hidden group">
                {/* Decorative gradient orbs */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-4">
                    <h4 className="text-lg font-bold text-primary">Basis abonnement</h4>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-black bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent">€60</span>
                      <span className="text-muted-foreground text-lg font-medium">per maand</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-start gap-3 group/item">
                      <div className="rounded-full bg-gradient-to-br from-primary to-accent p-1 mt-0.5 group-hover/item:scale-110 transition-transform">
                        <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                      </div>
                      <span className="text-base leading-relaxed">12 maanden looptijd</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="rounded-full bg-gradient-to-br from-primary to-accent p-1 mt-0.5 group-hover/item:scale-110 transition-transform">
                        <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                      </div>
                      <span className="text-base leading-relaxed">Onbeperkt krachttraining + groepslessen</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="rounded-full bg-gradient-to-br from-primary to-accent p-1 mt-0.5 group-hover/item:scale-110 transition-transform">
                        <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                      </div>
                      <span className="text-base leading-relaxed">In 45 minuten een complete full body workout</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="rounded-full bg-gradient-to-br from-primary to-accent p-1 mt-0.5 group-hover/item:scale-110 transition-transform">
                        <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                      </div>
                      <span className="text-base leading-relaxed">6 maanden: €70 per maand</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="rounded-full bg-gradient-to-br from-primary to-accent p-1 mt-0.5 group-hover/item:scale-110 transition-transform">
                        <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                      </div>
                      <span className="text-base leading-relaxed">2 maanden: €80 per maand</span>
                    </li>
                  </ul>
                  
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full shadow-lg hover:shadow-xl hover:shadow-primary/30 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
                    size="lg"
                  >
                    Maak afspraak
                  </Button>
                </div>
              </Card>

              <Card className="relative p-10 bg-gradient-to-br from-white via-white to-primary/5 border-2 border-primary/10 hover:border-primary/30 shadow-elegant hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 rounded-3xl overflow-hidden group">
                {/* Decorative gradient orbs */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-4">
                    <h4 className="text-lg font-bold text-primary">Personal training</h4>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-black bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent">€25</span>
                      <span className="text-muted-foreground text-lg font-medium">per training</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-start gap-3 group/item">
                      <div className="rounded-full bg-gradient-to-br from-primary to-accent p-1 mt-0.5 group-hover/item:scale-110 transition-transform">
                        <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                      </div>
                      <span className="text-base leading-relaxed">1 trainer op max 4 klanten</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="rounded-full bg-gradient-to-br from-primary to-accent p-1 mt-0.5 group-hover/item:scale-110 transition-transform">
                        <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                      </div>
                      <span className="text-base leading-relaxed">16x trainen (looptijd 16 weken)</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="rounded-full bg-gradient-to-br from-primary to-accent p-1 mt-0.5 group-hover/item:scale-110 transition-transform">
                        <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                      </div>
                      <span className="text-base leading-relaxed">Trainen op afspraak</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="rounded-full bg-gradient-to-br from-primary to-accent p-1 mt-0.5 group-hover/item:scale-110 transition-transform">
                        <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                      </div>
                      <span className="text-base leading-relaxed">Krachttraining (focus op free weights)</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="rounded-full bg-gradient-to-br from-primary to-accent p-1 mt-0.5 group-hover/item:scale-110 transition-transform">
                        <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                      </div>
                      <span className="text-base leading-relaxed">Pakketprijs €400 voor 16 trainingen</span>
                    </li>
                  </ul>
                  
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full shadow-lg hover:shadow-xl hover:shadow-primary/30 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
                    size="lg"
                  >
                    Maak afspraak
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Professionele Begeleiding van het Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Onze ervaren trainers helpen je bij het bereiken van jouw doelen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img 
                      src={JulienPhoto} 
                      alt="Julien"
                      className="w-20 h-20 rounded-full mx-auto object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Julien</h3>
                  <p className="text-muted-foreground">Founder, Personal trainer</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img 
                      src={AikoPhoto} 
                      alt="Aiko"
                      className="w-20 h-20 rounded-full mx-auto object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Aiko</h3>
                  <p className="text-muted-foreground">Personal trainer</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img 
                      src={LucienPhoto} 
                      alt="Lucien"
                      className="w-20 h-20 rounded-full mx-auto object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Lucien</h3>
                  <p className="text-muted-foreground">Personal trainer</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img 
                      src={NadiaPhoto} 
                      alt="Nadia"
                      className="w-20 h-20 rounded-full mx-auto object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Nadia</h3>
                  <p className="text-muted-foreground">Personal trainer</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img 
                      src={CaelumPhoto} 
                      alt="Caelum"
                      className="w-20 h-20 rounded-full mx-auto object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Caelum</h3>
                  <p className="text-muted-foreground">Personal trainer</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-slate-100 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Reacties van Onze Enthousiaste Leden</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Lees wat onze leden zeggen over hun ervaring bij HagueGym.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "De expertise van Julien is ongekend. Zelfs als ik vragen heb waar niet direct antwoord op is dan kan ik de volgende dag een appje verwachten met antwoorden op mijn moeilijke vragen."
                  </p>
                  <p className="font-semibold">Niqshal</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Super fijne gym waar je je eigen 'station' hebt met alles wat je nodig hebt voor je training, waardoor je niet eindeloos hoeft te wachten op je mede-sporters."
                  </p>
                  <p className="font-semibold">Jessica</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Ik ben heel erg tevreden met de HagueGym. Julien is echt een top trainer en bovendien een heel aardige vent die je altijd met veel energie en een groot glimlach verwelkomt."
                  </p>
                  <p className="font-semibold">Paola</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Waarom Kiezen voor HagueGym?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Een gezellige kleine gym met persoonlijke aandacht.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Full Body Krachttraining in 45 Minuten</h3>
                <p className="text-muted-foreground">Efficiënte training die past in jouw drukke schema.</p>
                <div className="mt-4">
                  <img 
                    src={IMG4952} 
                    alt="Efficient Training" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Dumbbell className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">8 Machines in de Ideale Volgorde</h3>
                <p className="text-muted-foreground">Geoptimaliseerd circuit voor maximale resultaten.</p>
                <div className="mt-4">
                  <img 
                    src={IMG4966} 
                    alt="Circuit Training" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Nooit Wachten op een Machine</h3>
                <p className="text-muted-foreground">Kleine groepen zorgen voor persoonlijke aandacht.</p>
                <div className="mt-4">
                  <img 
                    src={IMG4982} 
                    alt="Small Groups" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Voor Beginner en Gevorderde Sporter</h3>
                <p className="text-muted-foreground">Iedereen is welkom, ongeacht ervaringsniveau.</p>
                <div className="mt-4">
                  <img 
                    src={IMG5000} 
                    alt="All Levels" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Minimale Kans op Blessures</h3>
                <p className="text-muted-foreground">Veilige apparatuur en professionele begeleiding.</p>
                <div className="mt-4">
                  <img 
                    src={IMG5017} 
                    alt="Safe Training" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Onbeperkt Inplannen</h3>
                <p className="text-muted-foreground">Flexibele tijden die passen bij jouw agenda.</p>
                <div className="mt-4">
                  <img 
                    src={IMG5039} 
                    alt="Flexible Scheduling" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-slate-100 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-display mb-6">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Adres</p>
                      <p className="text-muted-foreground">Weimarstraat 13, 2562 GN<br />Den Haag, Zuid-Holland</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Telefoon</p>
                      <p className="text-muted-foreground">+31 (0) 6 123 62 218</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p className="text-muted-foreground">julienoosterbaan@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display mb-6">Openingstijden</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground">Ma. tm vr. 07:00/13:00 en 16:00/22:00</p>
                  <p className="text-muted-foreground">Za. tm zo. 08:00/14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intake Form Section */}
      <IntakeSection />

      <Footer />
    </div>
  );
};

export default Gym;
