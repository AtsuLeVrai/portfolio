"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GithubIcon } from "@/components/GithubIcon";
import { Menu } from "@/components/Menu";
import { MenuButton } from "@/components/MenuButton";
import { eczar } from "@/lib/fonts";
import profile from "@/public/profile.png"; // https://www.figma.com/design/0PKPAeqSRvbrERBy4b9KTi/ANDCOfromfiverr-brutalist-kit-(Community)?node-id=0-1&node-type=CANVAS&t=IHe1Kz11byHSyIge-0

// https://www.figma.com/design/0PKPAeqSRvbrERBy4b9KTi/ANDCOfromfiverr-brutalist-kit-(Community)?node-id=0-1&node-type=CANVAS&t=IHe1Kz11byHSyIge-0
export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="z-50">
            <header className="py-11 px-28 relative">
                <nav className="flex justify-between items-center">
                    <h1>Tom Bialecki.</h1>
                    <Image src={profile} alt="profile" className="rounded-full" />
                    <MenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                </nav>
            </header>
            {isMenuOpen && <Menu />}
            <main className={`flex flex-col items-center justify-center space-y-4 text-center ${eczar.className}`}>
                <h1 className="text-9xl">I want the maximum</h1>
                <h1 className="text-9xl">I want the maximum</h1>
                <h1 className="text-9xl">I want the maximum</h1>
                <h1 className="text-9xl">I want the maximum</h1>
            </main>
            <footer className="fixed bottom-8 right-8 flex space-x-4">
                <Link href="https://github.com/3tatsu" target="_blank">
                    <GithubIcon width={32} height={32} stroke="#FAEBD7" />
                </Link>
            </footer>
        </div>
    );
}
