import { GetYearsBirthYears } from "@/utils/getYearsBirthYears";

export function AboutSection() {
	return <section id='about'>
		<div className='flex justify-center items-center flex-col'>
			<h2 className='text-2xl mb-4'>About me</h2>
		</div>
		<p className='mt-4'>I am a {GetYearsBirthYears(2_007)}-year-old full stack developer from France. I
            began
            coding when I was in the fourth grade, which means I've been refining my skills for approximately 5
            years. Despite my young age, my passion for programming drives me to constantly learn and improve.
            Although I enjoy all aspects of development, I have a particular fondness for backend development
            using TypeScript. I started my coding journey with JavaScript/Node.js, which laid a solid foundation
            for my current expertise in TypeScript.</p>
	</section>;
}
