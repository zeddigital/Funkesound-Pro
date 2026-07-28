import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  PhoneCall,
  Mail,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Radio,
  MonitorPlay,
  Speaker,
  ChevronDown,
  ChevronUp,
  Send,
} from "lucide-react";

const contactDetails = [
  {
    icon: PhoneCall,
    label: "Call Us",
    value: "0414 685 502",
    sub: "Mon–Sat, 8am–6pm",
    href: "tel:0414685502",
    accent: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@funkesound.com.au",
    sub: "We reply within 24 hours",
    href: "mailto:hello@funkesound.com.au",
    accent: false,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat, 8am–6pm",
    sub: "Public holidays may vary",
    href: null,
    accent: false,
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Melbourne & Mornington Peninsula",
    sub: "All metro suburbs covered",
    href: null,
    accent: false,
  },
];

const services = [
  { value: "antenna", label: "TV Antenna Installation", icon: Radio },
  { value: "wall-mounting", label: "TV Wall Mounting", icon: MonitorPlay },
  { value: "home-theatre", label: "Home Theatre Setup", icon: Speaker },
  { value: "repair", label: "Repair / Fault Finding", icon: Radio },
  { value: "other", label: "Other / Not Sure", icon: ChevronDown },
];

const serviceAreas = [
  "Melbourne CBD",
  "South Yarra",
  "St Kilda",
  "Bayside",
  "Frankston",
  "Mount Eliza",
  "Mornington",
  "Rosebud",
  "Sorrento",
  "Portsea",
  "Dromana",
  "Hastings",
  "Langwarrin",
  "Seaford",
  "Mentone",
  "Mordialloc",
  "Cheltenham",
  "Bentleigh",
  "Brighton",
  "Hampton",
];

const faqs = [
  {
    q: "What areas do you service?",
    a: "We cover all of Melbourne's metro area and the full Mornington Peninsula — from the CBD to Portsea. If you're unsure whether we reach you, just call or send a message.",
  },
  {
    q: "How quickly can you come out?",
    a: "Most jobs are booked within 1–3 business days. For urgent faults we do our best to accommodate same-day or next-day visits.",
  },
  {
    q: "Do you charge for quotes?",
    a: "No. All quotes are free and obligation-free. We'll assess your situation, recommend the right solution, and give you a clear upfront price before any work begins.",
  },
  {
    q: "What should I have ready when I call?",
    a: "It helps to know the rough size and mounting surface for TV wall mounts, or the number of TV points for antenna work. But don't worry — Steve will walk you through everything on the call.",
  },
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end bg-[#0D0D0D] overflow-hidden pt-32 pb-20">
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
              Get in{" "}
              <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Ready for a free quote? Call us, send a message, or fill in the form below — we'll get back to you fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="bg-[#111827] border-b border-white/5 py-10">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDetails.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-200 group h-full ${
                      item.accent
                        ? "bg-primary/10 border-primary/30 hover:bg-primary/20"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        item.accent ? "bg-primary text-white" : "bg-white/10 text-slate-300"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className={`font-bold text-base ${item.accent ? "text-primary" : "text-white"}`}>
                        {item.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{item.sub}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-5 rounded-2xl border bg-white/5 border-white/10 h-full">
                    <div className="w-11 h-11 rounded-xl bg-white/10 text-slate-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="font-bold text-white text-base">{item.value}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + aside */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-start">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-3">
                Send us a message
              </h2>
              <p className="text-slate-500 mb-10">
                Fill in the form and we'll be in touch within one business day — usually much faster.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center"
                >
                  <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-5" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Message received!</h3>
                  <p className="text-slate-500 max-w-sm mx-auto">
                    Thanks for reaching out. Steve will be in touch shortly. If it's urgent, call <a href="tel:0414685502" className="text-primary font-semibold">0414 685 502</a>.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="04xx xxx xxx"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      What do you need? <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      >
                        <option value="" disabled>Select a service…</option>
                        {services.map((s) => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Tell us a bit more
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="e.g. 2-storey brick home in Frankston, looking to mount a 75-inch TV above fireplace and install a new antenna..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base rounded-xl gap-3 group"
                  >
                    <Send className="w-5 h-5" />
                    Send Enquiry
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-slate-400 text-center">
                    Prefer to talk? Call us directly on{" "}
                    <a href="tel:0414685502" className="text-primary font-semibold hover:underline">
                      0414 685 502
                    </a>
                  </p>
                </form>
              )}
            </motion.div>

            {/* Aside */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Call CTA card */}
              <div className="bg-[#0D0D0D] rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <PhoneCall className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Prefer a call?</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Speak directly with Steve. He'll give you honest advice and a clear quote on the spot.
                </p>
                <a href="tel:0414685502">
                  <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl gap-2">
                    <PhoneCall className="w-4 h-4" />
                    0414 685 502
                  </Button>
                </a>
              </div>

              {/* What to expect */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-5">What to expect</h3>
                <ul className="space-y-4">
                  {[
                    "Free, no-obligation quote",
                    "Upfront, transparent pricing",
                    "Prompt response — usually same day",
                    "Flexible scheduling Mon–Sat",
                    "No job too small or too large",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response time */}
              <div className="border border-slate-200 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Fast response time</div>
                  <div className="text-slate-500 text-sm">We aim to reply within a few hours during business hours.</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-24 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="container px-6 md:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <MapPin className="w-4 h-4" />
              Where we work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Service Areas
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We cover all of Melbourne metro and the Mornington Peninsula. Don't see your suburb? Just ask — we cover more than the list below.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {serviceAreas.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-center text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
              >
                {area}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center text-sm text-slate-400 mt-8"
          >
            …and many more surrounding suburbs. Call to confirm your area.
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-28 bg-[#0D0D0D]">
        <div className="container px-6 md:px-12 mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Common Questions
            </h2>
            <p className="text-slate-400">
              Quick answers before you reach out.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className="text-white font-semibold text-base">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
