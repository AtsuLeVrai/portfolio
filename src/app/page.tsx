import { AboutSection } from "@/components/layout/AboutSection";
import { HeaderLayout } from "@/components/layout/HeaderLayout";
import { MainLayout } from "@/components/layout/MainLayout";

export default function Home() {
	return (
		<>
			<HeaderLayout/>
			<MainLayout/>
			<AboutSection/>
		</>
	);
}
