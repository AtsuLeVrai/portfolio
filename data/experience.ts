export interface Experience {
	id: string;
	position: string;
	company: string;
	startDate: string;
	endDate: string;
	current: boolean;
	achievements: string[];
	technologies: string[];
}

export const experiences: Experience[] = [
	{
		id: "example-position",
		position: "Software Engineer",
		company: "Example Company",
		startDate: "Jan 2020",
		endDate: "Present",
		current: true,
		achievements: [
			"Example achievement describing a technical accomplishment",
			"Example achievement describing a project outcome",
			"Example achievement describing a collaboration",
		],
		technologies: ["TypeScript", "React", "Node.js", "PostgreSQL"],
	},
];
