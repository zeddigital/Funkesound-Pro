import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import theatreImage from "@/assets/home-theatre.jpg";

export function WhyChooseUs() {
  const points = [
    "Fully insured and licensed technicians",
    "Invisible cable management guarantee",
    "Premium quality mounts and brackets used",
    "Clean workspace policy — we leave no mess",
    "Lifetime workmanship warranty",
    "Punctual, professional, and courteous"
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
              <img 
                src={theatreImage} 
                alt="Luxury Home Theatre" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 md:-right-12 bg-card border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl z-20 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">100%</div>
                  <div className="text-sm text-foreground/60 uppercase tracking-wider">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              Craftsmanship you can <span className="text-primary">see</span>. <br/>
              Technology you can <span className="text-primary">feel</span>.
            </h2>
            <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
              We approach every installation not as a job, but as a craft. When you hire Funkesound, you're investing in peace of mind. We sweat the small details — leveling to the millimeter, hiding every cable, and calibrating your system until it's perfect.
            </p>

            <ul className="space-y-6">
              {points.map((point, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 bg-primary/10 rounded-full p-1 text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-lg text-foreground/80 font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
