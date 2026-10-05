"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import { AnimatePresence, SlideDown } from "@/components/ui/motion";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

// Single-page site: every link targets a homepage section.
const navLinks = [
  { path: "/#top", label: "Home", section: null },
  { path: "/#services", label: "Services", section: "services" },
  { path: "/#about", label: "About", section: "about" },
  { path: "/#contact", label: "Contact", section: "contact" },
];

const sectionIds = ["services", "about", "contact"];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
      // The last section whose top has passed 40% of the viewport is the current one.
      let current: string | null = null;
      for (const id of sectionIds) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= window.innerHeight * 0.4) current = id;
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  const isActive = (section: string | null) => pathname === "/" && activeSection === section;

  // On the homepage the bar sits transparently over the hero photo until scrolled.
  const overlay = pathname === "/" && !scrolled && !isOpen;
  const iconButton = overlay
    ? "border-ink-foreground/30 bg-ink-foreground/10 text-ink-foreground backdrop-blur-md hover:bg-ink-foreground/20"
    : "border-border bg-card text-muted-foreground hover:text-foreground";

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        overlay
          ? "border-transparent bg-transparent"
          : scrolled
            ? "glass-nav border-border shadow-soft"
            : "border-border bg-background"
      )}
    >
      <div className="site-shell flex min-h-[4.75rem] items-center gap-5">
        <Link href="/" className="shrink-0" aria-label="MukaroCore home">
          <BrandLogo size="nav" tone={overlay ? "light" : "auto"} priority />
        </Link>

        <div className="hidden lg:flex flex-1 items-center justify-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                "group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors",
                overlay
                  ? isActive(link.section)
                    ? "text-ink-foreground"
                    : "text-ink-foreground/75 hover:text-ink-foreground"
                  : isActive(link.section)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span
                className={cn(
                  "border-b border-transparent pb-0.5",
                  overlay ? "group-hover:border-ink-foreground/40" : "group-hover:border-foreground/30"
                )}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={toggle}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
              iconButton
            )}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <Button asChild className="hidden md:inline-flex">
            <Link href="/#contact">
              Start a Project <ArrowUpRight size={16} />
            </Link>
          </Button>

          <button
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden",
              iconButton
            )}
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <SlideDown className="lg:hidden border-t border-border bg-background">
            <div id="mobile-menu" className="site-shell py-4">
              <div className="route-list">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between gap-4 text-sm"
                  >
                    <span className="text-muted-foreground">0{index + 1}</span>
                    <span className={cn("ml-auto", isActive(link.section) ? "text-primary" : "text-foreground")}>
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
              <Button asChild className="mt-4 w-full">
                <Link href="/#contact" onClick={() => setIsOpen(false)}>
                  Start a Project <ArrowUpRight size={16} />
                </Link>
              </Button>
            </div>
          </SlideDown>
        )}
      </AnimatePresence>
    </nav>
  );
}
