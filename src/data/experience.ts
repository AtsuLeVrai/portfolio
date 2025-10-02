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
		id: "senior-backend-2022",
		position: "Senior Backend Engineer",
		company: "QuantTech Trading",
		startDate: "Jan 2022",
		endDate: "Present",
		current: true,
		achievements: [
			"Architected high-frequency trading platform processing 100k+ trades/second with <1ms latency",
			"Reduced infrastructure costs by 40% through optimization of database queries and caching strategies",
			"Led migration from monolithic architecture to microservices, improving deployment frequency by 10x",
			"Mentored team of 5 junior engineers and established code review best practices",
		],
		technologies: [
			"Rust",
			"PostgreSQL",
			"Redis",
			"Apache Kafka",
			"Kubernetes",
			"Docker",
		],
	},
	{
		id: "backend-2020",
		position: "Backend Engineer",
		company: "GameForge Studios",
		startDate: "Mar 2020",
		endDate: "Dec 2021",
		current: false,
		achievements: [
			"Built multiplayer game backend supporting 10k+ concurrent players across multiple game instances",
			"Implemented real-time matchmaking system reducing average wait time from 45s to 8s",
			"Designed anti-cheat detection system catching 95% of cheating attempts in real-time",
			"Optimized WebSocket connections reducing bandwidth usage by 60%",
		],
		technologies: ["Node.js", "Socket.IO", "MongoDB", "Redis", "AWS", "Docker"],
	},
	{
		id: "fullstack-2018",
		position: "Full Stack Developer",
		company: "TechStart Solutions",
		startDate: "Jun 2018",
		endDate: "Feb 2020",
		current: false,
		achievements: [
			"Developed RESTful APIs serving 1M+ requests/day with 99.9% uptime",
			"Built real-time analytics dashboard processing 100k events/hour",
			"Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes",
			"Collaborated with frontend team to optimize API performance and reduce payload sizes by 50%",
		],
		technologies: ["Go", "PostgreSQL", "React", "Docker", "Jenkins", "Nginx"],
	},
	{
		id: "junior-2017",
		position: "Junior Software Engineer",
		company: "CodeWave Inc",
		startDate: "Sep 2017",
		endDate: "May 2018",
		current: false,
		achievements: [
			"Contributed to development of microservices architecture handling 500k+ daily active users",
			"Implemented automated testing suite improving code coverage from 45% to 85%",
			"Fixed critical bugs in payment processing system preventing potential data loss",
			"Participated in on-call rotation and resolved production incidents with average MTTR of 30 minutes",
		],
		technologies: ["Python", "Django", "MySQL", "RabbitMQ", "Docker", "Git"],
	},
];

export const getCurrentExperience = () =>
	experiences.find((exp) => exp.current);
