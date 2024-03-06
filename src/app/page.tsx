// TODO: [About Section] Utiliser shadcn/ui pour créer une section attrayante qui me présente.
// TODO: [Languages Section] Afficher les langages de programmation que je connais, avec des icônes ou des images représentatives, via shadcn/ui.
// TODO: [Projects Section] Mettre en avant mes projets en cours avec des cartes ou des listes, en intégrant des liens GitHub si applicable.
// TODO: [Contact Section] Concevoir un formulaire de contact ou des liens vers mes réseaux sociaux/professionnels.

import React from "react";
import { AboutSection, ContactSection, LanguagesSection, MainSection, ProjectsSection } from "@/shared";

export default function Home() {
	return (
		<>
			<MainSection/>
			<AboutSection/>
			<LanguagesSection/>
			<ProjectsSection/>
			<ContactSection/>
		</>
	);
}
