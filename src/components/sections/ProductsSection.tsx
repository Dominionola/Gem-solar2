"use client";

import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";

/* ─── Spring ─────────────────────────────────────── */
const spring = { type: "spring", stiffness: 90, damping: 22 } as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: spring },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

/* ─── Reusable spec row ──────────────────────────── */
function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3 border-b border-forest/10 last:border-0">
      <span className="text-sm text-forest/50 font-medium tracking-wide">{label}</span>
      <span className="text-sm text-forest font-semibold tabular-nums">{value}</span>
    </div>
  );
}

/* ─── Pill tag ───────────────────────────────────── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[10px] uppercase tracking-[0.18em] text-forest/50 border border-forest/20 px-2.5 py-1 rounded-full font-medium mb-5">
      {children}
    </span>
  );
}

/* ─── Animated CTA link ──────────────────────────── */
function CTALink({ label }: { label: string }) {
  return (
    <motion.button
      whileHover={{ x: 4 }}
      transition={spring}
      className="flex items-center gap-1.5 text-sm text-forest font-semibold tracking-wide group mt-auto pt-6"
    >
      {label}
      <ArrowRight
        weight="bold"
        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
      />
    </motion.button>
  );
}

/* ─── Section header ─────────────────────────────── */
function SectionHeader() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="mb-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end"
    >
      <motion.div variants={fadeUp} className="md:col-span-6">
        <p className="text-[10px] uppercase tracking-[0.22em] text-terracotta font-medium mb-3">
          Our Hardware
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-forest leading-none">
          Products built
          <br />
          to last 30 years.
        </h2>
      </motion.div>
      <motion.div variants={fadeUp} className="md:col-span-6 lg:col-span-5 lg:col-start-8">
        <p className="text-forest/55 text-base leading-relaxed max-w-[48ch]">
          Every unit we commission is sourced from tier-1 manufacturers and
          rated for three decades of continuous output — backed by full
          manufacturer warranties.
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Section ───────────────────────────────── */
export function ProductsSection() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <SectionHeader />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-col gap-5"
      >

        {/* ── Solar Cells — wide hero card ─────────── */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -4 }}
          transition={spring}
          className="bg-[#EAE3D2] rounded-[32px] overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[420px] group"
        >
          {/* Content pane */}
          <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-between">
            <div className="flex flex-col">
              <Tag>Solar Panels</Tag>
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter text-forest leading-tight mb-3">
                Solar cells
              </h3>
              <p className="text-forest/55 text-sm leading-relaxed max-w-[36ch]">
                Harvest more sunlight per square metre with high-density
                monocrystalline cells — engineered for northern climates and
                low-light conditions.
              </p>
            </div>

            {/* Spec table */}
            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-forest/40 mb-2 font-medium">
                Available models
              </p>
              <div>
                <SpecRow label="DMEGC 440W" value="1762 × 1134 mm" />
                <SpecRow label="Longi 430W" value="1722 × 1134 mm" />
                <SpecRow label="Longi 530W" value="2093 × 1134 mm" />
              </div>
              <CTALink label="Our solar cells" />
            </div>
          </div>

          {/* Image pane */}
          <div className="md:col-span-7 relative overflow-hidden min-h-[280px] md:min-h-0">
            <Image
              src="/images/solar_panels.webp"
              alt="High-efficiency solar panel array"
              width={1200}
              height={800}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* Left-edge fade to blend with card bg */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#EAE3D2] via-[#EAE3D2]/20 to-transparent w-1/3" />
          </div>
        </motion.div>

        {/* ── Bottom row — Charging box + Battery ──── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Charging Box */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={spring}
            className="bg-[#EAE3D2] rounded-[32px] overflow-hidden flex flex-col group"
          >
            {/* Image — contained top strip */}
            <div className="relative h-56 overflow-hidden bg-[#E2D9C4] flex-shrink-0">
              <Image
                src="/images/charging box.webp"
                alt="EV Charging Box"
                width={800}
                height={600}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EAE3D2]/60" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
              <Tag>EV Charging</Tag>
              <h3 className="text-2xl lg:text-3xl font-bold tracking-tighter text-forest leading-tight mb-2">
                Charging box
              </h3>
              <p className="text-forest/55 text-sm leading-relaxed max-w-[36ch]">
                Charge your electric vehicle overnight at home — safely, at
                full grid speed, with a unit rated for outdoor exposure.
              </p>

              <div className="mt-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-forest/40 mb-2 font-medium">
                  Flagship unit
                </p>
                <SpecRow label="Zaptec Go" value="up to 22 kW" />
              </div>

              <CTALink label="Our charging box" />
            </div>
          </motion.div>

          {/* Battery */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={spring}
            className="bg-[#EAE3D2] rounded-[32px] overflow-hidden flex flex-col group"
          >
            {/* Image — contained top strip */}
            <div className="relative h-56 overflow-hidden bg-[#E2D9C4] flex-shrink-0">
              <Image
                src="/images/battry.webp"
                alt="Home Battery Storage Unit"
                width={800}
                height={600}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EAE3D2]/60" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
              <Tag>Energy Storage</Tag>
              <h3 className="text-2xl lg:text-3xl font-bold tracking-tighter text-forest leading-tight mb-2">
                Battery
              </h3>
              <p className="text-forest/55 text-sm leading-relaxed max-w-[36ch]">
                Store surplus solar energy and dispatch it on demand —
                protecting your home from grid outages and peak tariffs.
              </p>

              <div className="mt-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-forest/40 mb-2 font-medium">
                  Available units
                </p>
                <SpecRow label="Huawei Luna" value="LUNA2000 series" />
                <SpecRow label="Growatt APX" value="LFP Cell" />
                <SpecRow label="Sungrow" value="SBR096" />
              </div>

              <CTALink label="Our batteries" />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
