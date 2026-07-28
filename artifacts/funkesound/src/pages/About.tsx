import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";
import {
  PhoneCall,
  Star,
  CheckCircle2,
  Clock,
  Heart,
  Shield,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const goals = [
  {
    icon: Star,
    text: "Exceed our customers' expectations 100% of the time.",
  },
  {
    icon: CheckCircle2,
    text: "Deliver on our promises — every single time.",
  },
  {
    icon: Heart,
    text: "Always provide genuine value for money.",
  },
  {
    icon: Lightbulb,
    text: "Deliver the right solution, not just the cheapest.",
  },
  {
    icon: Shield,
    text: "Serve our customers with honesty and integrity.",
  },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "59+", label: "5-Star Reviews" },
  { value: "4.9★", label: "Average Rating" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Hero */}
      <section className="relative min-h-[50vh] flex items-end bg-[#0D0D0D] overflow-hidden pt-32 pb-20">
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
              About{" "}
              <span className="text-primary">Funkesound</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Over two decades of honest, expert home entertainment installation — built on trust, precision, and a genuine passion for the craft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#111827] py-10 border-b border-white/5">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
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

      {/* Main story section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <img
                  src="https://funkesound.com/wp-content/uploads/2026/06/TV-Wall-Mounting-Services-Steve.webp"
                  alt="Steve Funke — Founder of Funkesound"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="text-white font-bold text-lg">Steve Funke</p>
                    <p className="text-white/70 text-sm">Founder & Lead Technician</p>
                    <div className="flex gap-1 mt-2">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                      ))}
                      <span className="text-white/60 text-xs ml-1">4.9 — 59 reviews</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-100 rounded-full blur-2xl -z-10" />
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                <Clock className="w-4 h-4" />
                20+ Years in the Industry
              </div>

              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-slate-900 font-display leading-tight mb-8">
                Who Is<br />Funkesound?
              </h2>

              <div className="space-y-5 text-lg text-slate-500 leading-relaxed mb-10">
                <p>
                  My name is Steve Funke, and for more than 20 years I have worked in the home entertainment industry, helping homeowners across Melbourne and the Mornington Peninsula create spaces that suit their lifestyle, budget, and future needs.
                </p>
                <p>
                  During that time, I've witnessed the rapid evolution of television, audio, streaming, networking, and smart home technology — and I've stayed ahead of every shift so my clients don't have to.
                </p>
                <p>
                  What sets us apart is our experience, product knowledge, and commitment to providing honest advice. We take the time to understand how you and your family use your home, then recommend solutions that are practical, reliable, and tailored to your short-term and long-term requirements.
                </p>
                <p>
                  Whether you're installing a new TV, creating a dedicated home theatre, or sorting out your antenna reception — our focus is on delivering a solution that works for you both now and into the future.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6 gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  Get in Touch
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

      {/* Goals / Values */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container px-6 md:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-display mb-6">
              Our <span className="text-primary">Ambitious</span> Goals
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              These aren't marketing slogans — they're the standards we hold ourselves to on every single job.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <goal.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed">{goal.text}</p>
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
