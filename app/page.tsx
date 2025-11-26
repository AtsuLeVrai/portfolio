import { About } from "@/app/sections/About";
import { Contact } from "@/app/sections/Contact";
import { Experience } from "@/app/sections/Experience";
import { Hero } from "@/app/sections/Hero";
import { Projects } from "@/app/sections/Projects";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

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
