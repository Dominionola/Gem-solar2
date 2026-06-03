"use client";

import { motion } from "motion/react";
import { Leaf } from "@phosphor-icons/react";
import { Navbar } from "@/components/layout/Navbar";
import Image from "next/image";

// Premium spring config
const springConfig = { type: "spring", stiffness: 100, damping: 20 } as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springConfig,
  },
};

export function HeroSection() {
  return (
    <div className="p-3 md:p-6 pb-0">
      <section className="relative min-h-[90vh] md:min-h-[85vh] rounded-[32px] md:rounded-[48px] overflow-hidden bg-forest flex flex-col justify-between">
          {/* Image & Overlays */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/images/hero-solar.webp"
              alt="Solar panel installation in Nigeria — Gem Solar residential rooftop system"
              width={1920}
              height={1080}
              priority
              className="w-full h-full object-cover origin-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-forest/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/30 to-forest/40"></div>

          {/* Integrated Navigation */}
          <Navbar />

          {/* Hero Content (Grid Layout) */}
          <div className="relative z-10 px-6 lg:px-12 pb-10 flex flex-col justify-end flex-grow">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"
            >
              {/* Headline & CTA */}
              <div className="lg:col-span-7 2xl:col-span-8">
                {/* Visible geo badge — SEO-indexable location signal */}
                <motion.div variants={itemVariants} className="mb-6">
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-sage border border-sage/30 px-3.5 py-1.5 rounded-full backdrop-blur-sm bg-forest/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
                    Solar Installation — Lagos · Ibadan · Abuja · Nigeria
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-cream font-sans font-bold mb-4 max-w-3xl overflow-hidden flex flex-col gap-2">
                  <motion.div variants={itemVariants}>Clean future</motion.div>
                  <motion.div variants={itemVariants}>ready for you.</motion.div>
                </h1>

                {/* Geo-keyword subtitle — indexable by Google */}
                <motion.p
                  variants={itemVariants}
                  className="text-cream/60 font-sans text-base md:text-lg mb-8 max-w-md leading-relaxed"
                >
                  Nigeria&apos;s trusted solar panel installation company. We design, supply, and install residential &amp; commercial solar systems across Nigeria.
                </motion.p>
                
                <motion.div variants={itemVariants}>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={springConfig}
                    className="text-cream px-8 py-3.5 rounded-full text-lg font-medium hover:bg-cream hover:text-forest transition-colors backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] group"
                  >
                    Learn more about clean energy
                  </motion.button>
                </motion.div>
              </div>

              {/* Trust Bar embedded in Hero */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-5 2xl:col-span-4 flex flex-col lg:items-end text-cream pb-2"
              >
                <p className="text-[10px] tracking-[0.2em] uppercase font-bold mb-5 opacity-70 border-b border-cream/20 pb-2 inline-block">
                  Solar Energy Partners
                </p>
                <div className="flex flex-wrap justify-start lg:justify-end gap-6 md:gap-10 items-center opacity-90">
                  <motion.div 
                    whileHover={{ y: -3 }}
                    transition={springConfig}
                    className="flex items-center gap-2 font-sans text-xl font-medium tracking-tight cursor-default"
                  >
                    <span className="font-sans font-bold">ΛVSO</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -3 }}
                    transition={springConfig}
                    className="flex items-center gap-2 font-sans text-lg cursor-default"
                  >
                    <Leaf weight="fill" className="w-5 h-5" />{" "}
                    <span className="font-medium leading-none text-sm text-left">
                      Luna
                      <br />
                      Electrics
                    </span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -3 }}
                    transition={springConfig}
                    className="flex items-center gap-2 font-sans text-lg font-bold cursor-default"
                  >
                    <div className="w-4 h-4 rounded-full border-2 border-cream"></div>{" "}
                    OKAL HOME
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
  );
}
