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
  Signal,
  Bird,
  Star,
  MonitorPlay,
  Speaker,
  Wifi,
  Tv,
  Projector,
  Music,
} from "lucide-react";
import antennaImg from "@/assets/antenna-dusk.jpg";

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
    icon: Signal,
    title: "TV Antenna Installation",
    description:
      "We offer digital TV antenna installations and digital antenna upgrades. Using only premium-grade Australian and European antennas for the strongest possible signal.",
  },
  {
    icon: Wrench,
    title: "TV Antenna Tuning",
    description:
      "Does your TV antenna need professional tuning? Our technicians use specialised equipment to conduct a full site analysis and optimise your signal for perfect clarity.",
  },
  {
    icon: Bird,
    title: "TV Antenna Bird Spikes",
    description:
      "Funkesound offers digital TV antennas with purpose-built UV stabilised bird deterrent spikes. Over 90% of our installations include bird spike protection.",
  },
  {
    icon: ShieldCheck,
    title: "TV Antenna Repairs",
    description:
      "If your TV antenna needs repair, give us a call — we are the experts. In most cases we can fix your problem on the very same day.",
  },
];

// ─── More services ───────────────────────────────────────────────────────────
const moreServices = [
  { label: "TV Wall Mounting", href: "/services/tv-wall-mounting" },
  { label: "Home Theatre Installation", href: "/services/home-theatre" },
  { label: "Surround Sound Set Up", href: "/services/home-theatre" },
  { label: "Multi Room Audio", href: "/services/home-theatre" },
  { label: "Projector & Screen Installation", href: "/services/home-theatre" },
  { label: "TV Remote Programming", href: "/services" },
];

export default function AntennaSuburbPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-end bg-[#0D0D0D] overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <img
            src={antennaImg}
            alt="TV antenna installation"
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
              Digital TV Antenna{" "}
              <span className="text-primary">Suburb</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
              Do you need a professional digital TV antenna installation in suburb? Funkesound has been installing and repairing TV antennas in and around Melbourne for over 20 years.
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
                Your Local Digital TV Antenna{" "}
                <span className="text-primary">Suburb</span> Specialist
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Funkesound has been installing TV antennas in and around Melbourne for over 20 years. We provide new digital TV antenna installation and repairs. We are totally committed to providing you with excellent customer service. Our technicians use only the highest quality digital TV antennas and have the knowledge and expertise to take on any type of project — big or small — giving you the confidence for a hassle-free experience.
              </p>
              <p className="text-base font-semibold text-slate-800 mb-8">
                100% customer satisfaction is our goal.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  text: "We offer a FREE onsite quote and carry a range of premium quality Australian and European digital TV antennas, boosters and filters to make sure we only install the TV antenna that best suits your home, office or even your caravan.",
                },
                {
                  text: "Our Funkesound team are fully trained for the installation of digital antenna products, fully insured and police checked.",
                },
                {
                  text: "With a proven track record for awesome customer service and only the highest grade TV antennas, you can be sure we are the solution to all your audio and visual needs.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
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
              TV Antenna Services in Suburb
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              From new installs to repairs, tuning and bird protection — we handle everything.
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
            <div className="flex items-center justify-center gap-2 text-primary font-semibold">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-slate-600 font-normal text-sm">4.9 average across 59+ reviews</span>
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

      {/* ── Installation deep-dive ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0D0D0D]">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
                Reliable, Professional &amp; Fully Insured
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
                Digital TV Antennas in{" "}
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
                Digital TV Antenna Suburb Installation
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                At Funkesound we use only the best digital TV antenna to suit your location. Our digital TV antennas provide a reliable, clean and powerful signal. 100% customer satisfaction is one of the many reasons why we have become the TV antenna installation service of choice in suburb and throughout Melbourne.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Whether you need a brand new antenna, an upgrade to an existing system, or additional TV points run through your home, our technicians carry everything required to complete the job on the same visit. We leave your home clean, cables hidden, and your signal picture-perfect.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bird Spikes ───────────────────────────────────────────────────── */}
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
                <Bird className="w-4 h-4" />
                Bird Protection
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Digital TV Antenna Suburb{" "}
                <span className="text-primary">Bird Spikes</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Are birds messing up your roof and causing damage to your TV antenna? We have the solution. Funkesound has bird spikes available for your antenna today. They will keep large birds off the antenna and stop various other birds from biting the cables.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                TV Antenna suburb bird spikes also act as a deterrent, preventing birds from leaving droppings all over your roof — which could end up contaminating your water tank.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                The way we see it, it's a win-win. Your digital TV antenna will last longer and your roof stays cleaner. Over <strong>90% of our digital TV antenna installations</strong> are installed with purpose-built UV stabilised bird deterrent spikes.
              </p>
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
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src={antennaImg}
                  alt="TV Antenna with bird spike protection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4">
                    <div className="text-white font-bold text-sm mb-1">90%+ of installs include bird spikes</div>
                    <div className="text-white/60 text-xs">Purpose-built UV stabilised deterrent spikes included by default</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Repairs ───────────────────────────────────────────────────────── */}
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
                Expert Repairs
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Digital TV Antenna Suburb{" "}
                <span className="text-primary">Repairs</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Our expertise in the audio visual industry is extremely high. With over 20 years of experience and continual on-the-job training, we remain at the top of our game. We carry a large range of TV antennas to make sure we have the right product for your situation and location.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Our technicians will come to your home and, using specialised equipment, conduct a full site analysis and signal test of your property. This allows us to provide the correct TV antenna repair — or a new installation if required.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                If your TV antenna in suburb does need repair, our technician will provide you with a free onsite quote. In most cases we will be able to fix your problem on the very same day. That means you'll be enjoying your favourite TV shows with perfect picture clarity and no more annoying drop-outs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {[
                "Fully insured & qualified",
                "Police checked technicians",
                "Full range of spare parts on board",
                "Industry-leading product warranties",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-slate-200"
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
              <p className="text-slate-700 mb-4">
                Every technician carries a full range of spare parts, cables, wall outlets, amplifiers and new digital TV antennas to fix any TV antenna problem. All of our technicians are local to your area and are highly trained to provide the best possible price, service and advice.
              </p>
              <a href="tel:0414685502">
                <Button className="h-12 px-7 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full gap-2 group">
                  <PhoneCall className="w-4 h-4" />
                  Call Today for a Free Quote
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
              Antenna installation is just the start. Funkesound handles everything in your home entertainment setup.
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
              We Install Digital TV Antennas{" "}
              <span className="text-primary">in Suburb</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Call Funkesound for TV antennas today. Free onsite quote, same-day service available.
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
