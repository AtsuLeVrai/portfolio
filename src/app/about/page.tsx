"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { useCallback, useState } from "react";
import { Menu, MenuButton } from "@/components";

type ActiveSectionState = "intro" | "skills" | null;

const sectionVariants = {
    inactive: { opacity: 0.7, scale: 0.98, transition: { duration: 0.3 } },
    active: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

type SectionProps = {
    readonly content: ReactNode;
    readonly isActive: boolean;
    onMouseEnter(this: void): void;
    onMouseLeave(this: void): void;
    readonly title: string;
};

function Section({ title, content, isActive, onMouseEnter, onMouseLeave }: SectionProps) {
    return (
        <motion.section
            className="mb-8 p-4 border-4 border-antique-white cursor-pointer"
            variants={sectionVariants}
            initial="inactive"
            animate={isActive ? "active" : "inactive"}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <h2 className="text-3xl md:text-4xl mb-4 font-bold">{title}</h2>
            {content}
        </motion.section>
    );
}

export default function AboutPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeSection, setActiveSection] = useState<ActiveSectionState>(null);

    const handleMouseMove = useCallback((event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    }, []);

    const handleSectionHover = useCallback((section: ActiveSectionState) => {
        setActiveSection(section);
    }, []);

    return (
        <div className="bg-olive min-h-screen overflow-hidden relative p-4 md:p-8" onMouseMove={handleMouseMove}>
            <header className="mb-12">
                <nav className="flex justify-between items-center">
                    <motion.h1
                        className="text-antique-white text-5xl md:text-7xl lg:text-9xl font-bold cursor-pointer select-none"
                        style={{
                            textShadow: "4px 4px 0px #000000, -2px -2px 0px #ffffff",
                            WebkitTextStroke: "1px black",
                        }}
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        About Me
                    </motion.h1>
                    <MenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                </nav>
            </header>

            <main className="text-antique-white max-w-3xl mx-auto">
                <Section
                    title="Who Am I?"
                    content={
                        <p className="text-lg md:text-xl">
                            I'm a passionate developer with a love for brutalist design and interactive web experiences.
                            My goal is to create unique digital spaces that challenge the status quo and push the
                            boundaries of web design.
                        </p>
                    }
                    isActive={activeSection === "intro"}
                    onMouseEnter={() => handleSectionHover("intro")}
                    onMouseLeave={() => handleSectionHover(null)}
                />

                <Section
                    title="Skills"
                    content={
                        <ul className="text-lg md:text-xl list-disc list-inside">
                            <li>React & Next.js</li>
                            <li>TypeScript</li>
                            <li>Brutalist Web Design</li>
                            <li>Interactive UI/UX</li>
                            <li>Performance Optimization</li>
                            <li>Responsive Design</li>
                        </ul>
                    }
                    isActive={activeSection === "skills"}
                    onMouseEnter={() => handleSectionHover("skills")}
                    onMouseLeave={() => handleSectionHover(null)}
                />
            </main>

            <motion.div
                className="fixed left-4 bottom-4 text-antique-white text-base md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                X: {mousePosition.x} | Y: {mousePosition.y}
            </motion.div>

            <AnimatePresence>{isMenuOpen && <Menu />}</AnimatePresence>
        </div>
    );
}
