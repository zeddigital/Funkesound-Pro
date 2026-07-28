import { motion } from "framer-motion";
import { MonitorPlay, Radio, Speaker } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: "wall-mounting",
    title: "TV Wall Mounting",
    description: "Flawless, flush-to-wall mounting with completely concealed cabling. We handle any wall type with precision engineering so your screen looks like a floating piece of art.",
    icon: MonitorPlay,
    features: ["Concealed cabling", "Custom bracket sourcing", "Soundbar integration"]
  },
  {
    id: "home-theatre",
    title: "Home Theatre Installs",
    description: "Immersive audio and visual setups that rival commercial cinemas. From acoustic treatment to projector calibration, we build dedicated spaces for pure entertainment.",
    icon: Speaker,
    features: ["Acoustic calibration", "Projector alignment", "Surround sound tuning"]
  },
  {
    id: "antenna",
    title: "Antenna Installation",
    description: "Crystal clear reception guaranteed. We install, repair, and upgrade digital TV antennas to withstand Australian weather while delivering perfect signal quality.",
    icon: Radio,
    features: ["Digital signal testing", "Storm-resistant mounts", "Amplifier integration"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-background">
      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl">
              We don't just install hardware. We integrate technology into your home with absolute precision, ensuring maximum performance without compromising your interior design.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full bg-white border-slate-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-colors duration-500 overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-500 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-500">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl font-display group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-500 mb-8 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
