"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";

export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setGlow({ x, y });
  };

  const projectsActive = activeHash === "#projects";

  return (
    <motion.header
      className="fixed top-5 left-1/2 z-50 w-[min(92vw,48rem)] -translate-x-1/2"
      initial={{ opacity: 0, y: -18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
    >
      <nav
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
        className={`flex items-center justify-between rounded-full border border-white/30 bg-white/45 px-6 py-3 backdrop-blur-xl transition-all duration-200 ease-out ${
          isHovering
            ? "scale-[1.015] shadow-[0_16px_32px_-16px_rgba(17,24,39,0.62)]"
            : "shadow-[0_12px_28px_-16px_rgba(17,24,39,0.55)]"
        }`}
        style={{
          backgroundImage: `radial-gradient(150px circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.34), rgba(255,255,255,0) 70%)`,
        }}
      >
        <Link href="/" className="text-sm font-semibold sm:text-base">
          Ayo.dev
        </Link>

        <div className="flex flex-wrap gap-4 text-sm font-medium sm:gap-6">
          <Link
            href="#projects"
            aria-current={projectsActive ? "page" : undefined}
            className={`rounded-full px-3 py-1 transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-black ${
              projectsActive
                ? "bg-black text-white"
                : "hover:bg-white/55 hover:text-gray-700"
            }`}
          >
            Projects
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
