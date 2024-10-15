"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedinIcon } from "@/components/Icon";
import { SocialLink } from "@/components/SocialLink";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";
import { eczar } from "@/lib/fonts";

type MenuItemProps = {
    readonly href: string;
    readonly isActive: boolean;
    readonly num: string;
    readonly text: string;
};

function MenuItem({ num, text, href, isActive }: MenuItemProps) {
    return (
        <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Number.parseInt(num, 10) * 0.1 }}
        >
            <p className="-rotate-90 text-olive text-sm md:text-base">{num}</p>
            <Link
                href={href}
                className={`block text-4xl md:text-5xl lg:text-6xl ${eczar.className} ${
                    isActive ? "font-light" : "font-bold"
                } hover:underline text-olive transition-all duration-300`}
            >
                {text}
            </Link>
        </motion.div>
    );
}

export function Menu() {
    const pathname = usePathname();

    const menuItems = [
        { num: "01", text: "Home", href: "/" },
        { num: "02", text: "About Me", href: "/about" },
        { num: "03", text: "Projects", href: "/projects" },
        { num: "04", text: "Contact us", href: "/contact" },
    ];

    return (
        <motion.div
            className="fixed inset-0 bg-antique-white overflow-auto flex items-center z-10"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="mx-auto p-4 md:p-8 w-full max-w-4xl">
                <nav className="space-y-4 md:space-y-8 text-left">
                    {menuItems.map((item) => (
                        <MenuItem key={item.num} {...item} isActive={pathname === item.href} />
                    ))}
                </nav>

                <motion.div
                    className="mt-8 md:mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link
                        href={`mailto:${EMAIL}`}
                        className="text-sm uppercase border-b border-olive pb-1 hover:text-gray-600 transition-colors text-olive"
                    >
                        EMAIL US. WE NEED A COFFEE
                    </Link>
                </motion.div>

                <motion.div
                    className="mt-4 md:mt-8 flex space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <SocialLink href={LINKEDIN_URL} Icon={LinkedinIcon} label="LinkedIn" />
                    <SocialLink href={GITHUB_URL} Icon={GithubIcon} label="GitHub" />
                </motion.div>
            </div>
        </motion.div>
    );
}
