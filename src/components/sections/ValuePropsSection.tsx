"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import Image from "next/image";

/* ─── Spring Config ─────────────────────────────── */
const spring = { type: "spring", stiffness: 100, damping: 22 } as const;

/* ─── Stagger variants ──────────────────────────── */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: spring },
};

/* ─── Stats data ────────────────────────────────── */
const STATS = [
  { value: "94%", label: "avg. bill reduction after year one" },
  { value: "2.3×", label: "faster ROI vs. national average" },
  { value: "18k+", label: "architectures commissioned" },
];

/* ─── Animated counting stat ────────────────────── */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      variants={item}
      className="flex flex-col gap-1 min-w-0"
    >
      <span className="text-4xl lg:text-5xl font-bold tracking-tighter text-cream leading-none">
        {value}
      </span>
      <span className="text-xs text-cream/50 leading-snug uppercase tracking-widest max-w-[14ch]">
        {label}
      </span>
    </motion.div>
  );
}

/* ─── Spotlight border card ─────────────────────── */
function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current!.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function onMouseLeave() {
    animate(mouseX, -999, { duration: 0.4 });
    animate(mouseY, -999, { duration: 0.4 });
  }

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(320px circle at ${x}px ${y}px, rgba(162,179,155,0.12) 0%, transparent 70%)`
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative overflow-hidden rounded-3xl border border-white/[0.07] group ${className}`}
      style={{
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-3xl"
        style={{ background }}
      />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </motion.div>
  );
}

/* ─── Main Section ──────────────────────────────── */
export function ValuePropsSection() {
  return (
    <section className="pt-28 pb-0 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">

      {/* ── Editorial Header (left-aligned, not centered) ── */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-end"
      >
        <motion.div variants={item} className="md:col-span-6 lg:col-span-5">
          <p className="text-xs text-terracotta uppercase tracking-[0.2em] mb-4 font-medium">
            The Gem Solar Difference
          </p>
          <h2 className="text-4xl lg:text-[3.25rem] leading-none tracking-tighter text-cream font-bold">
            Built for the
            <br />
            <span className="text-sage">long arc</span> of energy.
          </h2>
        </motion.div>

        <motion.div
          variants={item}
          className="md:col-span-6 lg:col-span-7 flex flex-col justify-end gap-4"
        >
          <p className="text-cream/60 text-base leading-relaxed max-w-[52ch]">
            Every installation is engineered to perform across decades — not
            just seasons. We combine architectural discipline with precision
            energy systems so your home works harder and costs less.
          </p>
        </motion.div>
      </motion.div>

      {/* ── Stat Strip ───────────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-wrap gap-x-12 gap-y-8 mb-16 pl-0 border-t border-white/[0.07] pt-10"
      >
        {STATS.map((s) => (
          <AnimatedStat key={s.value} {...s} />
        ))}
      </motion.div>

      {/* ── Bento Grid ───────────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6"
      >

        {/* Left — large portrait card */}
        <motion.div
          variants={item}
          className="md:col-span-7 lg:col-span-8"
        >
          <SpotlightCard className="h-full min-h-[480px] cursor-pointer bg-forest/40">
            <div className="relative w-full h-full min-h-[480px] overflow-hidden rounded-3xl">
              <Image
                src="/images/energy_independence.webp"
                alt="Energy Independence — solar architecture at dusk"
                width={1200}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent" />
              {/* Copy */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-sage/80 mb-3 border border-sage/30 px-2.5 py-1 rounded-full">
                  Grid Independence
                </span>
                <h3 className="text-2xl lg:text-3xl text-cream font-bold tracking-tight leading-tight mb-2">
                  Energy Independence
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed max-w-[42ch]">
                  Generate, store, and dispatch your own power year-round —
                  insulated from grid volatility and rate hikes.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Right column — stacked two smaller cards */}
        <motion.div
          variants={container}
          className="md:col-span-5 lg:col-span-4 flex flex-col gap-5 lg:gap-6"
        >
          {/* Financial Savings */}
          <motion.div variants={item} className="flex-1">
            <SpotlightCard className="h-full min-h-[220px] cursor-pointer bg-forest/40 overflow-hidden">
              <div className="relative w-full h-full min-h-[220px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/financial_savings.webp"
                  alt="Financial Savings — precision energy graphs"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-terracotta/80 mb-2 border border-terracotta/30 px-2.5 py-1 rounded-full">
                    ROI-First
                  </span>
                  <h3 className="text-xl text-cream font-bold tracking-tight leading-tight mb-1">
                    Financial Savings
                  </h3>
                  <p className="text-cream/55 text-xs leading-relaxed">
                    Bills drop an average of 94% within 12 months of
                    commissioning.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Property Value card — no image, editorial text */}
          <motion.div variants={item} className="flex-1">
            <SpotlightCard className="h-full min-h-[220px] cursor-pointer p-7 bg-sage/10 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-sage/70 mb-5 border border-sage/30 px-2.5 py-1 rounded-full">
                  Asset Value
                </span>
                <h3 className="text-xl text-cream font-bold tracking-tight leading-tight mb-3">
                  Property Premium
                </h3>
                <p className="text-cream/55 text-xs leading-relaxed max-w-[30ch]">
                  Gem Solar-equipped properties appraise 11–17% higher.
                  Certified by three national valuation bodies.
                </p>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <span className="text-5xl font-bold tracking-tighter text-sage leading-none">
                  +14%
                </span>
                <span className="text-[10px] text-cream/30 uppercase tracking-widest text-right max-w-[10ch] leading-snug">
                  avg. appraisal lift
                </span>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>

        {/* Bottom — full-width cinematic eco strip */}
        <motion.div variants={item} className="md:col-span-12">
          <SpotlightCard className="w-full cursor-pointer bg-forest/40 overflow-hidden">
            <div className="relative w-full h-[320px] lg:h-[380px] overflow-hidden rounded-3xl">
              <Image
                src="/images/download (33)_rotated.webp"
                alt="Eco-Impact — misty forest landscape"
                width={1600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              {/* Left-to-right gradient so copy stays legible */}
              <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/50 to-transparent" />

              {/* Glass editorial panel — left side */}
              <div
                className="absolute top-0 left-0 bottom-0 w-full max-w-[440px] flex flex-col justify-center px-10 py-8"
                style={{
                  backdropFilter: "blur(0px)",
                }}
              >
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-sage/80 mb-5 border border-sage/30 px-2.5 py-1 rounded-full w-fit">
                  Climate Commitment
                </span>
                <h3 className="text-3xl lg:text-4xl text-cream font-bold tracking-tighter leading-tight mb-4">
                  Eco-Impact
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed max-w-[38ch]">
                  Each panel removes an estimated 1.2 tonnes of CO₂ annually.
                  At scale, Gem Solar installations offset the footprint of a
                  mid-sized city block every four years.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="text-3xl font-bold text-cream tracking-tight">
                    4.1M
                  </span>
                  <span className="text-[10px] text-cream/40 uppercase tracking-widest leading-snug max-w-[10ch]">
                    tonnes CO₂ offset to date
                  </span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
