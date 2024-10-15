"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useState } from "react";
import { GithubIcon, LinkedinIcon, Menu, MenuButton, SocialLink } from "@/components";
import { eczar, GITHUB_URL, LINKEDIN_URL } from "@/lib";
import profile from "@/public/profile.png";

export default function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, []);

    return (
        <div className="bg-olive min-h-screen flex flex-col">
            <header className="py-4 sm:py-6 md:py-9 px-4 sm:px-8 md:px-16 lg:px-28 relative">
                <nav className="flex justify-between items-center">
                    <motion.h1
                        className={`${eczar.className} text-antique-white text-xl sm:text-2xl md:text-3xl`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Tom Bialecki.
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src={profile}
                            alt="Profile picture of Tom Bialecki"
                            width={80}
                            height={80}
                            className="rounded-full"
                            placeholder="blur"
                        />
                    </motion.div>
                    <MenuButton isOpen={isMenuOpen} setIsOpen={toggleMenu} />
                </nav>
            </header>

            <AnimatePresence>{isMenuOpen && <Menu />}</AnimatePresence>

            <main className="flex-grow flex items-center justify-center p-4 sm:p-8">
                <motion.h2
                    className={`${eczar.className} text-antique-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-4xl text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    "The aim of art is to represent not the outward appearance of things, but their inward
                    significance." - Aristotle
                </motion.h2>
            </main>

            <footer className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 flex justify-end space-x-4">
                <SocialLink href={LINKEDIN_URL} Icon={LinkedinIcon} label="LinkedIn" />
                <SocialLink href={GITHUB_URL} Icon={GithubIcon} label="GitHub" />
            </footer>
        </div>
    );
}
