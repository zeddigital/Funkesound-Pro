import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";
import {
  Speaker,
  Music,
  Headphones,
  Volume2,
  Sliders,
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
import theatreImg from "@/assets/home-theatre.jpg";
import { useState } from "react";

const reasons = [
  {
    icon: Speaker,
    title: "Audiophile-Grade Results",
    description:
      "We work with premium brands including Denon, Yamaha, Marantz, NAD, KEF, Monitor Audio, Bowers & Wilkins, and more. We'll advise on the right components for your room, budget, and listening preferences.",
  },
  {
    icon: Music,
    title: "Custom Speaker Placement",
    description:
      "Optimal speaker positioning makes an enormous difference to sound quality. We assess your room's acoustics, dimensions, and furnishings to determine the ideal placement for every driver — no guesswork.",
  },
  {
    icon: Headphones,
    title: "Dedicated Listening Rooms",
    description:
      "For the serious audiophile, we design and install dedicated two-channel or multi-channel listening rooms — from equipment selection to acoustic treatment panels and room correction calibration.",
  },
  {
    icon: Volume2,
    title: "Multi-Room Audio",
    description:
      "Stream music to every room in your home independently or in sync. We install and configure whole-home audio systems including Sonos, Denon HEOS, and custom distribution systems.",
  },
  {
    icon: Sliders,
    title: "Full Calibration & Tuning",
    description:
      "Every system is calibrated on completion — amplifier settings, speaker levels, crossover points, and room correction. You won't just hear the difference, you'll feel it.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured & Police Checked",
    description:
      "All technicians are police checked, fully trained, industry experienced, comprehensively insured, and OH&S compliant. You're in safe hands.",
  },
];

const included = [
  "Room acoustic assessment and speaker placement plan",
  "Component selection and sourcing advice",
  "Speaker mounting — floor, wall, or ceiling",
  "Amplifier and equipment rack wiring",
  "Full in-wall or surface cable concealment",
  "Subwoofer placement and calibration",
  "System-level calibration and room correction",
  "Full demonstration and listening session on completion",
];

const reviews = [
  {
    name: "Andrew & Sarah",
    text: "Steve installed a full Bowers & Wilkins system in our lounge — speakers, amp, the whole thing. The cable work is invisible and the sound is absolutely extraordinary. He really took his time on placement and calibration. Couldn't be happier.",
    detail: "Hi-Fi Speaker System",
  },
  {
    name: "Michael T.",
    text: "I'd been putting off setting up my hi-fi system for months — cables everywhere, no idea where to start. Steve sorted the whole thing in one visit. Placed the speakers perfectly, hid every cable, and spent time calibrating. Brilliant.",
    detail: "Lounge Hi-Fi Installation",
  },
  {
    name: "Rachel & James",
    text: "We wanted whole-home Sonos and Steve set it up flawlessly — six rooms, all perfectly synced and individually controllable. He explained everything and made sure we were confident using the app before leaving. Highly recommend.",
    detail: "Whole-Home Audio (Sonos)",
  },
];

const faqs = [
  {
    q: "What brands do you work with?",
    a: "We work with all major hi-fi and audio brands including Denon, Yamaha, Marantz, NAD, Rotel, KEF, Monitor Audio, Bowers & Wilkins, Sonos, Focal, and many more. We can also advise on which brands best suit your room and budget.",
  },
  {
    q: "Do you supply the equipment or do I need to buy it myself?",
    a: "Either works. We can advise on, source, and supply the right components — or install equipment you've already purchased. We're brand-agnostic and focused on getting you the best result for your budget.",
  },
  {
    q: "Will you hide all the cables?",
    a: "Yes — concealed cabling is our standard on every job. Cables are run in-wall where possible, or surface-mounted using colour-matched conduit where in-wall isn't feasible. No messy cables.",
  },
  {
    q: "Can you set up a multi-room audio system?",
    a: "Absolutely. We install and configure whole-home audio systems including Sonos, Denon HEOS, and custom distribution matrices. You can have music in every room, independently or all in sync.",
  },
  {
    q: "Do you do room correction and calibration?",
    a: "Yes — every installation includes a calibration session. We set up room correction (Audyssey, Dirac, YPAO, etc.), balance speaker levels, set crossover points, and time-align drivers so the system performs at its best in your specific room.",
  },
  {
    q: "How long does a hi-fi installation take?",
    a: "A standard stereo or 5.1 system typically takes half a day. Larger multi-channel rooms or whole-home audio systems may take a full day or more. We'll give you a clear estimate when we quote.",
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

export default function HiFiInstallationsPage() {
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
            src={theatreImg}
            alt="Hi-Fi audio system installation by Funkesound"
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
              <Speaker className="w-3.5 h-3.5 text-primary" />
              Melbourne & Mornington Peninsula
            </div>
            <h1 className="text-3xl md:text-6xl xl:text-7xl font-bold text-white font-display leading-tight mb-3 md:mb-6">
              Hi-Fi{" "}
              <span className="text-primary">Installations</span>
            </h1>
            <p className="text-base md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Premium audio systems installed to perfection. From a single stereo setup to whole-home multi-room audio — expertly fitted, calibrated, and beautifully cabled.
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
                Sound That Moves You
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Great audio is about more than expensive speakers — it's about how they're placed, how they're calibrated, and how cleanly everything is installed. Funkesound brings 20+ years of AV expertise to every hi-fi job, delivering systems that perform exactly as their designers intended — in your room, for your listening preferences.
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
                A Complete Service,<br />
                <span className="text-primary">Start to Finish</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-10">
                Every hi-fi installation includes everything needed to get your system performing at its absolute best — no add-ons, no surprises:
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
                Common questions about hi-fi installation in Melbourne. Still have one? Just call.
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
                Ready to hear the difference?
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
