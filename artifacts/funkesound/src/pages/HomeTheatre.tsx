import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";
import {
  Speaker,
  Home,
  Building2,
  Wrench,
  Zap,
  ShieldCheck,
  Tv,
  Volume2,
  Lightbulb,
  Armchair,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Star,
  Quote,
  ChevronDown,
} from "lucide-react";
import theatreImg from "@/assets/home-theatre.jpg";
import { useState } from "react";

const capabilities = [
  {
    icon: Home,
    title: "Residential Home Theatres",
    description:
      "Full design and installation for any room size. We plan speaker placement for optimal acoustics, hide every cable, and calibrate your system until the sound is exactly right.",
  },
  {
    icon: Building2,
    title: "Commercial Cinema",
    description:
      "Offices, cafés, restaurants, sporting clubs, schools — we design and install commercial AV systems that look great and perform reliably day after day.",
  },
  {
    icon: Speaker,
    title: "Speaker Installation",
    description:
      "In-ceiling, in-wall, on brackets, or under the floor. We recommend placement based on your room's acoustics and your listening position for the best possible sound.",
  },
  {
    icon: Tv,
    title: "Projectors & Screens",
    description:
      "Ceiling-mounted projectors, motorised screens, bulkhead drops, fixed frames — 4:3, 16:9, or 2.35:1 CinemaScope. We supply the right screen for your room.",
  },
  {
    icon: Zap,
    title: "Home Theatre Upgrades",
    description:
      "Control your entertainment system, Foxtel, Blu-ray, and music from your smartphone or tablet. We also integrate lighting control and premium cinema seating.",
  },
  {
    icon: Wrench,
    title: "Repairs & Troubleshooting",
    description:
      "No sound, crackling speakers, no picture, poor AV connections — we diagnose and fix home theatre problems fast so you're not left without your system.",
  },
];

const included = [
  "Free onsite consultation and quote",
  "Room acoustics assessment",
  "Speaker placement recommendation",
  "All cabling concealed — walls, ceiling, or floor",
  "AV amplifier programming and calibration",
  "Projector ceiling mount and screen installation",
  "Equipment rack wiring and labelling",
  "Remote / smart control integration",
  "Full system demonstration before we leave",
  "Police checked, fully insured technicians",
];

const reviews = [
  {
    name: "Ed & Yvette",
    text: "We had a vision of how we wanted our home theatre to be but had no idea on the various components, let alone how to put it all together. Steve came to our home, explained the best way to set up our home theatre and provided us with options. When it came to installation, Steve put it all together, tuned it to perfection — we now have an awesome home theatre.",
    detail: "Full Home Theatre Install",
  },
  {
    name: "Juanita Sanger",
    text: "One word — AWESOME! Steve, what a pleasure it was to meet someone who is so passionate about doing a great job. You certainly know everything there is to know about audio visual equipment. Your work exceeded our expectations and I couldn't believe you even sorted and neatened the TV cabinet!",
    detail: "Home Theatre Design & Build",
  },
  {
    name: "Eric J",
    text: "Steve sourced and installed a new home theatre system. Complicated job because we wanted all the cables hidden, giving it that clean look. Steve did a great job and he's super helpful. Will recommend.",
    detail: "Home Theatre Installation",
  },
];

const faqs = [
  {
    q: "Do you design the home theatre as well as install it?",
    a: "Yes — we handle the full project. We'll visit your home, assess the room, recommend the best speaker placement and equipment for your space and budget, then install and calibrate everything. You don't need to figure it out yourself.",
  },
  {
    q: "Can you install speakers in the ceiling or walls?",
    a: "Absolutely. In-ceiling, in-wall, on brackets, under-floor — we can run speakers to wherever they need to be. All cabling is concealed for a clean finish.",
  },
  {
    q: "Do you supply the equipment or do I need to buy it?",
    a: "Either works. We can source and supply everything, or work with equipment you've already purchased. We'll advise on the best options for your setup either way.",
  },
  {
    q: "Can you mount a projector and screen?",
    a: "Yes — ceiling-mounted projectors, motorised screens that drop from a bulkhead, fixed frames, pull-downs. We supply screens in all formats including CinemaScope 2.35:1.",
  },
  {
    q: "Do you do commercial home theatre and AV installs?",
    a: "Yes. We work with businesses, cafés, restaurants, schools, and sporting clubs. If you need a quality AV system installed professionally, we can help.",
  },
  {
    q: "My home theatre isn't working properly — can you fix it?",
    a: "Yes. We troubleshoot and repair existing systems — no sound, crackling, no picture, poor connections, slow data. Call us and we'll diagnose the problem.",
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

export default function HomeTheatrePage() {
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
            alt="Custom home theatre installation"
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
              <Speaker className="w-3.5 h-3.5 text-primary" />
              Melbourne & Mornington Peninsula
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white font-display leading-tight mb-6">
              Home Theatre{" "}
              <span className="text-primary">Installation</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Cinema-grade sound and vision — in your home. Professional design, installation, and calibration for residential and commercial spaces across Melbourne.
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
              Plan Your Home Theatre
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
                Your Local Home Theatre Specialists
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Funkesound has been servicing Melbourne and the Mornington Peninsula for over 20 years. Our technicians are experts at installing home theatre systems of every size — focused on clean lines, optimal speaker positions, and concealing every wire and cable so the room looks as good as it sounds.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6 capabilities */}
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
            {capabilities.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:border-primary/25 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3 font-display">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included — dark section */}
      <section className="py-24 md:py-32 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(34,197,94,0.06),transparent)]" />
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
                We handle the whole project — from the initial consultation through to calibration and demonstration. Here's what every home theatre job with us includes:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {included.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
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

            {/* Upgrade tiles */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-2">Popular Upgrades</p>
              {[
                {
                  icon: Zap,
                  title: "Smart Control Integration",
                  desc: "Control your entire system — Foxtel, Blu-ray, streaming, and music — from your smartphone or tablet.",
                },
                {
                  icon: Lightbulb,
                  title: "Lighting Control",
                  desc: "Create and save different lighting scenes for movies, sport, or ambient mode — all synced to your system.",
                },
                {
                  icon: Armchair,
                  title: "Cinema Seating",
                  desc: "From intimate two-seaters to staged multi-row cinema rooms — we advise on the right seating for your space.",
                },
                {
                  icon: Volume2,
                  title: "Multi-Room Audio",
                  desc: "Extend your audio to any room in the home. Listen to the same source — or different sources — in every zone.",
                },
              ].map((upgrade, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <upgrade.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{upgrade.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{upgrade.desc}</p>
                  </div>
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
              {[1,2,3,4,5].map(i => (
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
                  {[1,2,3,4,5].map(i => (
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
                Common questions about home theatre installation in Melbourne. Still have something you'd like to ask? Just call.
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
                Ready to build your dream home theatre?
              </h3>
              <p className="text-white/80">
                Free consultation and quote — Melbourne & Mornington Peninsula.
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
