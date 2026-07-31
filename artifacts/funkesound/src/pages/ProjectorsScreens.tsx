import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";
import {
  MonitorPlay,
  Film,
  Maximize2,
  Eye,
  Sun,
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
    icon: Film,
    title: "Motorised & Fixed Screens",
    description:
      "We install both motorised drop-down screens and fixed-frame screens. Motorised screens retract out of sight when not in use — perfect for multipurpose rooms. Fixed screens deliver the flattest, most uniform surface for serious home cinema.",
  },
  {
    icon: MonitorPlay,
    title: "All Projector Types",
    description:
      "Short-throw, ultra-short-throw, laser, 4K, and standard throw projectors — we mount, connect, and calibrate them all. We work with Epson, Sony, Optoma, BenQ, JVC, and more.",
  },
  {
    icon: Maximize2,
    title: "Screen Sizing & Throw Advice",
    description:
      "Getting the right screen size and throw distance right is critical — and it's easy to get wrong. We calculate the optimal setup for your room dimensions, seating distance, and projector model before any installation begins.",
  },
  {
    icon: Eye,
    title: "Image Calibration",
    description:
      "Every projector installation includes image calibration — brightness, contrast, colour temperature, keystone correction, and lens shift. Your picture will look as the director intended, not as it came out of the box.",
  },
  {
    icon: Sun,
    title: "In-Ceiling Projector Mounting",
    description:
      "We ceiling-mount projectors with flush or custom-built enclosures for a clean, permanent installation. All cabling is run in-ceiling and in-wall — no surface cable runs.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured & Police Checked",
    description:
      "All technicians are police checked, fully trained, industry experienced, comprehensively insured, and OH&S compliant. You're in safe hands.",
  },
];

const included = [
  "Room assessment — throw distance, screen size, and ambient light",
  "Projector ceiling or shelf mounting",
  "Motorised or fixed-frame screen installation",
  "Full in-ceiling and in-wall cable concealment",
  "HDMI, signal, and power cable routing",
  "Image calibration — brightness, contrast, colour, keystone",
  "Integration with AV receiver and control system",
  "Full demonstration and handover on completion",
];

const reviews = [
  {
    name: "Daniel & Clare",
    text: "Steve installed a 120\" screen and ceiling-mounted our Epson 4K projector. Not a single cable visible — everything runs in the ceiling. Image calibration was excellent and the whole setup looks absolutely incredible. Best investment we've made.",
    detail: "4K Projector & Screen Install",
  },
  {
    name: "Paul Nguyen",
    text: "We wanted a motorised screen in our living room that would disappear when not in use. Steve measured everything, recommended the right setup, and installed it perfectly. Looks great open or closed. Fantastic job.",
    detail: "Motorised Screen Installation",
  },
  {
    name: "The Andersons",
    text: "We had a projector sitting in a box for months — no idea how to set it up properly. Steve ceiling-mounted it, ran all the cables, set up the screen, and calibrated the picture. The result is genuinely cinema-quality. Absolutely worth it.",
    detail: "Home Cinema Setup",
  },
];

const faqs = [
  {
    q: "What screen size should I get?",
    a: "Screen size depends on your room dimensions, projector throw ratio, and viewing distance. A common rule is that the ideal viewing distance is roughly 1.5× the screen width — so a 120\" screen suits a viewing distance of about 4–4.5m. We'll calculate the right size for your specific room when we quote.",
  },
  {
    q: "What's the difference between fixed and motorised screens?",
    a: "Fixed-frame screens are permanently mounted and give the flattest, most uniform surface — ideal for dedicated home cinema rooms. Motorised screens retract out of sight when not in use, making them better suited to multipurpose living spaces.",
  },
  {
    q: "Can you ceiling-mount my projector?",
    a: "Yes — ceiling mounting is our standard approach for projectors. We use quality ceiling mounts with full height, angle, and rotation adjustment. All cabling is run in-ceiling and in-wall so nothing is visible.",
  },
  {
    q: "Do you do image calibration?",
    a: "Yes, always. Out-of-the-box projector settings rarely look their best. We calibrate brightness, contrast, colour temperature, keystone, and lens shift to get the most accurate, cinematic image from your specific projector and screen combination.",
  },
  {
    q: "What projector brands do you work with?",
    a: "We install and calibrate all major projector brands including Epson, Sony, JVC, Optoma, BenQ, Barco, and more. We're brand-agnostic — we'll recommend the right projector for your room and budget, or install one you've already purchased.",
  },
  {
    q: "How long does a projector and screen installation take?",
    a: "A typical projector ceiling-mount plus screen installation takes around half a day. More complex setups with in-wall cabling, AV receiver integration, and extensive calibration may take a full day. We'll give you a clear estimate when we visit.",
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

export default function ProjectorsScreensPage() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-[#0D0D0D] overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <img
            src={theatreImg}
            alt="Projector and screen installation by Funkesound"
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
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/70 text-sm font-medium mb-6">
              <Film className="w-3.5 h-3.5 text-primary" />
              Melbourne & Mornington Peninsula
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white font-display leading-tight mb-6">
              Projectors &amp;{" "}
              <span className="text-primary">Screens</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Cinema-quality picture in your own home. We install, mount, and calibrate projectors and screens of every type — with every cable hidden and every pixel dialled in.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mt-10"
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
                Your Room. Cinema Scale.
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                A projector and screen done properly transforms a living room into a true home cinema. Done poorly, it's a frustrating mess of visible cables and an image that never looks quite right. Funkesound has been installing projector and screen systems across Melbourne and the Mornington Peninsula for over 20 years — we do it properly, every time.
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
                <span className="text-primary">Nothing Left Dangling</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-10">
                Every projector and screen job includes everything needed for a clean, calibrated installation — no hidden extras:
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
                { value: "All", label: "Screen Types Covered", icon: Home },
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
                Common questions about projector and screen installation in Melbourne. Still have one? Just call.
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
                Ready for the big picture?
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
