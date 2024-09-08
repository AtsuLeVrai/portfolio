"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu } from "@/components/Menu";
import { MenuButton } from "@/components/MenuButton";
import { poppins } from "@/lib/fonts";

export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={`${poppins.className} bg-olive min-h-screen`}>
            <header className="py-9 px-28 relative">
                <nav className="flex justify-between items-center">
                    <h1 className="text-antique-white text-9xl">Blog</h1>
                    <MenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                </nav>
            </header>

            <AnimatePresence>{isMenuOpen && <Menu />}</AnimatePresence>
        </div>
    );
}
