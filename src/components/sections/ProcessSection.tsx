"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import StackingCards from "@/components/ui/stacking-card";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of the entire container (Desktop only)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to the 4 steps
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let step = Math.floor(latest * 4);
    if (step >= 4) step = 3;
    if (step < 0) step = 0;

    if (step !== activeStep) {
      setActiveStep(step);
    }
  });

  const handleStepClick = (idx: number) => {
    setActiveStep(idx);
    
    if (containerRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
      const totalScrollable = containerRef.current.clientHeight - window.innerHeight;
      
      // Only force scroll jump if the container is actually scrollable (Desktop h-[300vh])
      if (totalScrollable > 0) {
        // Target the center of the step's scroll zone (0.125, 0.375, 0.625, 0.875)
        const targetProgress = (idx * 0.25) + 0.125;
        const scrollTo = containerTop + (totalScrollable * targetProgress);
        window.scrollTo({ top: scrollTo, behavior: "smooth" });
      }
    }
  };

  const steps = [
    {
      num: "01",
      title: "Make an appointment",
      description:
        "Fill in the contact form and we will call you and book a meeting. Registration of interest is free of charge and no order is required.",
    },
    {
      num: "02",
      title: "Free home visit",
      description:
        "Our engineers will conduct a comprehensive evaluation of your roof, capturing precise measurements for the custom design.",
    },
    {
      num: "03",
      title: "Installation",
      description:
        "Expert technicians arrive to seamlessly mount the panels and connect the inverter, prioritizing cleanliness and safety.",
    },
    {
      num: "04",
      title: "Support",
      description:
        "Once inspections are passed, you flick the switch. Enjoy clean, renewable energy and watch your savings grow.",
    },
  ];

  const visuals = [
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop",
      alt: "Consultation",
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356f78?q=80&w=2670&auto=format&fit=crop",
      alt: "Home Visit",
    },
    {
      src: "https://images.unsplash.com/photo-1508514177221-188b1c7d1f17?q=80&w=2670&auto=format&fit=crop",
      alt: "Installation",
    },
    {
      src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2670&auto=format&fit=crop",
      alt: "Support",
    },
  ];

  const stackingProjects = [
    {
      title: "Make an appointment",
      description: "Fill in the contact form and we will call you and book a meeting. Registration of interest is free of charge and no order is required.",
      link: visuals[0].src,
      color: "#2D3A30", // Forest Green
      num: "01",
      textColor: "text-cream",
      accentColor: "text-cream/60",
    },
    {
      title: "Free home visit",
      description: "Our engineers will conduct a comprehensive evaluation of your roof, capturing precise measurements for the custom design.",
      link: visuals[1].src,
      color: "#6E3822", // Adobe Deep
      num: "02",
      textColor: "text-cream",
      accentColor: "text-cream/60",
    },
    {
      title: "Installation",
      description: "Expert technicians arrive to seamlessly mount the panels and connect the inverter, prioritizing cleanliness and safety.",
      link: visuals[2].src,
      color: "#8FA38E", // Sage Green
      num: "03",
      textColor: "text-forest", // Dark forest text on sage green for readability
      accentColor: "text-forest/60",
    },
    {
      title: "Support",
      description: "Once inspections are passed, you flick the switch. Enjoy clean, renewable energy and watch your savings grow.",
      link: visuals[3].src,
      color: "#A65D43", // Terracotta
      num: "04",
      textColor: "text-cream",
      accentColor: "text-cream/60",
    },
  ];

  return (
    <section id="process" className="bg-adobe">
      {/* Desktop Layout (lg and above) */}
      <div ref={containerRef} className="relative w-full h-[300vh] hidden lg:block">
        
        {/* Sticky viewport frame */}
        <div className="lg:sticky lg:top-0 lg:h-[100vh] w-full flex items-center justify-center py-12 lg:py-16 px-6 lg:px-12">
          
          {/* Inner Grid */}
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative">
            
            {/* LEFT SIDE (Accordion) */}
            <div className="lg:col-span-5 flex flex-col z-10 w-full">
              <h2 className="font-sans text-4xl lg:text-5xl font-medium text-cream mb-8 leading-tight tracking-tight">
                Four simple steps to get solar cells from Gem Solar.
              </h2>
              
              <div className="flex flex-col">
                {steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleStepClick(idx)}
                      className={`py-4 lg:py-5 border-b border-cream/15 cursor-pointer transition-opacity duration-300 ${
                        idx === steps.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <h3
                        className={`font-sans text-2xl lg:text-3xl font-medium tracking-tight transition-colors duration-500 flex gap-4 ${
                          isActive ? "text-cream" : "text-cream/30"
                        }`}
                      >
                        <span>{step.num}</span>
                        <span>{step.title}</span>
                      </h3>
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isActive ? "max-h-[200px] mt-4 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-cream/75 text-lg leading-relaxed ml-[3rem]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6">
                <button className="bg-cream text-adobe rounded-full px-8 py-4 font-sans text-lg font-medium hover:bg-cream/90 transition-colors shadow-sm inline-flex items-center font-semibold">
                  Get started
                </button>
              </div>
            </div>

            {/* RIGHT SIDE (Media) */}
            <div className="lg:col-span-7 hidden lg:flex items-center justify-center w-full">
              <div className="w-full aspect-[4/3] max-h-[400px] lg:max-h-[480px] rounded-3xl overflow-hidden relative shadow-2xl bg-adobe-deep/30">
                {visuals.map((vis, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{
                      opacity: activeStep === idx ? 1 : 0,
                      scale: activeStep === idx ? 1 : 1.05,
                      pointerEvents: activeStep === idx ? "auto" : "none",
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={vis.src}
                      alt={vis.alt}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover origin-center"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Layout (< lg) */}
      <div className="block lg:hidden py-16 px-4">
        <div className="max-w-md mx-auto mb-10 text-center">
          <h2 className="font-sans text-3xl font-medium text-cream leading-tight tracking-tight">
            Four simple steps to get solar cells from Gem Solar.
          </h2>
        </div>
        <StackingCards projects={stackingProjects} />
      </div>
    </section>
  );
}
