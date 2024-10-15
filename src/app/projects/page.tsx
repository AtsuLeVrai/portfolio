"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Code, ExternalLink, List } from "lucide-react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { useCallback, useState } from "react";
import { Menu, MenuButton } from "@/components";
import { GITHUB_URL } from "@/lib";
import nyxjs from "@/public/nyx.js.jpg";

type ProjectCardProps = {
    readonly description: string;
    readonly details: {
        features: string[];
        language: string;
        last_updated: string;
    };
    readonly image: StaticImageData;
    readonly name: string;
    readonly url: string;
};

const PROJECTS: ProjectCardProps[] = [
    {
        name: "Nyx.js - [WIP]",
        description: "A Discord API wrapper",
        image: nyxjs,
        url: `${GITHUB_URL}/nyx.js`,
        details: {
            language: "TypeScript",
            last_updated: new Date(1_728_993_388_000).toLocaleDateString(),
            features: ["Easy-to-use interface", "High performance", "Extensive documentation", "TypeScript support"],
        },
    },
];

function ProjectCard({ project }: { readonly project: ProjectCardProps }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = useCallback(() => {
        setIsExpanded((prev) => !prev);
    }, []);

    return (
        <motion.div
            className="flex flex-col bg-olive relative overflow-hidden cursor-pointer shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            layout
            transition={{ duration: 0.2 }}
        >
            <div onClick={toggleExpand} className="w-full h-96 relative">
                <Image src={project.image} alt={project.name} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-olive to-transparent">
                    <h2 className="text-antique-white text-3xl md:text-4xl font-bold transform -rotate-2 bg-olive py-2 px-4 inline-block">
                        {project.name}
                    </h2>
                    <p className="text-antique-white text-xl md:text-2xl font-mono bg-olive py-1 px-2 inline-block transform rotate-1">
                        {project.description}
                    </p>
                </div>
                <div className="absolute inset-0 border-8 border-antique-white pointer-events-none" />
            </div>
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-olive text-antique-white p-6 overflow-hidden"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">Project Details</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Code className="mr-3 flex-shrink-0" size={24} />
                                <p className="text-lg md:text-xl">
                                    <strong>Language:</strong> {project.details.language}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="mr-3 flex-shrink-0" size={24} />
                                <p className="text-lg md:text-xl">
                                    <strong>Last Updated:</strong> {project.details.last_updated}
                                </p>
                            </div>
                            <div className="flex items-start">
                                <List className="mr-3 mt-1 flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="text-xl md:text-2xl font-bold mb-2">Features:</h4>
                                    <ul className="list-disc list-inside space-y-2">
                                        {project.details.features.map((feature, index) => (
                                            <li key={index} className="text-lg md:text-xl">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Link
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center bg-antique-white text-olive font-bold py-3 px-6 rounded-lg text-lg hover:bg-opacity-80 transition-colors"
                            onClick={(event) => event.stopPropagation()}
                        >
                            Visit Project
                            <ExternalLink className="ml-2" size={20} />
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function ProjectsPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
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
                        Projects
                    </motion.h1>
                    <MenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                </nav>
            </header>

            <main className="flex flex-wrap justify-center gap-8 md:gap-16 p-4 sm:p-8">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </main>

            <div className="fixed left-4 bottom-4 text-antique-white text-base md:text-xl">
                X: {mousePosition.x} | Y: {mousePosition.y}
            </div>

            <AnimatePresence>{isMenuOpen && <Menu />}</AnimatePresence>
        </div>
    );
}
