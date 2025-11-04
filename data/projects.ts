export interface Project {
	id: string;
	title: string;
	shortDescription: string;
	longDescription: string;
	category: "Trading" | "Game" | "API" | "Other";
	tags: string[];
	image: string;
	githubUrl?: string;
	demoUrl?: string;
	featured: boolean;
	metrics?: {
		label: string;
		value: string;
	}[];
}

export const projects: Project[] = [
	{
		id: "example-project",
		title: "Example Project",
		shortDescription: "A sample project description",
		longDescription:
			"This is an example project with a longer description explaining the project details and implementation.",
		category: "Other",
		tags: ["TypeScript", "React", "Node.js"],
		image: "https://placehold.co/600x400",
		githubUrl: "https://github.com/username/project",
		featured: true,
		metrics: [
			{ label: "Metric 1", value: "100" },
			{ label: "Metric 2", value: "200" },
		],
	},
];
