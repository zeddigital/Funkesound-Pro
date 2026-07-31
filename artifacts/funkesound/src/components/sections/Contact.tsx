import { motion } from "framer-motion";
import { PhoneCall, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-background">

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto bg-[#0D0D0D] border border-white/10 rounded-3xl p-8 md:p-16 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to elevate your home?
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              Get in touch today for a free consultation and quote. We service all of Melbourne metro with prompt, professional installations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <PhoneCall className="w-8 h-8" />
              </div>
              <div>
                <div className="text-sm text-slate-500 uppercase tracking-widest mb-1">Call Us</div>
                <div className="text-xl font-bold text-white">1300 FUNKE</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 text-slate-400 flex items-center justify-center">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <div className="text-sm text-slate-500 uppercase tracking-widest mb-1">Email</div>
                <div className="text-xl font-bold text-white">hello@funkesound.com.au</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 text-slate-400 flex items-center justify-center">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <div className="text-sm text-slate-500 uppercase tracking-widest mb-1">Hours</div>
                <div className="text-xl font-bold text-white">Mon-Sat, 8am-6pm</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button 
              size="lg" 
              className="h-16 px-10 bg-primary text-primary-foreground hover:bg-primary/90 text-xl font-bold rounded-full w-full sm:w-auto group"
              onClick={() => window.location.href = 'tel:1300FUNKE'}
            >
              <PhoneCall className="mr-3 w-6 h-6" />
              Call Now for a Free Quote
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
