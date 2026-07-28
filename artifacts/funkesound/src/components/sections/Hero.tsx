import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-tv.jpg";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 bg-[#0D0D0D]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent z-10 opacity-70 mix-blend-screen" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={heroImage} 
          alt="Luxury TV Installation" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-6 md:px-12 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <div className="flex gap-1 text-primary">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium text-white/90 tracking-wide uppercase">
              100+ 5-Star Reviews in Melbourne
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-white"
          >
            Expert installation.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary/90 to-primary">
              Extraordinary results.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Premium home technology installation specialising in seamless TV wall mounting, custom home theatres, and precision antenna setups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold rounded-full group"
            >
              Book an Installation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 border-white/20 text-white hover:bg-white/5 text-lg font-semibold rounded-full"
            >
              Explore Services
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
