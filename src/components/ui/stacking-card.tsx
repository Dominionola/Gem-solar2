"use client";

import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";

interface ProjectData {
  title: string;
  description: string;
  link: string;
  color: string;
  num?: string;
  textColor?: string;
  accentColor?: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  num?: string;
  textColor?: string;
  accentColor?: string;
}

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  num = `0${i + 1}`,
  textColor = "text-cream",
  accentColor = "text-cream/60",
}: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[80vh] min-h-[500px] flex items-center justify-center sticky top-[10vh] px-4"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(12vh + ${i * 20}px)`,
        }}
        className="flex flex-col relative w-full max-w-[420px] sm:max-w-[460px] h-[480px] sm:h-[520px] rounded-[32px] p-6 sm:p-8 origin-top shadow-2xl border border-white/5 justify-between"
      >
        {/* Top Section: Image Card */}
        <div className="relative h-[200px] sm:h-[240px] w-full rounded-2xl overflow-hidden bg-forest/20 flex-shrink-0">
          <motion.div className="w-full h-full" style={{ scale: imageScale }}>
            <Image
              src={url}
              alt={title}
              width={600}
              height={400}
              className="w-full h-full object-cover origin-center"
            />
          </motion.div>
          {/* Subtle Overlay to match brand styling */}
          <div className="absolute inset-0 bg-forest/10 mix-blend-multiply" />
        </div>

        {/* Bottom Section: Text Content */}
        <div className="flex-1 flex flex-col justify-between mt-5">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className={`text-2xl font-bold tracking-tight ${textColor}`}>
                {title}
              </h3>
              <span className={`font-mono text-sm font-semibold tracking-wider ${accentColor}`}>
                {num}
              </span>
            </div>
            <p className={`text-sm leading-relaxed ${textColor}/80 line-clamp-3`}>
              {description}
            </p>
          </div>

          <div className="pt-4 flex items-center">
            <button className={`inline-flex items-center gap-2 text-sm font-semibold group ${textColor}`}>
              Get started
              <ArrowRight
                weight="bold"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface StackingCardsProps {
  projects: ProjectData[];
}

export default function StackingCards({ projects }: StackingCardsProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative w-full bg-transparent flex flex-col items-center">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.04;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            url={project.link}
            title={project.title}
            color={project.color}
            description={project.description}
            progress={scrollYProgress}
            range={[i * (1 / projects.length), 1]}
            targetScale={targetScale}
            num={project.num}
            textColor={project.textColor}
            accentColor={project.accentColor}
          />
        );
      })}
    </div>
  );
}
