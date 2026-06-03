"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { Lightning, CheckCircle, ArrowRight } from "@phosphor-icons/react";
import BackgroundVideo from "next-video/background-video";
import aerialVideo from "@videos/Main Arial veiw.mp4";

export function TechnologySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-adobe/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[500px] lg:h-[650px] rounded-[40px] overflow-hidden shadow-xl"
        >
          <BackgroundVideo
            src={aerialVideo}
            className="absolute inset-0 w-full h-full [&>video]:object-cover"
          />
          <div className="absolute inset-0 bg-sage/10 mix-blend-multiply pointer-events-none"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-adobe/20 bg-adobe/10 text-sm font-medium mb-6 text-forest">
            <Lightning weight="fill" className="w-4 h-4 text-adobe" />
            <span>Smart Energy</span>
          </div>

          <h2 className="text-4xl lg:text-5xl mb-6 text-forest">
            Powering your home the right way.
          </h2>
          <p className="text-lg text-forest/70 font-sans mb-10 leading-relaxed">
            Transitioning to solar isn&apos;t just about placing panels on a
            roof. It&apos;s a holistic approach to energy management. We design
            systems that integrate flawlessly with your home&apos;s
            architecture.
          </p>

          <ul className="space-y-8 mb-10 w-full">
            {[
              {
                title: "Smart Energy Routing",
                desc: "Automatically direct power to where it's needed most in real-time.",
              },
              {
                title: "Integrated Battery Storage",
                desc: "Store excess energy during the day for nighttime use or grid outages.",
              },
              {
                title: "Aesthetic Integration",
                desc: "Low-profile mounts that preserve your home's premium curb appeal.",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-adobe/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm border border-adobe/15">
                  <CheckCircle weight="fill" className="w-6 h-6 text-adobe" />
                </div>
                <div>
                  <h4 className="font-sans font-medium text-xl text-forest mb-1">
                    {item.title}
                  </h4>
                  <p className="font-sans text-forest/70 max-w-sm">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <button className="bg-transparent border border-adobe/30 text-forest px-8 py-4 rounded-full text-lg font-medium hover:bg-adobe hover:text-cream hover:border-adobe transition-colors group flex items-center gap-2 shadow-sm">
            Discover Our Technology
            <ArrowRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

