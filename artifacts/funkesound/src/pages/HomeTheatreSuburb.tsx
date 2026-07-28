import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import {
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Wrench,
  Star,
  Tv,
  Building2,
  Zap,
  Lightbulb,
  ArmchairIcon,
  Volume2,
  MonitorPlay,
  Signal,
  Music,
  Projector,
} from "lucide-react";
import homeTheatreImg from "@/assets/home-theatre.jpg";

// ─── Reviews ────────────────────────────────────────────────────────────────
const reviews = [
  {
    name: "Lisa",
    text: "Steve did an amazing job dismantling my cinema room and putting my cinema room back together in my new house. Very professional and hard working.",
    rating: 5,
  },
  {
    name: "Clive Cristie",
    text: "Steve has completed several sound system set ups and TV wall mounts for us and we can highly recommend his workmanship and knowledge.",
    rating: 5,
  },
  {
    name: "Kaye",
    text: "Definitely 5 stars! Steve responded quickly to my enquiry, was able to do the job within a couple of days, arrived exactly on time and came back again the next day with solutions for a very tricky antenna. Steve wall mounted 2 TVs for me, not a cable left to be seen and sorted out the aerial issues as well. Everything was cleaned up and taken away — thanks Steve, you did an amazing job.",
    rating: 5,
  },
];

// ─── Service tiles ───────────────────────────────────────────────────────────
const serviceTiles = [
  {
    icon: Tv,
    title: "Residential Home Theatre Installation",
    description:
      "We offer home theatre design and installation for homes of all sizes — from a simple lounge setup to a dedicated cinema room with ceiling-mounted projector and descending screen.",
  },
  {
    icon: Building2,
    title: "Commercial Home Theatre Installation",
    description:
      "For commercial cinemas, cafes, restaurants, schools and corporate spaces — we are the experts. Quality AV systems that capture attention and elevate any business environment.",
  },
  {
    icon: Zap,
    title: "Home Theatre Upgrades",
    description:
      "Does your home theatre need an upgrade? From smart control and lighting automation to cinema seating and multi-room audio — we keep your system at the cutting edge.",
  },
  {
    icon: Wrench,
    title: "Home Theatre Repairs",
    description:
      "If your home theatre is not quite right, we can help. No sound, crackling speakers, no picture, poor AV connections — our technicians troubleshoot and fix it fast.",
  },
];

// ─── Upgrades ────────────────────────────────────────────────────────────────
const upgrades = [
  {
    icon: MonitorPlay,
    title: "Audio/Visual Equipment",
    description:
      "Control your Home Entertainment, Foxtel, BluRay and music using simple and intuitive menus on your smartphone or iPad/tablet.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Control",
    description:
      "Create and control different lighting settings for your home entertainment system with a custom lighting control solution.",
  },
  {
    icon: ArmchairIcon,
    title: "Cinema Seating",
    description:
      "Whether you have a small home theatre space or a large cinema room with multiple rows of staged seating, the right luxury seating makes a huge difference.",
  },
  {
    icon: Music,
    title: "Multi-Room Audio",
    description:
      "Extend your system beyond one room. Enjoy music and sound throughout your home with a seamlessly integrated multi-room audio setup.",
  },
];

// ─── Repairs list ─────────────────────────────────────────────────────────────
const repairItems = [
  "No sound",
  "Crackling sound in your speakers",
  "No picture",
  "Slow data speeds",
  "Poor AV connections and cables",
];

// ─── More services ───────────────────────────────────────────────────────────
const moreServices = [
  { label: "TV Antenna Installation", href: "/services/antenna" },
  { label: "TV Wall Mounting", href: "/services/tv-wall-mounting" },
  { label: "Surround Sound Set Up", href: "/services/home-theatre" },
  { label: "Multi Room Audio", href: "/services/home-theatre" },
  { label: "Projector & Screen Installation", href: "/services/home-theatre" },
  { label: "TV Remote Programming", href: "/services" },
];

export default function HomeTheatreSuburbPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0D0D0D] overflow-hidden pt-20 pb-14 md:pt-36 md:pb-24">
        <div className="absolute inset-0">
          <img
            src={homeTheatreImg}
            alt="Home theatre installation"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-[#0D0D0D]/40" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.10),rgba(255,255,255,0))]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container px-6 md:px-12 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/70 text-sm font-medium mb-6">
              Melbourne &amp; Mornington Peninsula
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white font-display leading-tight mb-6">
              Home Theatre Installation{" "}
              <span className="text-primary">Suburb</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
              Professional home theatre installation in suburb. Funkesound has been servicing Melbourne and the Mornington Peninsula for over 20 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0414685502">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-bold rounded-full gap-3 group"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call Us Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/contact")}
                className="h-14 px-8 text-lg font-bold rounded-full border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Get a Free Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Your Local Home Theatre Installation{" "}
                <span className="text-primary">Suburb</span> Specialists
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-5">
                Funkesound has been servicing Melbourne suburbs and the Mornington Peninsula for over 20 years. Our technicians are experts when it comes to installing Home Theatre Systems. We can install speakers on brackets, in the ceiling, in the walls or under the floor.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                The Funkesound technicians are focused on clean lines, speaker positions and concealing all the wire and cables. With over 20 years of experience in home theatre installation and design, we know we do it better than anyone else.
              </p>
            </motion.div>

            {/* Three dark trust cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: Volume2,
                  title: "Clean Lines & Hidden Cables",
                  highlight: "Zero visible wiring.",
                  text: "We are focused on clean lines, optimal speaker positioning and concealing every wire and cable. Your home theatre will look as good as it sounds.",
                },
                {
                  icon: ShieldCheck,
                  title: "Fully Trained & Insured",
                  highlight: "Police checked. Fully insured.",
                  text: "All Funkesound technicians are police checked, fully trained, industry experienced, comprehensively insured and fully OH&S compliant.",
                },
                {
                  icon: Star,
                  title: "20+ Years of Excellence",
                  highlight: "4.9★ across 59+ reviews.",
                  text: "With over 20 years of home theatre installation and design experience, and a track record of delighted customers, we know we do it better than anyone else.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.55 }}
                  className="relative bg-[#0D0D0D] rounded-2xl p-7 overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                >
                  {/* green top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary rounded-t-2xl" />
                  {/* subtle glow behind icon */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">{item.highlight}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a href="tel:0414685502">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full gap-3 text-base group"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call 0414 685 502
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <span className="text-sm text-slate-400">Free onsite quote — no obligation</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Service tiles ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="container px-6 md:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Home Theatre Services in Suburb
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              From new installations to upgrades and repairs — residential and commercial — we handle everything.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceTiles.map((tile, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <tile.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-3">{tile.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{tile.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ───────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-100">
        <div className="container px-6 md:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Read What Our Clients Have to Say
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-slate-500 text-sm">4.9 average across 59+ reviews</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-100 flex flex-col gap-5"
              >
                <div className="flex">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 italic">
                  "{review.text}"
                </p>
                <div className="font-bold text-slate-900 text-sm">{review.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Residential deep-dive ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0D0D0D]">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
                Reliable, Professional &amp; Fully Insured
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
                Home Theatre Installation in{" "}
                <span className="text-primary">Suburb</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Residential Home Theatre Installation Suburb
              </h3>
              <p className="text-slate-400 leading-relaxed mb-5">
                The team at Funkesound are capable of installing any sized Home Theatre system. We can arrange for your projector to be mounted on the ceiling or descending from the ceiling. Your projector screen can descend from a bulkhead if required.
              </p>
              <p className="text-slate-400 leading-relaxed mb-5">
                We can program, configure and balance AV amplifiers to optimise your speakers' output. The listening position is critical to the success of every great home theatre installation in suburb. Sound waves from speakers reflect from hard surfaces like windows, walls and ceilings. Taking this into consideration, we recommend the ideal speaker positions for the best acoustics.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                To have a great home theatre installed in your home, call Funkesound on <a href="tel:0414685502" className="text-primary font-semibold hover:underline">0414 685 502</a> — we'll provide you with a free quote and great advice.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Commercial ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
                <Building2 className="w-4 h-4" />
                Commercial Installs
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Commercial Theatre Installation{" "}
                <span className="text-primary">Suburb</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                A quality Audio/Visual system or music system can give your business, café/restaurant, or school a range of benefits in today's competitive world. Recent developments in AV technology have greatly enhanced both the experience and the affordability — capturing people's attention in a way that was never previously possible.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Funkesound is a reputable company, guaranteeing excellent service and a high quality job at great value — serving corporate businesses, entertainment venues, cafes, restaurants, sporting clubs and schools across suburb and Melbourne.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Police Checked",
                  "Fully Trained",
                  "Industry Experienced",
                  "Comprehensively Insured",
                  "Fully OH&S Compliant",
                  "Free Onsite Quote",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <a href="tel:0414685502">
                <Button className="h-12 px-7 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full gap-2 group">
                  <PhoneCall className="w-4 h-4" />
                  Call 0414 685 502
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src={homeTheatreImg}
                  alt="Commercial home theatre installation suburb"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4">
                    <div className="text-white font-bold text-sm mb-1">Residential &amp; commercial experts</div>
                    <div className="text-white/60 text-xs">Cafes, restaurants, schools, corporate spaces &amp; more</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Upgrades ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="container px-6 md:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <Zap className="w-4 h-4" />
              Upgrade Your System
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Home Theatre Suburb{" "}
              <span className="text-primary">Upgrades</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              With today's technology there are many opportunities to upgrade or enhance your current home theatre system. Here are just a few popular options.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
            {upgrades.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-slate-500 mb-5">For more ideas and home theatre upgrades:</p>
            <a href="tel:0414685502">
              <Button className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full gap-2 group">
                <PhoneCall className="w-4 h-4" />
                Call 0414 685 502
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Repairs ───────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
                <Wrench className="w-4 h-4" />
                Expert Repairs
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Home Theatre Installation Suburb{" "}
                <span className="text-primary">Repairs</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                At Funkesound, we understand that when it's time to watch a movie you just want everything to work. That's why we are experts at troubleshooting and home theatre repairs. Our technicians carry the tools and parts to diagnose and fix problems on the same visit in most cases.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We can fix or repair:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {repairItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-7"
            >
              <p className="text-slate-700 mb-4 font-medium">
                If you need help with your home theatre system, call us today and we'll sort it out fast.
              </p>
              <a href="tel:0414685502">
                <Button className="h-12 px-7 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full gap-2 group">
                  <PhoneCall className="w-4 h-4" />
                  Call 0414 685 502
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── More Services ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="container px-6 md:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              More Services
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Home theatre is just the start. Funkesound handles everything in your home entertainment setup.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mb-10">
            {moreServices.map((service, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                onClick={() => navigate(service.href)}
                className="bg-white hover:bg-primary/5 border border-slate-200 hover:border-primary/30 rounded-xl px-4 py-5 text-center text-sm font-medium text-slate-700 hover:text-primary transition-all duration-200 cursor-pointer"
              >
                {service.label}
              </motion.button>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/services")}
              className="h-12 px-8 rounded-full font-bold border-slate-300 hover:border-primary hover:text-primary transition-all gap-2"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(34,197,94,0.08),rgba(255,255,255,0))]" />
        <div className="container px-6 md:px-12 mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-5">
              We Install Home Theatre Systems{" "}
              <span className="text-primary">in Suburb</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Call Funkesound for home theatre installation today. Free onsite quote, same-day service available.
            </p>
            <a href="tel:0414685502">
              <Button
                size="lg"
                className="h-16 px-12 bg-primary text-primary-foreground hover:bg-primary/90 text-xl font-bold rounded-full gap-3 group"
              >
                <PhoneCall className="w-6 h-6" />
                0414 685 502
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
