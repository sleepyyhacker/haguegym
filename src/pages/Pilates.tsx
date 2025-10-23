import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContinuousSnake } from "@/components/ContinuousSnake";
import { IntakeSection } from "@/components/IntakeSection";
import { Tour360 } from "@/components/360Tour";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Clock, Star, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import reformerPilates from "@/assets/reformer-pilates.png";
import IMG4639 from "@/assets/IMG_4639.jpg";
import IMG4647 from "@/assets/IMG_4647.jpg";
import IMG4651 from "@/assets/IMG_4651.jpg";
import IMG4655 from "@/assets/IMG_4655.jpg";
import IMG4658 from "@/assets/IMG_4658.jpg";
import IMG4664 from "@/assets/IMG_4664.jpg";
import IMG4669 from "@/assets/IMG_4669.jpg";
import IMG4671 from "@/assets/IMG_4671.jpg";
import IMG4678 from "@/assets/IMG_4678.jpg";
import IMG4685 from "@/assets/IMG_4685.jpg";
import IMG4703 from "@/assets/IMG_4703.jpg";
import IMG4709 from "@/assets/IMG_4709.jpg";
import IMG4711 from "@/assets/IMG_4711.jpg";
import IMG4713 from "@/assets/IMG_4713.jpg";
import IMG4714 from "@/assets/IMG_4714.jpg";
import IMG4769 from "@/assets/IMG_4769.jpg";
import IMG4787 from "@/assets/IMG_4787.jpg";
import IMG4812 from "@/assets/IMG_4812.jpg";

const Pilates = () => {
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
            backgroundImage: `url(${reformerPilates})`,
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
                Reformer Pilates.<br />
                Kracht & Flexibiliteit.
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Ontdek de kracht van Reformer Pilates. Een complete workout die je lichaam versterkt en je geest kalmeert.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center">
                <Button 
                  onClick={() => scrollToSection('benefits')}
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 font-semibold shadow-lg hover:shadow-xl transition-all relative z-20"
                >
                  Ontdek Voordelen
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

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-slate-50 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Waarom Reformer Pilates?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Reformer Pilates biedt unieke voordelen die je niet vindt bij traditionele workouts.
              </p>
            </div>

            {/* 360 Tour Section */}
            <div className="mb-20">
              <div className="text-center mb-8">
                <div className="inline-block relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-2xl blur-xl opacity-50"></div>
                  <div className="relative bg-white px-8 py-4 rounded-2xl border-2 border-accent/10 shadow-elegant">
                    <h3 className="text-2xl font-bold text-foreground">Ontdek onze Pilates studio in 360°</h3>
                    <p className="text-muted-foreground mt-2">Bekijk onze Reformer Pilates faciliteiten</p>
                  </div>
                </div>
              </div>
              
              <Tour360
                tourId="7nNYmwbNL"
                title="Pilates Studio 360° Tour"
                description="Bekijk onze Reformer Pilates studio en apparatuur"
                height="600px"
                className="max-w-5xl mx-auto"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 rounded-2xl bg-muted/30">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Core Kracht</h3>
                <p className="text-muted-foreground">
                  Versterk je diepe core spieren voor een stabielere en sterkere basis.
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-muted/30">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Flexibiliteit</h3>
                <p className="text-muted-foreground">
                  Verbeter je bewegingsbereik en voorkom blessures door betere flexibiliteit.
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-muted/30">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Mindfulness</h3>
                <p className="text-muted-foreground">
                  Combineer fysieke training met mentale rust en focus.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-display mb-6">Wat is Reformer Pilates?</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Reformer Pilates is een geavanceerde vorm van Pilates die gebruik maakt van een speciaal apparaat 
                  met veren en weerstand. Dit zorgt voor een unieke training die zowel kracht als flexibiliteit ontwikkelt.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Lage impact, hoge resultaten</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Geschikt voor alle niveaus</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Persoonlijke aandacht</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Kleine groepen (max 4 personen)</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src={reformerPilates} 
                  alt="Reformer Pilates" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20 bg-slate-100 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Onze Lessen</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Kies uit verschillende lesvormen die passen bij jouw niveau en voorkeuren.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-display mb-4">Groepslessen</h3>
                <p className="text-muted-foreground mb-6">
                  Train samen met anderen in kleine groepen van maximaal 4 personen. 
                  Perfect voor motivatie en sociale interactie.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Maximaal 4 personen per les</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>50 minuten per sessie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Alle niveaus welkom</span>
                  </li>
                </ul>
                <Button className="w-full relative z-20">
                  Bekijk Schema
                </Button>
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-display mb-4">Personal Training</h3>
                <p className="text-muted-foreground mb-6">
                  Een-op-een begeleiding voor maximale aandacht en persoonlijke doelen. 
                  Perfect voor beginners of specifieke behoeften.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>100% persoonlijke aandacht</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Flexibele tijden</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Op maat gemaakt programma</span>
                  </li>
                </ul>
                <Button className="w-full relative z-20">
                  Boek Sessie
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Welke Pakketten Bieden We Aan?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Kies het pakket dat het beste bij jouw doelen en budget past.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="relative p-6 bg-gradient-to-br from-white via-white to-accent/5 border-2 border-accent/10 hover:border-accent/30 shadow-elegant hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 rounded-3xl overflow-hidden group">
                {/* Floating gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="mb-3">
                    <h4 className="text-xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Single Class</h4>
                  </div>
                  <div className="inline-block px-5 py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl mb-4">
                    <p className="text-4xl font-black bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">€30</p>
                  </div>
                </div>
              </Card>

              <Card className="relative p-6 bg-gradient-to-br from-white via-white to-accent/5 border-2 border-accent/10 hover:border-accent/30 shadow-elegant hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 rounded-3xl overflow-hidden group">
                {/* Floating gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="mb-3">
                    <h4 className="text-xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">2x Try-out Class</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5 min-h-[40px]">1 maand geldig</p>
                  <div className="inline-block px-5 py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl mb-4">
                    <p className="text-4xl font-black bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">€40</p>
                  </div>
                </div>
              </Card>

              <Card className="relative p-6 bg-gradient-to-br from-white via-white to-accent/5 border-2 border-accent/10 hover:border-accent/30 shadow-elegant hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 rounded-3xl overflow-hidden group">
                {/* Floating gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="mb-3">
                    <h4 className="text-xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">5 rittenkaart</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5 min-h-[40px]">2 maanden geldig, €27,50 per les</p>
                  <div className="inline-block px-5 py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl mb-4">
                    <p className="text-4xl font-black bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">€135</p>
                  </div>
                </div>
              </Card>

              <Card className="relative p-6 bg-gradient-to-br from-white via-white to-accent/5 border-2 border-accent/10 hover:border-accent/30 shadow-elegant hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 rounded-3xl overflow-hidden group">
                {/* Floating gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="mb-3">
                    <h4 className="text-xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">10 rittenkaart</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5 min-h-[40px]">3 maanden geldig, €25,- per les</p>
                  <div className="inline-block px-5 py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl mb-4">
                    <p className="text-4xl font-black bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">€250</p>
                  </div>
                </div>
              </Card>

              <Card className="relative p-6 bg-gradient-to-br from-white via-white to-accent/5 border-2 border-accent/10 hover:border-accent/30 shadow-elegant hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 rounded-3xl overflow-hidden group">
                {/* Floating gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="mb-3">
                    <h4 className="text-xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">20 rittenkaart</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5 min-h-[40px]">6 maanden geldig, €22,50 per les</p>
                  <div className="inline-block px-5 py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl mb-4">
                    <p className="text-4xl font-black bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">€450</p>
                  </div>
                </div>
              </Card>

              <Card className="relative p-6 bg-gradient-to-br from-white via-white to-accent/5 border-2 border-accent/10 hover:border-accent/30 shadow-elegant hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 rounded-3xl overflow-hidden group">
                {/* Floating gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="mb-3">
                    <h4 className="text-xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">40 rittenkaart</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5 min-h-[40px]">12 maanden geldig, €20,- per les</p>
                  <div className="inline-block px-5 py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl mb-4">
                    <p className="text-4xl font-black bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">€800</p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="flex justify-center gap-6 mt-6">
              <Card className="relative p-8 bg-gradient-to-br from-white via-white to-accent/5 border-2 border-accent/10 hover:border-accent/30 shadow-elegant hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 rounded-3xl overflow-hidden group max-w-sm">
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
              <Card className="relative p-8 bg-gradient-to-br from-white via-white to-primary/5 border-2 border-primary/10 hover:border-primary/30 shadow-elegant hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 rounded-3xl overflow-hidden group max-w-sm">
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
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-100 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Het Geheim van de Reformer</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ontdek hoe de Reformer Pilates apparatuur werkt en waarom het zo effectief is.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <img 
                      src={IMG4655} 
                      alt="Katrolsysteem" 
                      className="w-full h-48 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Katrolsysteem</h3>
                  <p className="text-muted-foreground">
                    Een glijdende kar die zich beweegt door middel van een katrolsysteem, wat een combinatie biedt van weerstand en ondersteuning voor het lichaam.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <img 
                      src={IMG4769} 
                      alt="Veren" 
                      className="w-full h-48 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Veren</h3>
                  <p className="text-muted-foreground">
                    De Reformer gebruikt veren (springs) om verschillende mate van spanning en weerstand te creëren. Dit helpt om de spieren tegelijkertijd te versterken en te verlengen.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <img 
                      src={IMG4787} 
                      alt="Posities" 
                      className="w-full h-48 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Posities</h3>
                  <p className="text-muted-foreground">
                    Werken op de Reformer geeft de meest geweldige mogelijkheden om je mobiliteit en stabiliteit in evenwicht te brengen in allerlei verschillende posities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Met Veel Plezier Geef Ik Al 14 Jaar Pilates</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Tijdens mijn dansopleiding aan Codarts Rotterdam, maakte ik voor het eerste kennis met Pilates. 
                  Omdat ik merkte dat dit super goed voor je lichaam is, heb ik na de dansacademie gelijk mijn 
                  certificaat Mat Pilates behaald. In 2010 ben ik m'n eigen Dansstudio gestart in Oegstgeest.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Met veel plezier geef ik daar danslessen en mat pilates lessen. 2023 ben ik begonnen met de 
                  STOTT Pilates Reformer opleiding, om mij verder te scholen als All Round Pilates Instructor.
                </p>
                <p className="text-lg text-muted-foreground">
                  Ik heb ervaren dat mensen door Pilates hun lichaam versterken en een betere lichaamshouding krijgen. 
                  Omdat ik daar veel voldoening uit haal, ben ik in 2024 de HAGUEGYM Reformer Pilates studio gestart.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src={IMG4812} 
                    alt="Chee-Ling Pilates instructeur"
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-display mb-2">Chee-Ling</h3>
                <p className="text-muted-foreground">STOTT Pilates Reformer Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-slate-100 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Werk aan een Mooie, Strakke, Gebalanceerde Houding</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Maximaal 6 personen per les voor persoonlijke aandacht.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Bewustzijn van je Lichaam en Geest</h3>
                <p className="text-muted-foreground mb-4">Verhoog je lichaamsbewustzijn en mentale focus.</p>
                <div className="mt-4">
                  <img 
                    src={IMG4664} 
                    alt="Body Awareness" 
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Verbetering van je Spierkracht</h3>
                <p className="text-muted-foreground mb-4">Versterk je hele lichaam op een veilige manier.</p>
                <div className="mt-4">
                  <img 
                    src={IMG4669} 
                    alt="Muscle Strength" 
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Verbeteren van Coördinatie</h3>
                <p className="text-muted-foreground mb-4">Ontwikkel betere lichaamscontrole en beheersing.</p>
                <div className="mt-4">
                  <img 
                    src={IMG4671} 
                    alt="Coordination" 
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Versterken van je Lichaam</h3>
                <p className="text-muted-foreground mb-4">Bouw kracht op in je hele lichaam.</p>
                <div className="mt-4">
                  <img 
                    src={IMG4678} 
                    alt="Body Strength" 
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Minder Nek, Hoofd en Rugklachten</h3>
                <p className="text-muted-foreground mb-4">Verbeter je houding en verminder pijn.</p>
                <div className="mt-4">
                  <img 
                    src={IMG4685} 
                    alt="Posture Improvement" 
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Veel Gestelde Vragen</h2>
            </div>

            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Wat zijn de kleding voorschriften?</h3>
                  <p className="text-muted-foreground">
                    Draag geen losse kleding tijdens Reformer Pilates. Het is namelijk belangrijk dat de instructeur 
                    je lichaamsvormen goed kan zien en kan zien hoe je gewrichten en spieren bewegen. Losse kleding 
                    maakt het voor de instructeur veel moeilijker je beweging te zien en deze waar nodig te corrigeren.
                  </p>
                  <p className="text-muted-foreground mt-3">
                    Hoewel je misschien gewend bent om tijdens sporten schoenen te dragen, is Pilates bedoeld om op 
                    blote voeten en in onze studio op sokken te beoefenen. Draag daarom speciale Pilates/antislip sokken, 
                    zodat je niet van de Reformer afglijdt. Geen ritsen in je broek of shirt in verband met het beschadigen van de Reformer.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Moet je lenig zijn voor pilates?</h3>
                  <p className="text-muted-foreground">
                    Nee, ook als je heel stijf bent kan je gewoon meedoen met een les en zal het bevorderend zijn voor je lenigheid.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Wat is het verschil tussen Level 1 en Level 2?</h3>
                  <p className="text-muted-foreground">
                    Level 1 leer je de basis techniek en oefeningen. Na het beheersen van level 1 kan je door naar level 2, 
                    waar de uitdaging nog groter wordt.
                  </p>
                </CardContent>
              </Card>
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
                      <p className="text-muted-foreground">Weimarstraat 55, 2562 GR<br />Den Haag, Zuid-Holland</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p className="text-muted-foreground">haguegympilates@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display mb-6">Openingstijden</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground">Zie lesrooster</p>
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

export default Pilates;
