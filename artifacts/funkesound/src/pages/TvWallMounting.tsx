import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";
import {
  MonitorPlay,
  ShieldCheck,
  Wrench,
  Eye,
  Volume2,
  Building2,
  Home,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Star,
  Quote,
  ChevronDown,
} from "lucide-react";
import heroTvImg from "@/assets/hero-tv.jpg";
import { useState } from "react";

const reasons = [
  {
    icon: Eye,
    title: "Zero Visible Cables",
    description:
      "Every cable is fully concealed — routed in-wall, under the floor, or through custom conduit. Not a single wire in sight. This is our non-negotiable standard on every job.",
  },
  {
    icon: MonitorPlay,
    title: "All Screen Sizes & Types",
    description:
      "From 32\" to 100\"+, flat, curved, OLED, QLED, frame-style — we've mounted them all. We source the right bracket for your exact TV model and wall type.",
  },
  {
    icon: Wrench,
    title: "All Wall Types",
    description:
      "Plasterboard, brick, stone, concrete, timber — we handle every wall type with the same precision. No wall is too tricky for us.",
  },
  {
    icon: Volume2,
    title: "Soundbar Integration",
    description:
      "Got a soundbar? We mount and cable that too — wall-mounted below the screen, concealed cables, perfectly aligned. One job, one tidy finish.",
  },
  {
    icon: Building2,
    title: "Commercial Installs",
    description:
      "Offices, restaurants, retail spaces, gyms — we handle commercial TV wall mounting with the same care and professionalism as residential jobs.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured & Police Checked",
    description:
      "All technicians are police checked, fully trained, industry experienced, comprehensively insured, and OH&S compliant. You're in safe hands.",
  },
];

const included = [
  "Site assessment before any drilling",
  "Premium bracket sourced for your exact TV model",
  "Full in-wall or surface cable concealment",
  "Soundbar mounting & integration on request",
  "All equipment and fixings supplied",
  "Bracket repair and replacement service",
  "Same-week and same-day appointments available",
  "Immaculate clean-up — no mess left behind",
];

const reviews = [
  {
    name: "Chris & Wendy",
    text: "Steve fitted our new Samsung 65 inch TV to wall. Exceptional before, during and after customer service. Steve did a fantastic job and I would recommend highly as I have already done to my friends and work colleagues. Don't hesitate to use Steve — you will be glad you did.",
    detail: "TV Wall Mounting",
  },
  {
    name: "Robert Gilmore",
    text: "Thanks Steve for your perfection when installing our TV and soundbar. Super professional job, great communication and well priced. If you want your TV mounted the right way, chat with Steve — could not recommend more highly.",
    detail: "TV & Soundbar Mount",
  },
  {
    name: "Davina Currie",
    text: "He did an exceptional job and I could not be happier. Our TV area is now neat and tidy with no TV unit required — a bonus when you live in an apartment. Steve arrived on time and even cleaned up all the mess before he left.",
    detail: "Apartment TV Mount",
  },
];

const faqs = [
  {
    q: "What wall types can you mount a TV on?",
    a: "We mount on all wall types — plasterboard (stud or cavity), brick, concrete, stone, and timber. We carry the right fixings and anchors for each, and always assess the wall first before drilling.",
  },
  {
    q: "Will you hide all the cables?",
    a: "Yes — concealed cabling is our standard, not an add-on. We route cables in-wall where possible, or use surface conduit matched to your wall colour where in-wall isn't feasible. Either way, no cables hang loose.",
  },
  {
    q: "Do you supply the mounting bracket?",
    a: "We source and supply the right bracket for your TV model and wall type. We only use quality-rated hardware — no cheap brackets that flex or fail over time.",
  },
  {
    q: "Can you also mount my soundbar?",
    a: "Absolutely. We mount soundbars on the wall below the TV, connect them up, and conceal all cables. One call, one job, one tidy result.",
  },
  {
    q: "How long does a wall mount take?",
    a: "Most residential jobs are done in 1–3 hours depending on the wall type, cabling complexity, and whether a soundbar is included. We'll give you an accurate estimate when we quote.",
  },
  {
    q: "Can you repair a loose or damaged bracket?",
    a: "Yes — if your existing mount is loose, creaking, or damaged, we'll inspect it and either fix it or replace it with a quality bracket. Don't leave a heavy TV on a dodgy mount.",
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

export default function TvWallMountingPage() {
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
            src={heroTvImg}
            alt="TV professionally wall mounted"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-[#0D0D0D]/20" />
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
              <MonitorPlay className="w-3.5 h-3.5 text-primary" />
              Melbourne & Mornington Peninsula
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white font-display leading-tight mb-6">
              TV Wall Mounting{" "}
              <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Reliable, professional, and on time. Flawless mounts with fully concealed cabling — for homes and businesses across Melbourne.
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
              Book a Wall Mount
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
                Mounted to Perfection
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Funkesound has been servicing Melbourne suburbs and the Mornington Peninsula for over 20 years. Our technicians are committed to an excellent level of service and have access to a wide variety of wall mounting brackets for all types of TVs — with access to the knowledge and expertise to handle any project, big or small.
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
              Why Homeowners Choose Us
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
                <span className="text-primary">No Hidden Extras</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-10">
                When you book with Funkesound, you get a complete service — not a base price with add-ons. Here's what every wall mount job includes:
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

            {/* Floating stat cards */}
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
                { value: "All", label: "Wall Types Covered", icon: Home },
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
                Everything you need to know about TV wall mounting in Melbourne. Still unsure? Just call.
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
                Ready to mount your TV?
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
