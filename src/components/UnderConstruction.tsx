"use client";

import {
  AlertTriangle,
  Construction,
  Loader2,
  Terminal,
  Wrench,
} from "lucide-react";
import {
  Inter,
  Roboto_Mono,
  Space_Grotesk,
  Space_Mono,
} from "next/font/google";
import type React from "react";
import { useEffect, useState } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const GLITCH_TEXTS = [
  "LOADING...",
  "INITIALIZING...",
  "COMPILING...",
  "DEPLOYING...",
  "RECONSTRUCTING...",
  "SYSTEM BOOT...",
  "CONNECTING...",
];

export default function UnderConstruction() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showGlitch, setShowGlitch] = useState(false);
  const [glitchText, setGlitchText] = useState(GLITCH_TEXTS[0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setShowGlitch(true);
      setGlitchText(
        GLITCH_TEXTS[Math.floor(Math.random() * GLITCH_TEXTS.length)],
      );
      setTimeout(() => setShowGlitch(false), 150);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  // Brutal card component with enhanced distortion effects
  const BrutalCard: React.FC<{
    children: React.ReactNode;
    className?: string;
  }> = ({ children, className = "" }) => (
    <div
      className={`transform border-4 border-white bg-black bg-opacity-50 p-6 transition-all duration-300 hover:scale-105 ${showGlitch ? "translate-x-2 skew-x-3" : ""}
        ${className}
      `}
      style={{
        clipPath: showGlitch
          ? "polygon(0 0, 100% 0, 98% 100%, 2% 100%)"
          : undefined,
        boxShadow: `${showGlitch ? "10px" : "5px"} ${showGlitch ? "10px" : "5px"} 0px white`,
      }}
    >
      {children}
    </div>
  );

  return (
    <div
      className={`flex min-h-screen items-center justify-center overflow-hidden bg-black ${inter.className}`}
    >
      {/* Mars Discord Nitro inspired gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 opacity-20" />

      {/* Animated brutal grid */}
      <div
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "2rem 2rem",
          transform: `rotate(${Math.sin(Date.now() / 10000) * 2}deg)`,
        }}
      />

      {/* Scanlines effect */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "repeating-linear-gradient(transparent 0px, transparent 1px, rgba(255, 255, 255, 0.03) 2px, transparent 3px)",
          backgroundSize: "100% 3px",
          animation: "scanline 10s linear infinite",
        }}
      />

      {/* Main container with perspective effect */}
      <div
        className="relative mx-4 w-full max-w-4xl transform transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${position.y}deg) rotateY(${position.x}deg)`,
        }}
      >
        {/* Floating terminal */}
        <div
          className={`-top-12 absolute right-0 font-mono text-green-500 text-sm ${spaceMono.className}`}
        >
          <Terminal className="mr-2 inline-block" size={16} />
          <span>{glitchText}</span>
        </div>

        {/* Brutal title */}
        <BrutalCard className="mb-8">
          <h1
            className={`whitespace-pre-line font-bold text-6xl text-white md:text-8xl ${spaceGrotesk.className}`}
          >
            WEBSITE UNDER CONSTRUCTION
          </h1>
        </BrutalCard>

        {/* Brutal icons */}
        <div className="mb-12 flex justify-center gap-8">
          <Construction className="h-12 w-12 animate-bounce text-white" />
          <Wrench
            className="h-12 w-12 animate-spin text-white"
            style={{ animationDuration: "3s" }}
          />
          <AlertTriangle className="h-12 w-12 animate-pulse text-white" />
          <Loader2 className="h-12 w-12 animate-spin text-white" />
        </div>

        {/* Brutal message */}
        <BrutalCard>
          <p
            className={`mb-4 text-2xl text-white uppercase tracking-wider ${spaceGrotesk.className}`}
          >
            WE'RE WORKING HARD
          </p>
          <p className={`text-red-400 text-xl ${robotoMono.className}`}>
            COME BACK SOON TO SEE THE MAGIC HAPPEN
          </p>
        </BrutalCard>

        {/* Noise effect */}
        {showGlitch && (
          <div
            className="pointer-events-none fixed inset-0 bg-white opacity-10 mix-blend-difference"
            style={{
              backgroundImage:
                'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEX///8AAABhYWFSUlI2NjYkJCQVFRUHBwd7sFHvAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAN0lEQVQ4jWNgQAP8/PwMjIwMDAz4ASMjAwMjfgCVZ8BvPDoDrnDCAZhwg5oRzeHoXkX3G34vAwAcQg0GNn8QSAAAAABJRU5ErkJggg==")',
            }}
          />
        )}

        {/* CSS for scanline animation */}
        <style jsx={true} global={true}>{`
          @keyframes scanline {
            0% { transform: translateY(0); }
            100% { transform: translateY(100vh); }
          }
        `}</style>
      </div>
    </div>
  );
}
