import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Menu, X, PhoneCall, ChevronDown,
  Radio, MonitorPlay, Speaker, LayoutGrid,
  Settings2, Music, Film,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

type SubLink = { name: string; href: string; icon: React.ElementType; description: string };
type NavLink = { name: string; href: string; children?: SubLink[] };

const serviceDropdown: SubLink[] = [
  { name: "All Services",           href: "/services",                       icon: LayoutGrid,  description: "Overview of everything we do"        },
  { name: "TV Antenna Installation", href: "/services/antenna",               icon: Radio,       description: "Digital antenna install & repair"     },
  { name: "TV Wall Mounting",        href: "/services/tv-wall-mounting",      icon: MonitorPlay, description: "Flush mounts, zero visible cables"    },
  { name: "Home Theatre",            href: "/services/home-theatre",          icon: Speaker,     description: "Cinema-grade audio & visual"          },
  { name: "Remote Programming",      href: "/services/remote-programming",    icon: Settings2,   description: "One remote to control everything"     },
  { name: "Hi-Fi Installations",     href: "/services/hi-fi",                 icon: Music,       description: "Premium audio, expertly installed"    },
  { name: "Projectors & Screens",    href: "/services/projectors-screens",    icon: Film,        description: "Cinema-scale picture in your home"    },
];

const navLinks: NavLink[] = [
  { name: "Home",     href: "/" },
  { name: "About",    href: "/about" },
  { name: "Services", href: "/services", children: serviceDropdown },
  { name: "Why Us",   href: "/why-us" },
  { name: "Reviews",  href: "/reviews" },
  { name: "Contact",  href: "/contact" },
];

export function Navbar() {
  const [isScrolled,         setIsScrolled]         = useState(false);
  const [mobileMenuOpen,     setMobileMenuOpen]     = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen,       setDropdownOpen]       = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  // Scroll state
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setDropdownOpen(false);
    navigate(href);
  };

  const isLight = isScrolled;

  return (
    <>
      {/* ── Fixed header bar ─────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isLight
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-5 md:px-10 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer relative">
            <img
              src={logo}
              alt="Funkesound Logo"
              className="h-8 lg:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* ── Desktop Nav (lg+) ─────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors tracking-wide ${
                      isLight ? "text-slate-700 hover:text-primary" : "text-white/80 hover:text-white"
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
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors tracking-wide ${
                    isLight ? "text-slate-700 hover:text-primary" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              )
            )}

            <a href="tel:0414685502">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-5 gap-2 text-sm">
                <PhoneCall className="w-4 h-4" />
                <span>0414 685 502</span>
              </Button>
            </a>
          </nav>

          {/* ── Hamburger toggle (< lg) ──────────────────────────────── */}
          <button
            aria-label="Open menu"
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
              isLight ? "text-slate-800" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* ── Full-screen mobile menu overlay (sibling of header, z-[9999]) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col overflow-y-auto"
          >
            {/* Close button */}
            <div className="flex items-center justify-between px-5 pt-4 pb-2 flex-shrink-0">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                <img src={logo} alt="Funkesound Logo" className="h-8 w-auto opacity-90" />
              </Link>
              <button
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 flex flex-col px-8 pt-6 pb-4 gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full py-4 text-2xl font-display font-semibold text-white hover:text-primary transition-colors border-b border-white/8"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 pb-2 flex flex-col gap-1">
                            {link.children.map((child) => (
                              <button
                                key={child.name}
                                onClick={() => handleNavClick(child.href)}
                                className="flex items-center gap-4 px-4 py-3.5 rounded-xl bg-white/5 hover:bg-primary/10 transition-colors text-left group"
                              >
                                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <child.icon className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                  <div className="text-base font-semibold text-white group-hover:text-primary transition-colors">
                                    {child.name}
                                  </div>
                                  <div className="text-xs text-slate-500">{child.description}</div>
                                </div>
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
                    className="text-left w-full py-4 text-2xl font-display font-semibold text-white hover:text-primary transition-colors border-b border-white/8"
                  >
                    {link.name}
                  </button>
                )
              )}
            </div>

            {/* CTAs at bottom */}
            <div className="px-8 pb-10 pt-4 flex flex-col gap-3 flex-shrink-0">
              <a href="tel:0414685502" className="block">
                <Button
                  size="lg"
                  className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-2xl gap-3 text-base"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call 0414 685 502
                </Button>
              </a>
              <button
                onClick={() => handleNavClick("/contact")}
                className="w-full h-12 text-sm font-semibold text-slate-400 hover:text-white transition-colors rounded-2xl border border-white/10 hover:border-white/20"
              >
                Get a Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
