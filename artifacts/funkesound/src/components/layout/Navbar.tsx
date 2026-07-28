import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, PhoneCall } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      // scroll anchor — if not on home, go home first then scroll
      if (location !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(href);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        const el = document.getElementById(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "why-us" },
    { name: "Reviews", href: "reviews" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer z-50">
          <img 
            src={logo} 
            alt="Funkesound Logo" 
            className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors tracking-wide ${
                isScrolled ? 'text-slate-700 hover:text-primary' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => handleNavClick('contact')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6 gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>1300 FUNKE</span>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden z-50 ${
            isScrolled || mobileMenuOpen ? 'text-slate-800' : 'text-white/80'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pt-16"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl font-display font-medium text-slate-800 hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button 
              onClick={() => handleNavClick('contact')}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-8 mt-4 gap-2 text-lg"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Call 1300 FUNKE</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
