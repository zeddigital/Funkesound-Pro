import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Star, Quote, PhoneCall, ArrowRight } from "lucide-react";

// ─── All reviews from funkesound.com/testimonials ────────────────────────────
const reviews = [
  {
    name: "Michael Andrews",
    title: "Speaker placement amazing service",
    text: "Steve has been amazing with helping me position my speakers with speaker brackets. His attention to detail is second to none — with not only helping with an overall neater look but also making sure the sound placement was correct. Steve took his job to heart while also making his time here entertaining with a bright and friendly personality. I'm very grateful and happy with the service Steve provided and will be using him again in the future.",
    rating: 5,
    service: "Speaker Brackets",
  },
  {
    name: "Kaye",
    title: "Excellent service",
    text: "Definitely 5 stars! Steve responded quickly to my enquiry, was able to do the job within a couple of days, arrived exactly on time and came back again the next day with solutions for a very tricky antenna. Steve wall mounted 2 TVs for me, not a cable left to be seen and sorted out the aerial issues as well. Everything was cleaned up and taken away — thanks Steve, you did an amazing job.",
    rating: 5,
    service: "TV Wall Mounting & Antenna",
  },
  {
    name: "Ed & Yvette",
    title: "Home theatre installation",
    text: "We had a vision of how we wanted our home theatre to be but had no idea on the various components, let alone how to put it all together. After a bit of research and discussions with various installers, we decided on Steve Funke. Steve came to our home, explained the best way to set up our home theatre and provided us with options of specs and suppliers. When it came to installation, Steve put it all together, tuned it to perfection. We now have an awesome home theatre. I have no hesitation in recommending Steve for all home theatre needs.",
    rating: 5,
    service: "Home Theatre",
  },
  {
    name: "Gerry Richardson",
    title: "Very friendly and confident",
    text: "From the outset Steve was approachable and eager to assist me with my TV aerial installation request. I was impressed that Steve was able to attend at my premises the following day. During the installation Steve kept me informed throughout. I was genuinely amazed how Steve was able to manoeuvre not only the cabling, but himself in such a confined and obstructive space. Needless to say, once the installation was complete the aerial point operates perfectly. I found him very friendly and confident in his abilities and skills. I would thoroughly recommend Steve to anyone requiring audio visual assistance.",
    rating: 5,
    service: "TV Antenna",
  },
  {
    name: "Andrew",
    title: "First class!",
    text: "Had Steve wall mount a couple of TVs for us, relocate the antenna and Foxtel, and wall mount a soundbar. From the moment I called, Steve struck me as a great communicator — always happy to answer any questions I had. He did a fantastic job with both TVs, one of which had been stuffed up previously by a different company. He didn't stop for a break and was efficient and skilled. I would thoroughly recommend Steve for any home theatre work you may need.",
    rating: 5,
    service: "TV Wall Mounting & Soundbar",
  },
  {
    name: "Juanita Sanger",
    title: "Home theatre looks so great",
    text: "One word — 'AWESOME'! Steve, what a pleasure it was to meet someone who is so passionate about doing a great job. You certainly know everything there is to know about audio visual equipment. Your work exceeded our expectations and I couldn't believe you even sorted and neatened the TV cabinet! Thanks for making our home theatre look so great. I am already recommending your services to our friends and family.",
    rating: 5,
    service: "Home Theatre",
  },
  {
    name: "Gemma Benallack",
    title: "Highly recommend",
    text: "Steve Funke provided our house with a smart, streamlined and cost-effective Home Entertainment solution. Steve is extremely knowledgeable and experienced, and was able to quickly identify what existing equipment we already had and recommend an effective solution that was both current and cost effective to meet our needs. In addition Steve provided a swift and customer-focused service which was very impressive.",
    rating: 5,
    service: "Home Entertainment",
  },
  {
    name: "Tony Dunphy",
    title: "Very knowledgeable",
    text: "We employed Funkesound to come to our office to install our new Audio Visual Equipment. Steve turned up on time and was amazingly refreshing in his approach. He was knowledgeable and gave us some ideas on how to make our system work even better than we imagined. In an area where there are a lot of operators with no formal training or experience and even less care, Steve is a real standout and we can't recommend him highly enough.",
    rating: 5,
    service: "Commercial AV",
  },
  {
    name: "Wendy Stewart-Blyth",
    title: "Great service and results!!",
    text: "Steve just fitted our new Samsung 65\" QLED. He changed over the bracket for us which proved a bit of a test but he succeeded with flying colours. Great job!! Can't recommend him more highly. Great communication, prompt and on time, and great service. Thanks Steve.",
    rating: 5,
    service: "TV Wall Mounting",
  },
  {
    name: "John & Lynne Williams",
    title: "Very happy",
    text: "Just a note to thank you most sincerely for your work in getting our sound system and TV situations solved at our home in Cape Schanck. The work was indeed challenging to say the least, but your continued efforts eventually won the day. Thanks again for a 'job well done'.",
    rating: 5,
    service: "Sound System & TV",
  },
  {
    name: "Chris",
    title: "Highly recommend",
    text: "Steve fitted our new Samsung 65 inch TV to wall. Exceptional before, during and after customer service. Steve did a fantastic job, and I would recommend him highly — as I have already done to my friends and work colleagues. Don't hesitate to use Steve, you will be glad you did.",
    rating: 5,
    service: "TV Wall Mounting",
  },
  {
    name: "Lisa",
    title: "Amazing job, highly recommended!",
    text: "Steve did an amazing job dismantling my cinema room and putting my cinema room back together in my new house. Very professional and hard working.",
    rating: 5,
    service: "Home Theatre",
  },
  {
    name: "Clive Cristie",
    title: "Definitely recommend",
    text: "Steve has completed several sound system set ups and TV wall mounts for us and we can highly recommend his workmanship and knowledge.",
    rating: 5,
    service: "Sound System & TV Wall Mounting",
  },
  {
    name: "Rob",
    title: "Exceptional!",
    text: "Timely, efficient and KNOWS HIS STUFF. Highly recommend.",
    rating: 5,
    service: "AV Installation",
  },
  {
    name: "Daniel",
    title: "Great service",
    text: "Steve was fantastic, prompt and professional. Highly recommended.",
    rating: 5,
    service: "AV Installation",
  },
  {
    name: "Ruwan",
    title: "Fantastic service!!!",
    text: "Fantastic service from Steve — would highly recommend to anyone looking for professional audio visual installation. Five stars without hesitation.",
    rating: 5,
    service: "AV Installation",
  },
];

const stats = [
  { value: "4.9", label: "Average Rating", sub: "out of 5 stars" },
  { value: "59+", label: "Verified Reviews", sub: "on Google" },
  { value: "20+", label: "Years in Business", sub: "Melbourne & surrounds" },
  { value: "100%", label: "Satisfaction Goal", sub: "every single job" },
];

export default function ReviewsPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[48vh] flex items-end bg-[#0D0D0D] overflow-hidden pt-32 pb-20">
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
              Melbourne's Most Trusted Audio &amp; Visual
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white font-display leading-tight mb-6">
              What Our Clients{" "}
              <span className="text-primary">Say</span>
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-white/70 text-lg">
                4.9 out of 5 — based on 59 reviews
              </span>
            </div>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
              Don't take our word for it. Here's what Melbourne homeowners and businesses say about working with Steve and the Funkesound team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <section className="bg-[#111827] border-b border-white/5 py-10">
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
                <div className="text-sm font-semibold text-primary mb-0.5">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews grid ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container px-6 md:px-12 mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Funkesound Customer Reviews
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Every review is from a real customer. 59 reviews, 4.9 stars — and counting.
            </p>
          </motion.div>

          {/* Masonry-style 3-column grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.55 }}
                className="break-inside-avoid bg-white rounded-2xl p-7 border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 mb-6"
              >
                {/* Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-slate-400 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
                    {review.service}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-slate-900 text-base mb-3 leading-snug">
                  {review.title}
                </h3>

                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-1 -left-1 w-6 h-6 text-primary/15 fill-primary/15" />
                  <p className="text-slate-600 text-sm leading-relaxed pl-5">
                    {review.text}
                  </p>
                </div>

                {/* Name */}
                <div className="mt-5 pt-5 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xs">
                      {review.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="font-semibold text-slate-900 text-sm">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(34,197,94,0.08),rgba(255,255,255,0))]" />
        <div className="container px-6 md:px-12 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-primary text-primary" />
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-5">
              Ready to join our happy customers?
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Get in touch today for a free quote. We service all of Melbourne metro and the Mornington Peninsula.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0414685502">
                <Button
                  size="lg"
                  className="h-14 px-10 bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-bold rounded-full gap-3 group"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call 0414 685 502
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/contact")}
                className="h-14 px-10 text-lg font-bold rounded-full border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Get a Free Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
