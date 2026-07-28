import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, PhoneCall, ChevronDown, Radio, MonitorPlay, Speaker, LayoutGrid } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

type SubLink = { name: string; href: string; icon: React.ElementType; description: string };
type NavLink = { name: string; href: string; children?: SubLink[] };

const serviceDropdown: SubLink[] = [
  { name: "All Services", href: "/services", icon: LayoutGrid, description: "Overview of everything we do" },
  { name: "TV Antenna Installation", href: "/services/antenna", icon: Radio, description: "Digital antenna install & repair" },
  { name: "TV Wall Mounting", href: "/services#tv-wall-mounting", icon: MonitorPlay, description: "Flush mounts, zero visible cables" },
  { name: "Home Theatre", href: "/services#home-theatre", icon: Speaker, description: "Cinema-grade audio & visual" },
];

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", children: serviceDropdown },
  { name: "Why Us", href: "/why-us" },
  { name: "Reviews", href: "reviews" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setDropdownOpen(false);
    if (href.startsWith("/")) {
      // handle hash anchors on the services page
      if (href.includes("#")) {
        const [path, hash] = href.split("#");
        navigate(path);
        setTimeout(() => {
          const el = document.getElementById(hash);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        navigate(href);
      }
    } else {
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
          {navLinks.map((link) =>
            link.children ? (
              /* Dropdown item */
              <div key={link.name} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors tracking-wide ${
                    isScrolled ? "text-slate-700 hover:text-primary" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                    >
                      <div className="p-2">
                        {link.children.map((child) => (
                          <button
                            key={child.name}
                            onClick={() => handleNavClick(child.href)}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors duration-150 text-left group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-150">
                              <child.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors duration-150">
                                {child.name}
                              </div>
                              <div className="text-xs text-slate-400">{child.description}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              /* Regular item */
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors tracking-wide ${
                  isScrolled ? "text-slate-700 hover:text-primary" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            )
          )}
          <Button
            onClick={() => handleNavClick("contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6 gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>1300 FUNKE</span>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden z-50 ${
            isScrolled || mobileMenuOpen ? "text-slate-800" : "text-white/80"
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
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6 pt-16 overflow-y-auto pb-8"
          >
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="flex flex-col items-center gap-2 w-full px-8">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center gap-2 text-2xl font-display font-medium text-slate-800 hover:text-primary transition-colors"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden w-full max-w-xs"
                      >
                        <div className="pt-2 flex flex-col gap-1">
                          {link.children.map((child) => (
                            <button
                              key={child.name}
                              onClick={() => handleNavClick(child.href)}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 hover:bg-primary/5 transition-colors text-left"
                            >
                              <child.icon className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-base font-medium text-slate-800 hover:text-primary transition-colors">
                                {child.name}
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-display font-medium text-slate-800 hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              )
            )}
            <Button
              onClick={() => handleNavClick("contact")}
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
