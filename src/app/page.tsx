"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GithubIcon } from "@/components/GithubIcon";
import { MenuButton } from "@/components/MenuButton";
import profile from "@/public/profile.png";

// https://www.figma.com/design/0PKPAeqSRvbrERBy4b9KTi/ANDCOfromfiverr-brutalist-kit-(Community)?node-id=0-1&node-type=CANVAS&t=IHe1Kz11byHSyIge-0
export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="py-11 px-28 relative z-50">
                <nav className="flex justify-between items-center">
                    <h1>Tom Bialecki.</h1>
                    <Image src={profile} alt="profile" className="rounded-full" />
                    <MenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                </nav>
            </header>
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 flex items-center justify-center">
                    <nav className="bg-white p-8 rounded-lg">
                        <h2 className="text-2xl mb-4">Menu Content</h2>
                        <ul>
                            <li>
                                <a href="/" className="text-blue-500 hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-blue-500 hover:underline">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-blue-500 hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
            <footer className="fixed bottom-8 right-8 flex space-x-4">
                <Link href="https://github.com/3tatsu" target="_blank">
                    <GithubIcon width={32} height={32} stroke="#FAEBD7" />
                </Link>
            </footer>
        </>
    );
}
