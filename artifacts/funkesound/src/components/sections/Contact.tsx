import { motion } from "framer-motion";
import { PhoneCall, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-100">
      <div className="container px-6 md:px-12 mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-slate-900">
            Ready to elevate your home?
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Get in touch today for a free consultation and quote. We service all of Melbourne metro with prompt, professional installations.
          </p>
        </motion.div>

        {/* Contact details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <PhoneCall className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mb-1 font-medium">Call Us</div>
              <div className="text-xl font-bold text-slate-800">1300 FUNKE</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-200 text-slate-500 flex items-center justify-center">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mb-1 font-medium">Email</div>
              <div className="text-xl font-bold text-slate-800">hello@funkesound.com.au</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-200 text-slate-500 flex items-center justify-center">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mb-1 font-medium">Hours</div>
              <div className="text-xl font-bold text-slate-800">Mon–Sat, 8am–6pm</div>
            </div>
          </motion.div>
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            className="h-14 px-10 bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold rounded-full group"
            onClick={() => window.location.href = 'tel:1300FUNKE'}
          >
            <PhoneCall className="mr-3 w-5 h-5" />
            Call Now for a Free Quote
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
