import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";
import {
  Settings2,
  Wifi,
  Monitor,
  Smartphone,
  Zap,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Star,
  Quote,
  ChevronDown,
  Wrench,
  Home,
} from "lucide-react";
import heroTvImg from "@/assets/hero-tv.jpg";
import { useState } from "react";

const reasons = [
  {
    icon: Settings2,
    title: "One Remote, Everything",
    description:
      "We program a single universal remote to control your TV, soundbar, streaming device, Blu-ray, amp — the lot. No more juggling four remotes or fumbling in the dark.",
  },
  {
    icon: Wifi,
    title: "Smart Home Integration",
    description:
      "We connect and configure your AV equipment with smart home platforms including Control4, Crestron, Savant, and standard app-based systems. One tap turns the room on.",
  },
  {
    icon: Monitor,
    title: "All Brands & Devices",
    description:
      "Sony, Samsung, LG, Denon, Yamaha, Sonos, Apple TV, Foxtel, Google Chromecast — we program and integrate them all, regardless of brand or age.",
  },
  {
    icon: Smartphone,
    title: "App & Voice Control",
    description:
      "We set up smartphone app control and integrate with Google Home and Amazon Alexa so you can control your entire AV system by voice or from your phone.",
  },
  {
    icon: Zap,
    title: "Macros & Scene Programming",
    description:
      "A single button press powers on your TV, dims the lights, drops the projector screen, and sets the volume — all at once. We set up custom activity macros for every scenario.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured & Police Checked",
    description:
      "All technicians are police checked, fully trained, industry experienced, comprehensively insured, and OH&S compliant. You're in safe hands.",
  },
];

const included = [
  "Full audit of your current remotes and devices",
  "Universal or smart remote programming",
  "Integration with existing AV equipment",
  "Smart home platform connection & setup",
  "App and voice control configuration",
  "Custom activity macros and scenes",
  "Full on-site testing of every function",
  "Demonstration and handover — you'll know exactly how to use it",
];

const reviews = [
  {
    name: "Mark & Julie",
    text: "Steve set up a single remote for our entire system — TV, soundbar, Apple TV, and Foxtel. It just works, perfectly, every time. Could not believe how simple it all became after years of struggling with four remotes.",
    detail: "Universal Remote Setup",
  },
  {
    name: "David Huang",
    text: "Had Steve program our Control4 system and integrate the new TV and amplifier. Seamless — he knew exactly what he was doing and the whole job was done in a couple of hours. First class.",
    detail: "Smart Home AV Integration",
  },
  {
    name: "Leanne & Tom",
    text: "Our lounge now turns on with one button — TV, amp, streaming box, all of it. Steve programmed everything and made sure we were comfortable before he left. Brilliant service.",
    detail: "Scene & Macro Programming",
  },
];

const faqs = [
  {
    q: "What remotes and systems do you program?",
    a: "We program universal remotes (Logitech Harmony and alternatives), smart home remotes (Control4, Crestron, Savant), and configure app-based control systems. If it can be programmed, we can set it up.",
  },
  {
    q: "Can you integrate with my existing smart home?",
    a: "Yes — we work with all major smart home platforms including Control4, Crestron, Savant, Google Home, Amazon Alexa, Apple HomeKit, and standard IP/RS-232 control systems.",
  },
  {
    q: "What if I have old or unusual equipment?",
    a: "Older AV gear often uses IR (infrared) control which is very compatible with universal remote systems. Unusual brands are usually covered too — we carry a vast library of device codes and can learn new ones on the spot.",
  },
  {
    q: "Can one button turn on my whole system?",
    a: "Absolutely — this is one of the most popular setups we do. A single 'Watch TV' activity button powers on your TV, receiver, and streaming device in sequence, selects the correct input, and sets your preferred volume, all automatically.",
  },
  {
    q: "How long does a programming job take?",
    a: "A standard universal remote setup typically takes 1–2 hours. More complex smart home integrations with multiple rooms or scenes can take half a day. We'll give you an accurate estimate when we quote.",
  },
  {
    q: "What if something stops working after you leave?",
    a: "We stand behind our work. If a programmed function stops working through no fault of your own, call us and we'll come back and sort it out.",
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

export default function RemoteProgrammingPage() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-[#0D0D0D] overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0">
          <img
            src={heroTvImg}
            alt="Remote programming and smart home AV control"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/65 via-[#0D0D0D]/30 to-[#0D0D0D]/10" />
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
              <Settings2 className="w-3.5 h-3.5 text-primary" />
              Melbourne & Mornington Peninsula
            </div>
            <h1 className="text-3xl md:text-6xl xl:text-7xl font-bold text-white font-display leading-tight mb-3 md:mb-6">
              Remote Programming{" "}
              <span className="text-primary">&amp; Control</span>
            </h1>
            <p className="text-base md:text-xl text-white/60 max-w-2xl leading-relaxed">
              One remote. Every device. We program universal remotes, smart home systems, and app-based AV control — so everything just works, simply.
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
              Book a Programming Session
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
                Stop Fighting Your Remotes
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Too many remotes, too many inputs, too many steps just to watch TV. Funkesound programs and integrates your entire AV setup so that one button — or one voice command — does it all. We've been simplifying home entertainment systems across Melbourne and the Mornington Peninsula for over 20 years.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6 reasons */}
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
              What We Can Do For You
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

      {/* What's included — dark */}
      <section className="py-24 md:py-32 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_50%,rgba(34,197,94,0.06),transparent)]" />
        <div className="container px-6 md:px-12 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display leading-tight mb-6">
                Everything Included,<br />
                <span className="text-primary">One Simple Job</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-10">
                When you book with Funkesound, you get a complete setup — not a partial fix. Here's everything covered in every remote programming job:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {included.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="flex items-start gap-3 text-slate-300 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10">
                <Button
                  onClick={scrollToContact}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6 gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  Get a Free Quote
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "20+", label: "Years Experience", icon: Wrench },
                { value: "100%", label: "Satisfaction Guarantee", icon: ShieldCheck },
                { value: "59+", label: "5-Star Reviews", icon: Star },
                { value: "All", label: "Brands Supported", icon: Home },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/8 transition-colors duration-300"
                >
                  <stat.icon className="w-6 h-6 text-primary mb-3" />
                  <div className="text-3xl font-bold text-white font-display mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container px-6 md:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-display mb-4">
              What Our Clients Say
            </h2>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-6 right-6 text-primary/10">
                  <Quote className="w-12 h-12" />
                </div>
                <div className="flex gap-1 text-primary mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-8 italic">"{r.text}"</p>
                <div>
                  <div className="font-bold text-slate-900">{r.name}</div>
                  <div className="text-sm text-slate-400">{r.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-white">
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
                Common questions about remote programming and AV control setup in Melbourne. Still have one? Just call.
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
              className="bg-slate-50 rounded-2xl border border-slate-100 px-8 py-2"
            >
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 bg-primary">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-2">
                Ready to simplify your system?
              </h3>
              <p className="text-white/80">
                Same-week appointments available across Melbourne & the Mornington Peninsula.
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
