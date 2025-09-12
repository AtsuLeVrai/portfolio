import SmoothScroll from "./components/SmoothScroll.tsx";
import AboutSection from "./components/sections/AboutSection.tsx";
import ContactSection from "./components/sections/ContactSection.tsx";
import HeroSection from "./components/sections/HeroSection.tsx";
import ProjectsSection from "./components/sections/ProjectsSection.tsx";
import SkillsSection from "./components/sections/SkillsSection.tsx";

export default function App() {
	return (
		<div className="overflow-x-hidden bg-black font-poppins text-white antialiased">
			<SmoothScroll>
				<main className="relative min-h-screen overflow-hidden bg-black text-white">
					<HeroSection />
					<AboutSection />
					<ProjectsSection />
					<SkillsSection />
					<ContactSection />
				</main>
			</SmoothScroll>
		</div>
	);
}
