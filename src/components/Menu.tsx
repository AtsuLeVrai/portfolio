import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { GithubIcon } from "@/components/GithubIcon";
import { eczar } from "@/lib/fonts";

export function Menu() {
    const menuItems = [
        { num: "01", text: "Projects", href: "/projects", size: "text-4xl md:text-6xl", weight: "font-light" },
        { num: "02", text: "About", href: "/about", size: "text-5xl md:text-7xl", weight: "font-bold" },
        { num: "03", text: "Blog", href: "/blog", size: "text-5xl md:text-7xl", weight: "font-bold" },
        { num: "04", text: "Contact us", href: "/contact", size: "text-5xl md:text-7xl", weight: "font-bold" },
    ];

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-white overflow-auto flex items-center"
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="mx-auto p-4 md:p-8 w-full max-w-4xl">
                    <nav className="space-y-4 md:space-y-8 text-left">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={item.num}
                                className="flex items-center space-x-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <p className="-rotate-90 text-sm md:text-base">{item.num}</p>
                                <Link
                                    href={item.href}
                                    className={`block ${item.size} ${eczar.className} ${item.weight} hover:underline`}
                                >
                                    {item.text}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    <motion.div
                        className="mt-8 md:mt-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <a
                            href="mailto:tom.bialecki2211@gmail.com"
                            className="text-sm uppercase border-b border-black pb-1 hover:text-gray-600 transition-colors"
                        >
                            EMAIL US. WE NEED A COFFEE
                        </a>
                    </motion.div>

                    <motion.div
                        className="mt-4 md:mt-8 flex space-x-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <GithubIcon width={32} height={32} stroke="#000000" />
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
