import React from "react";
import { findAgeByBirthYear } from "@/shared";

export const AboutSection: React.FC = () => <section id='about' className='about-section'>
	<h2>Abouts</h2>
	<p>I'm currently {findAgeByBirthYear(2_007)} and live in the north of France, a
        region I'm particularly
        fond of for its cultural richness and dynamism. My passion for fullstack development took root
        in
        4th grade (in France), a revelation that has since shaped my personal and academic path.
        Fascinated
        by the
        infinite potential of programming, I specialized in TypeScript, a language whose rigor and
        flexibility enable me to bring complex, high-performance web applications to life. Through my
        portfolio, I'd like to introduce you to the projects that drive me and share my vision of web
        development, a constantly evolving field that challenges my creativity and thirst for learning
        every
        day.</p>
</section>;
