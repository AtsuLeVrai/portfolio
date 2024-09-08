"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GithubIcon } from "@/components/GithubIcon";
import { Menu } from "@/components/Menu";
import { MenuButton } from "@/components/MenuButton";
import { ANTIQUE_WHITE, GITHUB_USER } from "@/lib/constants";
import { eczar, poppins } from "@/lib/fonts";
import profile from "@/public/profile.png";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={`${poppins.className} bg-olive min-h-screen flex flex-col`}>
            <header className="py-9 px-28 relative">
                <nav className="flex justify-between items-center">
                    <h1 className="text-antique-white">Tom Bialecki.</h1>
                    <Image src={profile} alt="profile" width={80} height={80} className="rounded-full" />
                    <MenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                </nav>
            </header>

            <AnimatePresence>{isMenuOpen && <Menu />}</AnimatePresence>

            <main className="flex-grow flex items-center justify-center">
                <h1
                    className={`${eczar.className} text-antique-white font-bold text-4xl md:text-5xl lg:text-6xl max-w-4xl px-4`}
                >
                    "The aim of art is to represent not the outward appearance of things, but their inward
                    significance." - Aristotle
                </h1>
            </main>

            <div className="fixed bottom-36 -left-12 text-antique-white text-lg uppercase -rotate-90">
                Made by my self
            </div>

            <footer className="py-8 px-8 flex justify-end">
                <Link href={`https://github.com/${GITHUB_USER}`} target="_blank">
                    <GithubIcon width={32} height={32} stroke={ANTIQUE_WHITE} />
                </Link>
            </footer>
        </div>
    );
}
