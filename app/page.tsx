import dynamic from "next/dynamic";
import { About } from "@/app/sections/About";
import { Hero } from "@/app/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const Projects = dynamic(
	() =>
		import("@/app/sections/Projects").then((mod) => ({
			default: mod.Projects,
		})),
	{
		loading: () => <div className="min-h-screen" />,
	},
);

const Experience = dynamic(
	() =>
		import("@/app/sections/Experience").then((mod) => ({
			default: mod.Experience,
		})),
	{
		loading: () => <div className="min-h-screen" />,
	},
);

const Contact = dynamic(
	() =>
		import("@/app/sections/Contact").then((mod) => ({ default: mod.Contact })),
	{
		loading: () => <div className="min-h-screen" />,
	},
);

export default function HomePage() {
	return (
		<>
			<a href="#about" className="skip-link">
				Skip to main content
			</a>
			<Header />
			<main className="relative" id="main-content">
				<Hero />
				<About />
				<Projects />
				<Experience />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
