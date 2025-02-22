"use client";

import {
  AlertTriangle,
  Code2,
  Construction,
  Loader2,
  Mail,
  Monitor,
  Rocket,
  Terminal,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";

const GLITCH_TEXTS = [
  "LOADING PORTFOLIO...",
  "INITIALIZING PROJECTS...",
  "COMPILING EXPERIENCE...",
  "DEPLOYING SKILLS...",
  "CONNECTING IDEAS...",
];

const NAVIGATION_LINKS = [
  { href: "/projects", label: "PROJECTS", icon: Code2 },
  { href: "/skills", label: "SKILLS", icon: Wrench },
  { href: "/about", label: "ABOUT", icon: Rocket },
  { href: "/contact", label: "CONTACT", icon: Mail },
];

export default function Home() {
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
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-black font-mono">
      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 opacity-20" />

      {/* Animated grid */}
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
        {/* Terminal status */}
        <div className="-top-12 absolute right-0 font-mono text-green-500 text-sm">
          <Terminal className="mr-2 inline-block" size={16} />
          <span>{glitchText}</span>
        </div>

        {/* Title Card */}
        <BrutalCard className="mb-8">
          <h1 className="whitespace-pre-line font-bold text-6xl text-white md:text-8xl">
            PORTFOLIO
          </h1>
          <div className="mt-4 flex items-center">
            <Monitor className="mr-2 h-6 w-6 text-purple-400" />
            <p className="text-purple-400 text-xl">FULL STACK DEVELOPER</p>
          </div>
        </BrutalCard>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {NAVIGATION_LINKS.map(({ href, label, icon: Icon }) => (
            <Link href={href} key={href} className="block">
              <BrutalCard className="group h-full cursor-pointer text-center">
                <Icon className="mx-auto mb-2 h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white">{label}</p>
                <div className="mt-2 flex items-center justify-center text-red-400 text-xs">
                  <Construction className="mr-1 h-3 w-3" />
                  IN PROGRESS
                </div>
              </BrutalCard>
            </Link>
          ))}
        </div>

        {/* Animated icons */}
        <div className="mt-12 flex justify-center gap-8">
          <Construction className="h-12 w-12 animate-bounce text-white" />
          <Wrench
            className="h-12 w-12 animate-spin text-white"
            style={{ animationDuration: "3s" }}
          />
          <AlertTriangle className="h-12 w-12 animate-pulse text-white" />
          <Loader2 className="h-12 w-12 animate-spin text-white" />
        </div>
      </div>

      {/* Glitch overlay */}
      {showGlitch && (
        <div
          className="pointer-events-none fixed inset-0 bg-white opacity-10 mix-blend-difference"
          style={{
            backgroundImage:
              'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEX///8AAABhYWFSUlI2NjYkJCQVFRUHBwd7sFHvAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAN0lEQVQ4jWNgQAP8/PwMjIwMDAz4ASMjAwMjfgCVZ8BvPDoDrnDCAZhwg5oRzeHoXkX3G34vAwAcQg0GNn8QSAAAAABJRU5ErkJggg==")',
          }}
        />
      )}

      <style jsx={true} global={true}>{`
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
}
