import { Link } from "wouter";
import logo from "@/assets/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 md:py-16">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img src={logo} alt="Funkesound Logo" className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-foreground/60 max-w-sm mb-6">
              Premium home technology installation in Sydney. TV wall mounting, home theatre setups, and professional antenna installations.
            </p>
            <p className="text-primary font-bold text-xl">
              1300 FUNKE
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display tracking-wider uppercase text-sm">Services</h4>
            <ul className="space-y-4">
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} className="text-foreground/60 hover:text-primary transition-colors">TV Wall Mounting</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} className="text-foreground/60 hover:text-primary transition-colors">Home Theatre Installs</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} className="text-foreground/60 hover:text-primary transition-colors">Antenna Installation</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display tracking-wider uppercase text-sm">Company</h4>
            <ul className="space-y-4">
              <li><button onClick={() => document.getElementById('why-us')?.scrollIntoView({behavior: 'smooth'})} className="text-foreground/60 hover:text-primary transition-colors">Why Choose Us</button></li>
              <li><button onClick={() => document.getElementById('reviews')?.scrollIntoView({behavior: 'smooth'})} className="text-foreground/60 hover:text-primary transition-colors">Reviews</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="text-foreground/60 hover:text-primary transition-colors">Contact</button></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/40">
          <p>© {currentYear} Funkesound. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
