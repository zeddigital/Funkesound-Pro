import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Contact } from "@/components/sections/Contact";
import {
  MonitorPlay,
  Radio,
  Speaker,
  Check,
  PhoneCall,
  ArrowRight,
  Tv,
  Wifi,
  Volume2,
  Wrench,
  Shield,
  Clock,
  Home,
  Building2,
} from "lucide-react";
import antennaImg from "@/assets/antenna-dusk.jpg";
import theatreImg from "@/assets/home-theatre.jpg";
import heroTvImg from "@/assets/hero-tv.jpg";

const services = [
  {
    id: "tv-wall-mounting",
    icon: MonitorPlay,
    label: "TV Wall Mounting",
    headline: "Flawless Installs, Zero Visible Cables",
    description:
      "We've been mounting TVs across Melbourne and the Mornington Peninsula for over 20 years. Whether it's a standard plasterboard wall, solid brick, stone fireplace, or custom cabinetry — we handle every wall type with the same level of precision. Every cable is fully concealed. Every bracket is levelled to the millimetre.",
    image: heroTvImg,
    imageAlt: "TV professionally wall mounted with concealed cabling",
    features: [
      { icon: Tv, text: "All screen sizes — from 32\" to 100\"+" },
      { icon: Wrench, text: "All wall types: plasterboard, brick, stone, timber" },
      { icon: Check, text: "Fully concealed cabling — no surface conduit" },
      { icon: Volume2, text: "Soundbar & speaker integration" },
      { icon: Shield, text: "Custom bracket sourcing & supply" },
      { icon: Clock, text: "Same-week appointments available" },
    ],
    cta: "Book a Wall Mount",
    accent: "from-primary/20 to-emerald-500/5",
  },
  {
    id: "home-theatre",
    icon: Speaker,
    label: "Home Theatre Installation",
    headline: "Cinema-Grade Sound & Vision — In Your Home",
    description:
      "We design and install complete home theatre systems for both residential and commercial spaces. From speaker placement and acoustic calibration to projector screens and equipment rack wiring — we do it all. Clean lines, hidden cables, and tuned-to-perfection audio that will genuinely surprise you.",
    image: theatreImg,
    imageAlt: "Custom home theatre installation by Funkesound",
    features: [
      { icon: Speaker, text: "Surround sound: in-ceiling, in-wall, and floor" },
      { icon: Home, text: "Residential home theatre design & build" },
      { icon: Building2, text: "Commercial cinema installation" },
      { icon: Check, text: "Projector, screen & display calibration" },
      { icon: Wrench, text: "Equipment rack wiring & labelling" },
      { icon: Volume2, text: "Remote control & automation integration" },
    ],
    cta: "Plan Your Home Theatre",
    accent: "from-slate-900/0 to-slate-900/0",
  },
  {
    id: "antenna-installation",
    icon: Radio,
    label: "TV Antenna Installation",
    headline: "Crystal Clear Reception — Guaranteed",
    description:
      "Poor reception is fixable. We install, repair, and upgrade digital TV antennas across Melbourne and the Mornington Peninsula. Our local knowledge of signal terrain and weather conditions means we position your antenna for maximum strength and stability — the first time.",
    image: antennaImg,
    imageAlt: "Professional TV antenna installation at dusk",
    features: [
      { icon: Wifi, text: "Full digital signal testing before & after" },
      { icon: Shield, text: "Storm-resistant, weatherproof mounts" },
      { icon: Radio, text: "Roof, attic, and external wall installations" },
      { icon: Check, text: "Amplifier & distribution system integration" },
      { icon: Wrench, text: "Antenna fault-finding & repair" },
      { icon: Clock, text: "Local Melbourne & Mornington Peninsula expertise" },
    ],
    cta: "Fix My Reception",
    accent: "from-primary/20 to-emerald-500/5",
  },
];

function ServiceSection({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={service.id}
      className={`py-24 md:py-32 ${isEven ? "bg-white" : "bg-slate-50"}`}
    >
      <div className="container px-6 md:px-12 mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            !isEven ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`order-1 ${!isEven ? "lg:order-2" : "lg:order-1"}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Service badge */}
              <div className="absolute bottom-6 left-6">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 text-white text-sm font-medium">
                  <service.icon className="w-4 h-4 text-primary" />
                  {service.label}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className={`order-2 ${!isEven ? "lg:order-1" : "lg:order-2"}`}
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              <service.icon className="w-4 h-4" />
              {service.label}
            </div>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-slate-900 mb-6 font-display leading-tight">
              {service.headline}
            </h2>

            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              {service.description}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {service.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                  className="flex items-center gap-3 text-sm text-slate-600"
                >
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  {feature.text}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6 gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                {service.cta}
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-slate-600 hover:text-primary gap-2 font-medium"
              >
                Get a free quote
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Hero */}
      <section className="relative bg-[#0D0D0D] overflow-hidden pt-20 pb-14 md:pt-36 md:pb-24">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.08),rgba(255,255,255,0))]" />
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
              Melbourne & Mornington Peninsula
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white font-display leading-tight mb-6">
              What We{" "}
              <span className="text-primary">Do Best</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Over 20 years of precision AV installation across Melbourne. Every
              job done right — on time, immaculate finish, zero stress for you.
            </p>
          </motion.div>

          {/* Service anchor pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  const el = document.getElementById(s.id);
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-primary/40 rounded-full px-5 py-2 text-white/60 hover:text-white text-sm font-medium transition-all duration-300"
              >
                <s.icon className="w-3.5 h-3.5" />
                {s.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* Contact / CTA */}
      <Contact />
      <Footer />
    </div>
  );
}
