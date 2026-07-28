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
  MonitorPlay,
  Building2,
  Volume2,
  Cable,
  BadgeCheck,
  Home,
  Signal,
  Music,
  Speaker,
} from "lucide-react";
import tvImg from "@/assets/hero-tv.jpg";

// ─── Reviews ────────────────────────────────────────────────────────────────
const reviews = [
  {
    name: "Michael Andrews",
    text: "Steve has been amazing with helping me position my speakers with speaker brackets. His attention to detail is second to none. With not only helping with an overall neater look but also making sure the sound placement was correct. Steve took his job to heart while also making his time here entertaining with a bright and friendly personality. I'm very grateful and happy with the service Steve provided and will be using him again in the future.",
    rating: 5,
  },
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
];

// ─── Service tiles ───────────────────────────────────────────────────────────
const serviceTiles = [
  {
    icon: Home,
    title: "Residential TV Wall Mounting",
    description:
      "We offer TV wall mounting options and upgrades for homes of all sizes. Flat against the wall, tilting, full-motion — we have the right bracket and the expertise to hang it perfectly.",
  },
  {
    icon: Building2,
    title: "Commercial TV Wall Mounting",
    description:
      "For commercial TV wall mounting — offices, cafes, restaurants, showrooms and more — we are the experts. Professional finish, concealed cables, built to last.",
  },
  {
    icon: Volume2,
    title: "Soundbar & TV Wall Mounting",
    description:
      "Funkesound can handle all types of flat screen TV and soundbar wall mounting. When it comes to installing soundbars and concealing all cables, we are the number one choice.",
  },
  {
    icon: Wrench,
    title: "Bracket Repairs & Re-Mounts",
    description:
      "Is your TV wall mounting bracket broken or loose? Our technicians can inspect, repair or replace any bracket — safely securing your TV back on the wall the right way.",
  },
];

// ─── More services ───────────────────────────────────────────────────────────
const moreServices = [
  { label: "TV Antenna Installation", href: "/services/antenna" },
  { label: "Home Theatre Installation", href: "/services/home-theatre" },
  { label: "Surround Sound Set Up", href: "/services/home-theatre" },
  { label: "Multi Room Audio", href: "/services/home-theatre" },
  { label: "Projector & Screen Installation", href: "/services/home-theatre" },
  { label: "TV Remote Programming", href: "/services" },
];

export default function TvWallMountingSuburbPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0D0D0D] overflow-hidden pt-20 pb-14 md:pt-36 md:pb-24">
        <div className="absolute inset-0">
          <img
            src={tvImg}
            alt="TV wall mounting"
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
              TV Wall Mounting{" "}
              <span className="text-primary">Suburb</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
              Professional TV wall mounting in suburb. Funkesound has been servicing Melbourne and the Mornington Peninsula for over 20 years — highest quality brackets, zero visible cables.
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
                Your Local TV Wall Mounting{" "}
                <span className="text-primary">Suburb</span> Specialists
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-5">
                Funkesound has been servicing Melbourne suburbs and the Mornington Peninsula for over 20 years. We provide professional TV wall mounting in suburb, and our technicians are committed to delivering an excellent level of service with access to a wide variety of wall mounting brackets for all types of TVs.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We only use the highest quality TV wall mounting brackets, components and cables, and have the knowledge and expertise to take on any type of project — big or small — giving you the confidence for a hassle-free experience.
              </p>
            </motion.div>

            {/* Three dark trust cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: MonitorPlay,
                  title: "Premium Brackets & Hardware",
                  highlight: "Every TV type. Every wall type.",
                  text: "We carry a wide variety of wall mounting brackets — flat, tilt, full-motion — for all makes and sizes of TV. Only the highest quality brackets, components and cables make it onto your wall.",
                },
                {
                  icon: ShieldCheck,
                  title: "Fully Trained & Insured",
                  highlight: "Police checked. Fully insured.",
                  text: "All Funkesound technicians are police checked, fully trained, industry experienced, comprehensively insured and fully OH&S compliant. Open your door with complete confidence.",
                },
                {
                  icon: Cable,
                  title: "Zero Visible Cables",
                  highlight: "Clean. Professional. Guaranteed.",
                  text: "We don't just hang your TV — we conceal every cable for a clean, professional finish. Your wall will look like the TV was always there, with nothing dangling behind it.",
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
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary rounded-t-2xl" />
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
              <span className="text-sm text-slate-400">Same-day service available</span>
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
              TV Wall Mounting Services in Suburb
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Residential, commercial, soundbars and bracket repairs — we handle it all with the same attention to detail.
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

      {/* ── TV Wall Mounting deep-dive ─────────────────────────────────────── */}
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
                TV Wall Mounting in{" "}
                <span className="text-primary">Suburb</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <p className="text-slate-400 leading-relaxed mb-5">
                Our TV wall mounting services are designed to be the best solution for both residences and businesses throughout suburb. If you're working with Funkesound you can be confident that you are only getting the very best installation and upgrade solutions at a great price.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Funkesound is a reputable company, guaranteeing excellent service — we do a high quality job at great value. All you need to do is give us a call on <a href="tel:0414685502" className="text-primary font-semibold hover:underline">0414 685 502</a> between 8am–8pm, or request a free onsite quote, and we'll do the rest.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {[
                  "Police Checked",
                  "Fully Trained",
                  "Industry Experienced",
                  "Comprehensively Insured",
                  "Fully OH&S Compliant",
                  "Free Onsite Quote",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Soundbar section ──────────────────────────────────────────────── */}
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
                <Volume2 className="w-4 h-4" />
                Soundbar Mounting
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Soundbar &amp; TV Wall Mounting{" "}
                <span className="text-primary">Suburb</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Funkesound can handle all types of flat screen TV and soundbar wall mounting. When it comes to installing soundbars on the wall and concealing all cables, we are the number one choice in suburb.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether it's a slim soundbar tucked below your TV or a full surround-sound setup mounted around the room, we'll make it look clean, permanent and professional. No dangling cables. No visible brackets. Just great sound and a great look.
              </p>
              <a href="tel:0414685502">
                <Button className="h-12 px-7 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full gap-2 group">
                  <PhoneCall className="w-4 h-4" />
                  Book Now — 0414 685 502
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
                  src={tvImg}
                  alt="Soundbar and TV wall mounting suburb"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4">
                    <div className="text-white font-bold text-sm mb-1">TV + Soundbar — done right</div>
                    <div className="text-white/60 text-xs">Every cable hidden. Every bracket secured. Guaranteed.</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Bracket Repairs ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
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
                Bracket Repairs
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                TV Wall Mounting Bracket{" "}
                <span className="text-primary">Repairs</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Funkesound technicians are the number one experts in mounting TVs on walls. The key to a successful TV wall mounting is using the right bracket for your particular TV. Generally, wall mounted TVs take up less room, are safer for children and animals, and by locking the wall mounted bracket, keep the TV secure from theft.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                To avoid a broken TV or wall mounting bracket, get the experts to hang your TV. Our technicians can install your TV in suburb today — and if your existing bracket is loose, tilted or damaged, we'll fix it fast and properly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {[
                "Takes up less wall space",
                "Safer for children & pets",
                "Locks securely against theft",
                "Correct bracket for your TV",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-5 py-4"
                >
                  <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0" />
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
                For same-day bracket repair or TV wall mounting in suburb, call us now.
              </p>
              <a href="tel:0414685502">
                <Button className="h-12 px-7 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full gap-2 group">
                  <PhoneCall className="w-4 h-4" />
                  Call for Same-Day Service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── More Services ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-100">
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
              TV wall mounting is just one part of what we do. Funkesound handles everything in your home entertainment setup.
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
                className="bg-slate-50 hover:bg-primary/5 border border-slate-200 hover:border-primary/30 rounded-xl px-4 py-5 text-center text-sm font-medium text-slate-700 hover:text-primary transition-all duration-200 cursor-pointer"
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
              We Hang Your TV{" "}
              <span className="text-primary">in Suburb</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Call Funkesound for TV wall mounting today. Free onsite quote, same-day service available.
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
