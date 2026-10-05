"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Floating bottom-right button that appears once the visitor has scrolled past the first screen. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smoothness comes from the root's scroll-smooth class, which globals.css disables for reduced motion.
  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        "glass-nav fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground shadow-soft transition-all duration-300 hover:border-primary hover:text-primary sm:bottom-8 sm:right-8",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp size={18} aria-hidden />
    </button>
  );
}
