import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const backgroundImages = [
    "/images/IMG_5012.jpg",
    "/images/IMG_5025.jpg",
    "/images/IMG_5051.jpg",
    "/images/IMG_4721.jpg",
    "/images/IMG_4886.jpg"
  ];

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Images */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === 0 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              animationDelay: `${index * 3}s`,
              animation: `fadeInOut 15s infinite ${index * 3}s`
            }}
          />
        ))}
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
              Meer uit je training.<br />
              Meer uit jezelf.
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('gym')}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Ontdek Gym
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection('pilates')}
                size="lg"
                className="bg-accent text-white hover:bg-accent/90 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Ontdek Reformer Pilates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Google Reviews */}
            <div className="mt-10 inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white/90 text-xs font-medium">4.9 uit 52 reviews</span>
                </div>
              </div>
              <a 
                href="https://maps.app.goo.gl/A2SdeDVgLMcYW6BM8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </a>
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
  );
};
