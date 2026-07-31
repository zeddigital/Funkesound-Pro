import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";
import {
  Radio,
  ShieldCheck,
  MapPin,
  Zap,
  BadgeDollarSign,
  ClipboardList,
  Search,
  Wrench,
  Signal,
  MonitorPlay,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import antennaImg from "@/assets/antenna-dusk.jpg";
import { useState } from "react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Expert Technicians",
    description:
      "Certified techs with 20+ years of hands-on experience. We ensure your antenna is placed in the optimal position — roof, attic, or external wall — for maximum signal reception.",
  },
  {
    icon: Signal,
    title: "Clear Reception, Guaranteed",
    description:
      "We guarantee a strong, stable signal with crisp, clear image quality. Say goodbye to pixelated screens and interrupted broadcasts — we don't leave until it's perfect.",
  },
  {
    icon: MapPin,
    title: "Local Melbourne Knowledge",
    description:
      "We know Melbourne's signal terrain — the valleys, the leafy suburbs, the coastal areas. That local expertise means we position your antenna right the first time.",
  },
  {
    icon: Zap,
    title: "Future-Proof Solutions",
    description:
      "We install antennas that are ready for advancements in digital broadcasting. You won't need to upgrade again any time soon.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    description:
      "Upfront quotes, no hidden fees. We tailor a solution to your needs and budget — and we tell you exactly what it'll cost before we start.",
  },
  {
    icon: Radio,
    title: "Repairs & Upgrades Too",
    description:
      "Not just new installs. If your existing antenna isn't performing, we'll inspect, diagnose, and fix it — or replace it with something better if needed.",
  },
];

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Initial Consultation & Site Survey",
    description:
      "We start by understanding your needs and conducting a site survey to determine the best placement for your antenna — factoring in your location, local terrain, and the number of TVs in your home.",
  },
  {
    number: "02",
    icon: Search,
    title: "Antenna Selection",
    description:
      "Based on the site survey, we help you choose the right antenna for optimal performance. Not all antennas are equal — we match the spec to your situation.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Professional Installation",
    description:
      "Clean, storm-resistant mounting. All cabling run neatly and out of sight. We handle the whole job — no mess, no fuss.",
  },
  {
    number: "04",
    icon: Signal,
    title: "Signal Testing & Tuning",
    description:
      "Once installed, we test signal strength across all channels and fine-tune the system until you're receiving the maximum number of channels with perfect clarity.",
  },
  {
    number: "05",
    icon: MonitorPlay,
    title: "Final Demo",
    description:
      "We walk you through everything before we leave, making sure you're comfortable with the system and happy with the result.",
  },
];

const faqs = [
  {
    q: "Do I need a digital TV antenna for every TV in my home?",
    a: "No — a single well-placed antenna can supply signal to multiple TVs through proper cabling and splitters. We'll work out the best setup for your home during the site survey.",
  },
  {
    q: "How long does the installation take?",
    a: "Typically 1–2 hours depending on the complexity and placement. Our technicians work efficiently to minimise disruption to your day.",
  },
  {
    q: "Will bad weather affect my TV signal?",
    a: "We install antennas with storm-resistant mounts rated for Melbourne's unpredictable weather. A quality digital antenna, professionally installed, is designed to handle it.",
  },
  {
    q: "Can you repair or replace my old antenna?",
    a: "Yes — we offer both repair and replacement services. We'll inspect your current setup and recommend the best option, whether that's a fix or an upgrade.",
  },
  {
    q: "How much does installation cost?",
    a: "Cost depends on the type of antenna, complexity of installation, and number of TVs. We provide a free, no-obligation quote based on your specific situation.",
  },
  {
    q: "What areas of Melbourne do you service?",
    a: "We cover all Melbourne suburbs and the Mornington Peninsula. If you're unsure whether we reach you, just call — we almost certainly do.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-slate-900 group-hover:text-primary transition-colors duration-200">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-primary" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-slate-500 leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}

export default function AntennaInstallationPage() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-[#0D0D0D] overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={antennaImg}
            alt="TV Antenna installation at dusk"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/65 via-[#0D0D0D]/30 to-[#0D0D0D]/15" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.07),transparent)]" />

        <div className="container px-6 md:px-12 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/70 text-sm font-medium mb-3 md:mb-6">
              <Radio className="w-3.5 h-3.5 text-primary" />
              Melbourne & Mornington Peninsula
            </div>
            <h1 className="text-3xl md:text-6xl xl:text-7xl font-bold text-white font-display leading-tight mb-3 md:mb-6">
              Digital TV Antenna{" "}
              <span className="text-primary">Installation</span>
            </h1>
            <p className="text-base md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Crystal clear reception, guaranteed. Professional antenna installation, repair, and upgrades across Melbourne — done right the first time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mt-5 md:mt-10"
          >
            <Button
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6 gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              Book an Installation
            </Button>
            <Button
              variant="ghost"
              onClick={scrollToContact}
              className="text-white/60 hover:text-white gap-2 font-medium border border-white/10 hover:border-white/20 rounded-full px-6"
            >
              Get a free quote
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-display mb-6">
                Enjoy Crystal Clear Reception
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                In today's digital age, a reliable antenna is essential. At Funkesound, we provide expert digital TV antenna installation services throughout Melbourne and the Mornington Peninsula — ensuring your home is equipped with the latest technology for the best possible viewing experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why choose us — 6 cards */}
      <section className="pb-24 md:pb-32 bg-white">
        <div className="container px-6 md:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 font-display">
              Why Choose Our Antenna Service?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:border-primary/25 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <r.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3 font-display">{r.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — dark section */}
      <section className="py-24 md:py-32 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(34,197,94,0.05),transparent)]" />
        <div className="container px-6 md:px-12 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">
              Our Installation <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-slate-400">
              Five steps from first call to crystal clear TV.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-y-0 md:gap-x-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex flex-col md:items-center md:text-center"
              >
                {/* Connector line — extends into the gap to stay connected */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] right-[-24px] h-px bg-white/10 z-0" />
                )}
                <div className="flex md:flex-col md:items-center gap-5 md:gap-5 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-primary font-bold tracking-widest uppercase mb-1">{step.number}</div>
                    <h3 className="font-bold text-white mb-2 font-display text-sm md:text-base">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-display mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                Everything you need to know about antenna installation in Melbourne. Still have questions? Just call.
              </p>
              <Button
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6 gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Call Us Today
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm px-8 py-2"
            >
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="py-16 bg-primary">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-2">
                Ready to upgrade your TV reception?
              </h3>
              <p className="text-white/80">
                Fast, professional, and affordable antenna installation across Melbourne.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button
                onClick={scrollToContact}
                className="bg-white text-primary hover:bg-white/90 font-semibold rounded-full px-6 gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Book Now
              </Button>
              <Button
                variant="ghost"
                onClick={scrollToContact}
                className="text-white border border-white/30 hover:bg-white/10 rounded-full px-6 gap-2"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
