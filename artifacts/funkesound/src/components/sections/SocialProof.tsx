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
    name: "James T.",
    location: "Sydney",
    text: "Absolutely flawless work. The TV looks incredible mounted on our feature wall, and not a single cable is visible. Worth every penny for the peace of mind."
  },
  {
    name: "Sarah M.",
    location: "North Shore",
    text: "Transformed our living room into a proper home cinema. The attention to detail during the audio calibration was mind-blowing. Highly recommend Funkesound."
  },
  {
    name: "David L.",
    location: "Inner West",
    text: "Fast, professional, and immaculate cleanup afterwards. The new antenna fixed all our reception issues immediately. Great communication throughout."
  }
];

export function SocialProof() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#0a0a0a] relative border-y border-white/5">
      <div className="container px-6 md:px-12 mx-auto">
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24 divide-x divide-white/5">
          {[
            { value: 100, suffix: "+", label: "Installs Completed" },
            { value: 5, suffix: " Star", label: "Google Rating" },
            { value: 10, suffix: " Yrs", label: "Industry Experience" },
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
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-foreground/50 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reviews */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
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
              <Card className="bg-background border-white/5 h-full relative overflow-hidden">
                <div className="absolute top-6 right-6 text-primary/10">
                  <Quote className="w-12 h-12" />
                </div>
                <CardContent className="pt-10 pb-8 px-8 flex flex-col h-full">
                  <div className="flex gap-1 text-primary mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-8 flex-grow">
                    "{review.text}"
                  </p>
                  <div>
                    <div className="font-bold text-foreground">{review.name}</div>
                    <div className="text-sm text-foreground/50">{review.location}</div>
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
