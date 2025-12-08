import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { VeillePostQuantum } from "./VeillePostQuantum";

export const metadata: Metadata = {
	title: "Veille Technologique - Cryptographie Post-Quantique",
	description:
		"L'avenir de la sécurité informatique face à la révolution quantique. Découvrez comment les ordinateurs quantiques menacent les systèmes de chiffrement actuels et les solutions émergentes.",
	keywords: [
		"Cryptographie Post-Quantique",
		"Post-Quantum Cryptography",
		"CRYSTALS-Kyber",
		"CRYSTALS-Dilithium",
		"NIST",
		"Sécurité Quantique",
		"RSA",
		"Algorithme de Shor",
		"BTS SIO",
		"Veille Technologique",
	],
	openGraph: {
		title: "Veille Technologique - Cryptographie Post-Quantique | Tom B.",
		description:
			"L'avenir de la sécurité informatique face à la révolution quantique",
		type: "article",
		publishedTime: "2025-12-01",
		authors: ["Tom B."],
		tags: ["Cryptographie", "Quantum", "Sécurité", "BTS-SIO"],
	},
};

export default function VeilleCryptographiePage() {
	return (
		<>
			<Header />
			<main className="relative">
				<VeillePostQuantum />
			</main>
			<Footer />
		</>
	);
}
