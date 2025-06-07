
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent/20 bg-primary text-accent backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="font-playfair font-semibold text-xl text-accent">Manish Makeover</a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#best-sellers" className="text-sm font-medium text-accent hover:text-gold transition-colors" onClick={(e) => {
            e.preventDefault();
            scrollToSection("best-sellers");
          }}>
            Trending Now
          </a>
          <a href="#all-products" className="text-sm font-medium text-accent hover:text-gold transition-colors" onClick={(e) => {
            e.preventDefault();
            scrollToSection("all-products");
          }}>
            All Services
          </a>
          <a href="#gallery" className="text-sm font-medium text-accent hover:text-gold transition-colors" onClick={(e) => {
            e.preventDefault();
            scrollToSection("gallery");
          }}>
            Recent Works
          </a>
          <a href="#about" className="text-sm font-medium text-accent hover:text-gold transition-colors" onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}>
            About Me
          </a>
          <a href="#contact" className="text-sm font-medium text-accent hover:text-gold transition-colors" onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}>
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden text-accent hover:text-gold hover:bg-accent/10" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-primary md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <div className="font-playfair font-semibold text-xl text-accent">Manish Makeover</div>
            <Button variant="ghost" size="icon" className="text-accent hover:text-gold hover:bg-accent/10" onClick={toggleMenu}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="container bg-primary grid gap-6 py-6">
            <a href="#best-sellers" className="text-lg font-medium text-accent hover:text-gold transition-colors" onClick={(e) => {
              e.preventDefault();
              scrollToSection("best-sellers");
            }}>
              Trending Now
            </a>
            <a href="#all-products" className="text-lg font-medium text-accent hover:text-gold transition-colors" onClick={(e) => {
              e.preventDefault();
              scrollToSection("all-products");
            }}>
              All Services
            </a>
            <a href="#gallery" className="text-lg font-medium text-accent hover:text-gold transition-colors" onClick={(e) => {
              e.preventDefault();
              scrollToSection("gallery");
            }}>
              Recent Work
            </a>
            <a href="#about" className="text-lg font-medium text-accent hover:text-gold transition-colors" onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}>
              About Me
            </a>
            <a href="#contact" className="text-lg font-medium text-accent hover:text-gold transition-colors" onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
