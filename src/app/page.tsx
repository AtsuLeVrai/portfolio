import { AboutSection } from "@/components/layout/AboutSection";
import { ContactSection } from "@/components/layout/ContactSection";
import { HeaderLayout } from "@/components/layout/HeaderLayout";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProjectSection } from "@/components/layout/ProjectSection";
import { SkillSection } from "@/components/layout/SkillSection";

export default function Home() {
	return (
		<>
			<HeaderLayout/>
			<MainLayout/>
			<AboutSection/>
			<SkillSection/>
			<ProjectSection/>
			<ContactSection/>
		</>
	);
}
