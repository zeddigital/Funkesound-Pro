import { Link, useLocation } from "wouter";
import logo from "@/assets/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [, navigate] = useLocation();

  const goTo = (path: string) => navigate(path);

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 md:py-16">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img src={logo} alt="Funkesound Logo" className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-slate-500 max-w-sm mb-6">
              Premium home technology installation in Melbourne & the Mornington Peninsula. TV wall mounting, home theatre setups, and professional antenna installations.
            </p>
            <a href="tel:0414685502" className="text-primary font-bold text-xl hover:text-primary/80 transition-colors">
              0414 685 502
            </a>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display tracking-wider uppercase text-sm">Services</h4>
            <ul className="space-y-4">
              <li><button onClick={() => goTo('/services/tv-wall-mounting')} className="text-slate-400 hover:text-primary transition-colors">TV Wall Mounting</button></li>
              <li><button onClick={() => goTo('/services/home-theatre')} className="text-slate-400 hover:text-primary transition-colors">Home Theatre Installs</button></li>
              <li><button onClick={() => goTo('/services/antenna')} className="text-slate-400 hover:text-primary transition-colors">Antenna Installation</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display tracking-wider uppercase text-sm">Company</h4>
            <ul className="space-y-4">
              <li><button onClick={() => goTo('/why-us')} className="text-slate-400 hover:text-primary transition-colors">Why Choose Us</button></li>
              <li><button onClick={() => goTo('/about')} className="text-slate-400 hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => goTo('/contact')} className="text-slate-400 hover:text-primary transition-colors">Contact</button></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {currentYear} Funkesound. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <button
              onClick={() => goTo('/services/antenna/suburb')}
              className="text-slate-600 hover:text-primary transition-colors border border-white/10 rounded px-2 py-0.5 text-xs"
            >
              📄 Template: Antenna Suburb
            </button>
            <button
              onClick={() => goTo('/services/home-theatre/suburb')}
              className="text-slate-600 hover:text-primary transition-colors border border-white/10 rounded px-2 py-0.5 text-xs"
            >
              📄 Template: Home Theatre Suburb
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
