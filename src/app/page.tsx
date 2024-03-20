import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubUserProfile } from "@/components";
import { fira_code, getBirthYears } from "@/utils";

export default function Home() {
	return (
		<>
			<header className='flex flex-row justify-evenly py-8 items-center'>
				<ul className='flex font-medium font text-lg space-x-8'>
					<li><a href='#about'>About Me</a></li>
					<li><a href='#languages'>Languages</a></li>
					<li><a href='#tools'>Tools</a></li>
					<li><a href='#projects'>Projects</a></li>
					<li><a href='#contact'>Contact</a></li>
				</ul>
			</header>

			<main className='flex flex-row justify-evenly items-center text-start py-32'>
				<div className='space-y-5'>
					<h1 className='text-6xl font-semibold'>Hi,
                        I'm Tom B. !
					</h1>
					<section className='bg-slate-800 rounded-md border-solid border-4 border-slate-600'>
						<pre className='m-2'><code
							className={`${fira_code.className} text-xl`}><span
								className='text-red-500'>console</span>.<span
								className='text-sky-400'>info</span><span className='text-amber-400'>(<span
								className='text-lime-500'>"FullStack Developer"</span>)</span></code></pre>
					</section>
					<p className='text-2xl font-medium'>Welcome to my portfolio website !</p>
				</div>
				<div
					className='rounded-lg outline outline-offset-4 outline-green-400'>
					<GithubUserProfile username='AtsumiFlex' width={340} height={340} className='rounded-lg'/>
				</div>
			</main>

			<section id='about'>
				<h1 className='text-4xl font-semibold'>About Me</h1>
				<p>I am currently a {getBirthYears(2_007)} years old student in my first year of STI2D high school,
                    passionate about the
                    world of programming since the 8th grade, which gives me almost 5 years of experience in this field.
                    My passion for technology has led me to delve deeply into development, with a particular fondness
                    for backend development, although I also possess full-stack development skills. Originating from the
                    north of France, I have taken advantage of my geographical location to immerse myself in a rich
                    technological and digital culture. My journey through the world of software development is driven by
                    curiosity and a constant desire to learn and create innovative solutions. I have a strong affinity
                    for TypeScript, and I enjoy working with frameworks like Nest.js and Next.js, which allow me to
                    build scalable and modern web applications.</p>
			</section>

			<section id='languages'>
				<h1 className='text-4xl font-semibold'>Languages</h1>
			</section>

			<section id='tools'>
				<h1 className='text-4xl font-semibold'>Tools</h1>
			</section>

			<section id='projects'>
				<h1 className='text-4xl font-semibold'>Projects</h1>
			</section>

			<section id='contact'>
				<h1 className='text-4xl font-semibold'>Contact</h1>

				<FontAwesomeIcon icon={faGithub} width={32} height={32}/>
			</section>
		</>
	);
}
