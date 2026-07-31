import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
  Wrench,
  Star,
  Quote,
  PhoneCall,
  ArrowRight,
  Eye,
  Award,
  Heart,
  Zap,
} from "lucide-react";
import theatreImg from "@/assets/home-theatre.jpg";
import heroTvImg from "@/assets/hero-tv.jpg";

const differentiators = [
  {
    icon: Eye,
    title: "Invisible Cable Management",
    description:
      "Every cable fully concealed — in the wall, under the floor, or routed through custom conduit. You'll never see a single wire. This is our non-negotiable standard on every job.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured & Licensed",
    description:
      "All work is carried out by fully insured, licensed technicians. You're covered, your home is covered, and the work is done to Australian standards.",
  },
  {
    icon: Wrench,
    title: "Premium Mounts & Brackets",
    description:
      "We only use quality-rated hardware. No cheap brackets, no cutting corners. Every mount is rated for your screen size and wall type — selected and sourced specifically for your install.",
  },
  {
    icon: Sparkles,
    title: "Immaculate Finish, Every Time",
    description:
      "We leave your home exactly as we found it — minus the chaos. Every hole is patched, every surface wiped down, and all packaging taken away. Clean workspace is non-negotiable.",
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    description:
      "We respect your time. We show up when we say we will, work efficiently, and never leave you waiting around. That's just basic professionalism — and our reviews back it up.",
  },
  {
    icon: Award,
    title: "Lifetime Workmanship Warranty",
    description:
      "We stand behind every job. If something isn't right with our workmanship, we come back and fix it — no charge, no questions. That's our promise.",
  },
  {
    icon: Heart,
    title: "Honest Advice, Always",
    description:
      "We'll tell you what you actually need — not what earns us the most. If a simpler solution works better for your home and budget, that's what we'll recommend.",
  },
  {
    icon: Zap,
    title: "20+ Years of Local Expertise",
    description:
      "We know Melbourne's homes — the wall types, the signal terrain, the tricky spots. Two decades of local installs means we've solved every problem you're likely to face.",
  },
];

const pullQuotes = [
  {
    text: "It was great to see his professional way to hear our suggestions and think on the solutions for the problem, minimising costs. Steve is the perfect example of an expert, honest and correct tradesperson.",
    name: "Paulo",
    detail: "Antenna Installation",
  },
  {
    text: "Steve took his job to heart while also making his time here entertaining with a bright and friendly personality. His attention to detail is second to none.",
    name: "Michael Andrews",
    detail: "Speaker Installation",
  },
  {
    text: "I have used Steve's services since 2001 and have confidently referred many people to him. Steve's attention to detail is excellent, his service is awesome and the end result is always great.",
    name: "Nicholas Lynch",
    detail: "Long-term Client",
  },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "59+", label: "5-Star Reviews" },
  { value: "4.9★", label: "Google Rating" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

export default function WhyUsPage() {
  const [, navigate] = useLocation();
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0D0D0D] overflow-hidden pt-20 pb-14 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.08),rgba(255,255,255,0))]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={heroTvImg}
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="container px-6 md:px-12 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/70 text-sm font-medium mb-3 md:mb-6">
              <Star className="w-3.5 h-3.5 text-primary fill-primary" />
              4.9 Stars — 59 Reviews
            </div>
            <h1 className="text-3xl md:text-6xl xl:text-7xl font-bold text-white font-display leading-tight mb-4 md:mb-6">
              Why Choose{" "}
              <span className="text-primary">Funkesound?</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              In a market full of tradies with a drill and a van, here's what makes us different — and why Melbourne homeowners keep coming back.
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
              Book a Free Quote
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/reviews")}
              className="text-white/60 hover:text-white gap-2 font-medium border border-white/10 hover:border-white/20 rounded-full px-6"
            >
              See our reviews
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#111827] py-10 border-b border-white/5">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:divide-x md:divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="text-3xl md:text-4xl font-bold text-white font-display mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 differentiators grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-6 md:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-display mb-6">
              The Funkesound <span className="text-primary">Standard</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Eight things we do differently — and the reason our clients refer us to everyone they know.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:border-primary/25 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3 font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft section — image + copy */}
      <section className="py-24 md:py-32 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(34,197,94,0.06),transparent)]" />
        <div className="container px-6 md:px-12 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                <img
                  src={theatreImg}
                  alt="Luxury home theatre by Funkesound"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 md:-right-10 bg-[#1F2937] border border-white/10 p-6 rounded-2xl shadow-2xl z-20 hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">100%</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider">Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display leading-tight mb-6">
                Craftsmanship you can <span className="text-primary">see</span>.<br />
                Technology you can <span className="text-primary">feel</span>.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                We approach every installation not as a job, but as a craft. When you hire Funkesound, you're investing in peace of mind. We sweat the small details — levelling to the millimetre, hiding every cable, and calibrating your system until it's genuinely perfect.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mb-10">
                After more than 20 years, we've earned the trust of hundreds of Melbourne families. Not through advertising — through word of mouth, referrals, and a 4.9-star reputation built one install at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={scrollToContact}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6 gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  Get a Free Quote
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pull quotes */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container px-6 md:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-display mb-4">
              Don't take our word for it
            </h2>
            <div className="flex justify-center gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pullQuotes.map((quote, i) => (
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
                <p className="text-slate-600 leading-relaxed mb-8 italic">
                  "{quote.text}"
                </p>
                <div>
                  <div className="font-bold text-slate-900">{quote.name}</div>
                  <div className="text-sm text-slate-400">{quote.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
