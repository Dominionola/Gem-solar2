"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WhatsappLogo, X } from "@phosphor-icons/react";

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppWidget({
  phoneNumber = "2348051307748",
  message = "Hello Gem Solar, I have a question about your services!",
}: WhatsAppWidgetProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session (browser-only)
    const dismissed = sessionStorage.getItem("gem_solar_whatsapp_dismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show tooltip after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(false);
    setIsDismissed(true);
    sessionStorage.setItem("gem_solar_whatsapp_dismissed", "true");
  };

  const handleChatOpen = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 flex flex-col items-end">
      
      {/* Delayed Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 bg-cream text-forest border border-forest/10 rounded-2xl p-4 shadow-2xl max-w-[280px] relative pointer-events-auto cursor-pointer"
            onClick={handleChatOpen}
          >
            {/* Arrow helper */}
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-cream border-r border-b border-forest/10 rotate-45" />
            
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-forest/40 hover:text-forest/80 transition-colors p-1"
              aria-label="Dismiss message"
            >
              <X size={14} weight="bold" />
            </button>
            
            <div className="pr-4">
              <span className="block text-xs uppercase tracking-wider text-terracotta font-semibold mb-1 font-sans">
                Support Online
              </span>
              <p className="text-sm text-forest/80 font-sans leading-relaxed font-medium">
                Have questions about solar? Let's chat on WhatsApp.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleChatOpen}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center bg-forest text-cream rounded-full shadow-2xl cursor-pointer relative border border-white/10 group select-none h-14 w-auto px-4 min-w-[56px]"
        style={{
          boxShadow: "0 10px 30px -10px rgba(45, 58, 48, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Pulsing notification dot (only active before tooltip is dismissed) */}
        {!showTooltip && !isDismissed && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-terracotta rounded-full border-2 border-white flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-terracotta animate-ping opacity-75" />
          </span>
        )}

        <div className="flex items-center justify-center gap-2">
          <WhatsappLogo 
            weight={isHovered ? "fill" : "regular"} 
            className="w-6 h-6 text-cream transition-colors duration-300 group-hover:text-green-400" 
          />
          
          <AnimatePresence initial={false}>
            {isHovered && (
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden whitespace-nowrap text-sm font-sans font-semibold tracking-tight text-cream"
              >
                Chat with us
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

    </div>
  );
}
