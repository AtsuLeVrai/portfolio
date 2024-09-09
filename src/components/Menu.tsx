import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedinIcon } from "@/components/Icon";
import { ANTIQUE_WHITE, EMAIL, GITHUB_URL, LINKEDIN_URL, OLIVE } from "@/lib/constants";
import { eczar } from "@/lib/fonts";

type MenuItemProps = {
    readonly href: string;
    readonly num: string;
    readonly size: string;
    readonly text: string;
    readonly weight: string;
};

function MenuItem({ num, text, href, size, weight }: MenuItemProps) {
    return (
        <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Number.parseInt(num, 10) * 0.1 }}
        >
            <p className="-rotate-90 text-olive text-sm md:text-base">{num}</p>
            <Link href={href} className={`block ${size} ${eczar.className} ${weight} hover:underline text-olive`}>
                {text}
            </Link>
        </motion.div>
    );
}

export function Menu() {
    const pathname = usePathname();

    const menuItems = [
        { num: "01", text: "Home", href: "/" },
        { num: "02", text: "Projects", href: "/projects" },
        { num: "03", text: "About", href: "/about" },
        { num: "04", text: "Blog", href: "/blog" },
        { num: "05", text: "Contact us", href: "/contact" },
    ].map((item) => ({
        ...item,
        size: pathname === item.href ? "text-4xl md:text-6xl" : "text-5xl md:text-7xl",
        weight: pathname === item.href ? "font-light" : "font-bold",
    }));

    return (
        <motion.div
            className="fixed inset-0 bg-white overflow-auto flex items-center z-10"
            style={{ backgroundColor: ANTIQUE_WHITE }}
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="mx-auto p-4 md:p-8 w-full max-w-4xl">
                <nav className="space-y-4 md:space-y-8 text-left">
                    {menuItems.map((item) => (
                        <MenuItem key={item.num} {...item} />
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
                        className="text-sm uppercase border-b border-black pb-1 hover:text-gray-600 transition-colors text-olive"
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
                    <Link href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon height={32} stroke={OLIVE} width={32} />
                    </Link>
                    <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                        <GithubIcon width={32} height={32} stroke={OLIVE} />
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}
