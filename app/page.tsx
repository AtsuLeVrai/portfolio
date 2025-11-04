import { About } from "@/app/sections/About";
import { Contact } from "@/app/sections/Contact";
import { Hero } from "@/app/sections/Hero";
import { Projects } from "@/app/sections/Projects";
import { Footer as LayoutFooter } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function HomePage() {
	return (
		<>
			<Header />
			<main className="relative">
				<Hero />
				<About />
				<Projects />
				<Contact />
			</main>
			<LayoutFooter />
		</>
	);
}
