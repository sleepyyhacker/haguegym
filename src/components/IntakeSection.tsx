import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const IntakeSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent("Intake Gesprek Aanvraag - HagueGym");
    const body = encodeURIComponent(
      `Naam: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefoon: ${formData.phone}\n\n` +
      `Bericht:\n${formData.message}`
    );
    
    window.location.href = `mailto:info@haguegym.nl?subject=${subject}&body=${body}`;
    
    toast({
      title: "Email wordt geopend",
      description: "Je email client wordt geopend om het bericht te versturen.",
    });
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden bg-white transition-all duration-1000">
      {/* Clean modern background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--primary)/0.03)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_hsl(var(--accent)/0.03)_0%,_transparent_50%)]" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="mb-6 font-display">Klaar om te starten?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Vul onderstaand formulier in en we nemen zo snel mogelijk contact met je op voor een gratis intake gesprek
            </p>
          </div>

          {/* Form */}
          <Card className="p-10 md:p-14 shadow-xl border-0 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base">Naam *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 bg-background border-border text-foreground"
                    placeholder="Je volledige naam"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 bg-background border-border text-foreground"
                    placeholder="je@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base">Telefoon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 bg-background border-border text-foreground"
                    placeholder="06 12345678"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-base">Vertel ons over je doelen</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 bg-background border-border text-foreground min-h-[120px]"
                    placeholder="Wat wil je bereiken? Wat is je ervaring met fitness/pilates?"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full text-lg"
                >
                  Verstuur Aanvraag
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
  );
};
