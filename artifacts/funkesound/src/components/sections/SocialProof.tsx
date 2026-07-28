import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function Counter({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // easeOutExpo
      const easeProgress = 1 === progress ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * (to - from) + from));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

const reviews = [
  {
    name: "Kaye",
    location: "Melbourne",
    text: "Definitely 5 stars! Steve responded quickly to my enquiry, was able to do the job within a couple of days, arrived exactly on time and came back again the next day with solutions for a very tricky antenna. Steve wall mounted 2 TVs for me, not a cable left to be seen and sorted out the aerial issues as well. Everything was cleaned up and taken away – thanks Steve, you did an amazing job."
  },
  {
    name: "Ed & Yvette",
    location: "Melbourne",
    text: "We had a vision of how we wanted our home theatre to be but had no idea on the various components, let alone how to put it all together. Steve came to our home, explained the best way to set up our home theatre and provided us with options of specs and suppliers. When it came to installation, Steve put it all together, tuned it to perfection – we now have an awesome home theatre."
  },
  {
    name: "Chris",
    location: "Melbourne",
    text: "Steve fitted our new Samsung 65 inch TV to wall. Exceptional before, during and after customer service. Steve did a fantastic job and I would recommend highly as I have already done to my friends and work colleagues. Don't hesitate to use Steve – you will be glad you did."
  },
  {
    name: "Paulo",
    location: "Melbourne",
    text: "It was great to see his professional way to hear our suggestions and think on the solutions for the problem, minimising costs and optimising alternatives. Steve at the end did an amazing job, fixing the problem with minimal implications on the house. Steve is the perfect example of an expert, honest and correct tradesperson."
  },
  {
    name: "Juanita Sanger",
    location: "Melbourne",
    text: "One word — AWESOME! Steve, what a pleasure it was to meet someone who is so passionate about doing a great job. You certainly know everything there is to know about audio visual equipment. Your work exceeded our expectations and I couldn't believe you even sorted and neatened the TV cabinet! Already recommending your services to friends and family."
  },
  {
    name: "Andrew",
    location: "Melbourne",
    text: "Had Steve wall mount a couple of TVs for us, relocate the antenna and Foxtel, and wall mount a soundbar. From the moment I called, Steve struck me as a great communicator, always happy to answer any questions. He did a fantastic job – efficient and skilled. I would thoroughly recommend Steve for any home theatre work you may need."
  },
];

export function SocialProof() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-slate-50 relative border-y border-slate-100">
      <div className="container px-6 md:px-12 mx-auto">
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24 divide-x divide-slate-200">
          {[
            { value: 59, suffix: "+", label: "5-Star Reviews" },
            { value: 4, suffix: ".9★", label: "Average Rating" },
            { value: 20, suffix: "+ Yrs", label: "Industry Experience" },
            { value: 100, suffix: "%", label: "Satisfaction Guarantee" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 font-display">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-slate-500 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reviews */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Don't just take our word for it
          </h2>
          <div className="flex justify-center gap-1 text-primary">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="bg-white border-slate-100 shadow-sm h-full relative overflow-hidden">
                <div className="absolute top-6 right-6 text-primary/10">
                  <Quote className="w-12 h-12" />
                </div>
                <CardContent className="pt-10 pb-8 px-8 flex flex-col h-full">
                  <div className="flex gap-1 text-primary mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                    "{review.text}"
                  </p>
                  <div>
                    <div className="font-bold text-slate-900">{review.name}</div>
                    <div className="text-sm text-slate-400">{review.location}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
