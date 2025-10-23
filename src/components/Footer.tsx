import { MapPin, Mail, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Fitness & Health Hub */}
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              Fitness & Health Hub
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Adres</h4>
                <p className="text-muted-foreground">
                  Weimarstraat 13<br />
                  2562 GN Den Haag<br />
                  Zuid-Holland, Nederland
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Contact</h4>
                <p className="text-muted-foreground">
                  <a href="tel:+31612362218" className="hover:text-primary transition-smooth">
                    +31 (0) 6 123 62 218
                  </a>
                  <br />
                  <a href="mailto:julienoosterbaan@gmail.com" className="hover:text-primary transition-smooth">
                    julienoosterbaan@gmail.com
                  </a>
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Openingstijden</h4>
                <p className="text-muted-foreground">
                  Ma. t/m vr. 07:00 - 13:00 en 16:00 - 22:00<br />
                  Za. t/m zo. 08:00 - 14:00
                </p>
              </div>
            </div>
          </div>

          {/* Reformer Pilates Studio */}
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-accent" />
              Reformer Pilates Studio
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Adres</h4>
                <p className="text-muted-foreground">
                  Weimarstraat 55<br />
                  2562 GR Den Haag<br />
                  Zuid-Holland, Nederland
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Contact</h4>
                <p className="text-muted-foreground">
                  <a href="mailto:haguegympilates@gmail.com" className="hover:text-accent transition-smooth">
                    haguegympilates@gmail.com
                  </a>
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Openingstijden</h4>
                <p className="text-muted-foreground">
                  Zie lesrooster
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <h4 className="font-semibold flex items-center gap-2">
                <Instagram className="h-5 w-5 text-primary" />
                Volg Ons
              </h4>
              <a 
                href="https://www.instagram.com/haguegym/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                @haguegym
              </a>
              <a 
                href="https://www.facebook.com/Haguegym" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Facebook
              </a>
            </div>
            
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} HagueGym. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
