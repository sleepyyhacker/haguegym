import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleNavigation = (path: string) => {
    // Close mobile menu
    setIsOpen(false);
    
    // If navigating to a different page, scroll to top
    if (location.pathname !== path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Gym", path: "/gym", id: "gym" },
    { label: "Reformer Pilates", path: "/pilates", id: "pilates" },
    { label: "FAQ", path: "/faq", id: "faq" },
    { label: "Contact", path: "/contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-foreground/20 backdrop-blur-md rounded-full border border-white/10 shadow-2xl px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" onClick={() => handleNavigation('/')} className="flex items-center gap-2 cursor-pointer">
            <img src="/images/new-logo.png" alt="HagueGym Logo" className="h-10 w-auto object-contain object-center brightness-0 invert" style={{ marginTop: '12px' }} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => handleNavigation(item.path)}
                className="text-white/80 hover:text-white transition-colors font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" onClick={() => handleNavigation('/contact')}>
              <Button 
                className="font-semibold h-9 px-5 text-sm"
              >
                Gratis Intake
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => handleNavigation(item.path)}
                className="block w-full text-left py-3 px-4 text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 mt-4">
              <Link to="/contact" onClick={() => handleNavigation('/contact')}>
                <Button className="w-full">
                  Gratis Intake
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
