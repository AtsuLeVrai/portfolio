"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import type { ChangeEvent, FormEvent, MouseEvent } from "react";
import { useCallback, useState } from "react";
import { Menu, MenuButton } from "@/components";
import { EMAIL, GITHUB_URL } from "@/lib";

type FormDataState = {
    email: string;
    message: string;
    name: string;
};

export default function ContactPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [formData, setFormData] = useState<FormDataState>({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"error" | "success" | null>(null);

    const handleMouseMove = useCallback((event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    }, []);

    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = useCallback(async (event: FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
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
                        Contact
                    </motion.h1>
                    <MenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                </nav>
            </header>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                    <form onSubmit={handleSubmit} className="bg-olive p-8 rounded-none border-4 border-antique-white">
                        <h2 className="text-antique-white text-3xl md:text-4xl font-bold mb-6">CONTACT US</h2>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="NAME"
                            className="w-full mb-4 p-2 bg-antique-white text-olive text-lg md:text-xl font-bold"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="EMAIL"
                            className="w-full mb-4 p-2 bg-antique-white text-olive text-lg md:text-xl font-bold"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="MESSAGE"
                            className="w-full mb-4 p-2 bg-antique-white text-olive text-lg md:text-xl font-bold h-32"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-antique-white text-olive px-6 py-2 text-xl font-bold hover:bg-olive hover:text-antique-white border-2 border-antique-white transition-colors"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "SENDING..." : "SEND"}
                        </button>
                        {submitStatus && (
                            <p
                                className={`mt-4 text-center ${submitStatus === "success" ? "text-green-500" : "text-red-500"}`}
                            >
                                {submitStatus === "success"
                                    ? "Message sent successfully!"
                                    : "Error sending message. Please try again."}
                            </p>
                        )}
                    </form>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="bg-olive p-8 rounded-none border-4 border-antique-white h-full">
                        <h2 className="text-antique-white text-3xl md:text-4xl font-bold mb-6">
                            OTHER CONTACT METHODS
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center text-antique-white">
                                <Github className="mr-2" />
                                <Link
                                    href={GITHUB_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    {GITHUB_URL}
                                </Link>
                            </div>
                            <div className="flex items-center text-antique-white">
                                <Mail className="mr-2" />
                                <Link href={`mailto:${EMAIL}`} className="hover:underline">
                                    {EMAIL}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed left-4 bottom-4 text-antique-white text-base md:text-xl">
                X: {mousePosition.x} | Y: {mousePosition.y}
            </div>

            <AnimatePresence>{isMenuOpen && <Menu />}</AnimatePresence>
        </div>
    );
}
