import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContinuousSnake } from "@/components/ContinuousSnake";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";
import IMG4907 from "@/assets/IMG_4907.jpg";
import IMG4922 from "@/assets/IMG_4922.jpg";
import IMG4952 from "@/assets/IMG_4952.jpg";
import IMG4982 from "@/assets/IMG_4982.jpg";
import IMG5000 from "@/assets/IMG_5000.jpg";

const Contact = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

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
          backgroundImage: `url(${IMG4922})`,
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
            <h1 className="text-5xl md:text-6xl mb-8 text-white leading-[1.1] font-display tracking-tight" style={{textShadow: '0 4px 20px rgba(0,0,0,0.5)'}}>
              Neem Contact Op
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Klaar om te beginnen? Boek een gratis proefles of stel je vraag. We helpen je graag verder.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-display mb-8">Stuur een bericht</h2>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      Contactformulier
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Voornaam *</Label>
                        <Input id="firstName" placeholder="Je voornaam" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Achternaam *</Label>
                        <Input id="lastName" placeholder="Je achternaam" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">E-mailadres *</Label>
                      <Input id="email" type="email" placeholder="je@email.nl" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefoonnummer</Label>
                      <Input id="phone" type="tel" placeholder="06-12345678" />
                    </div>
                    <div>
                      <Label htmlFor="interest">Ik ben geïnteresseerd in:</Label>
                      <select 
                        id="interest" 
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Selecteer een optie</option>
                        <option value="gym">Gym training</option>
                        <option value="pilates">Reformer Pilates</option>
                        <option value="both">Beide</option>
                        <option value="info">Algemene informatie</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message">Bericht *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Vertel ons over je doelen, ervaring of vragen..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full bg-accent text-white hover:bg-accent/90 font-semibold shadow-lg hover:shadow-xl transition-all relative z-20">
                      Verstuur Bericht
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-display mb-8">Contactgegevens</h2>
                <div className="space-y-6">
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Adres</h3>
                          <p className="text-muted-foreground">
                            Den Haag<br />
                            Nederland
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Telefoon</h3>
                          <p className="text-muted-foreground">
                            <a href="tel:+31612345678" className="hover:text-primary transition-colors">
                              +31 6 1234 5678
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">E-mail</h3>
                          <p className="text-muted-foreground">
                            <a href="mailto:info@haguegym.nl" className="hover:text-primary transition-colors">
                              info@haguegym.nl
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Openingstijden</h3>
                          <div className="text-muted-foreground space-y-1">
                            <p>Ma - Vr: 6:00 - 22:00</p>
                            <p>Za - Zo: 8:00 - 20:00</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-slate-100 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Klaar om te beginnen?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Boek direct een gratis proefles en ervaar zelf wat HagueGym voor jou kan betekenen.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Gym Proefles</h3>
                  <p className="text-muted-foreground mb-6">
                    Ontdek onze moderne gym met persoonlijke begeleiding
                  </p>
                    <Button className="w-full relative z-20">
                      Boek Gym Proefles
                    </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Pilates Proefles</h3>
                  <p className="text-muted-foreground mb-6">
                    Ervaar de kracht van Reformer Pilates in kleine groepen
                  </p>
                    <Button className="w-full relative z-20">
                      Boek Pilates Proefles
                    </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
