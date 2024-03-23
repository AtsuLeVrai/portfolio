import { GithubUserProfile } from "@/components";
import { fira_code, getBirthYears } from "@/utils";

export default function Home() {
	return (
		<>
			<header
				className='sticky top-0 z-50 flex flex-row justify-evenly py-7 items-center border-b border-gray-600 backdrop-blur'>
				<ul className='flex font-medium font text-lg space-x-8'>
					<li className='relative group'><a href='#about'
						className='inline-block transition-colors duration-200 hover:text-green-400'>
                        About Me
					</a>
					<span
						className='absolute left-0 bottom-0 h-0.5 bg-green-400 w-0 group-hover:w-full transition-all duration-300 ease-in-out'/>
					</li>
					<li className='relative group'><a href='#overviews'
						className='inline-block transition-colors duration-200 hover:text-green-400'>Overviews</a><span
						className='absolute left-0 bottom-0 h-0.5 bg-green-400 w-0 group-hover:w-full transition-all duration-300 ease-in-out'/>
					</li>
					<li className='relative group'><a href='#knowledge'
						className='inline-block transition-colors duration-200 hover:text-green-400'>Knowledge</a><span
						className='absolute left-0 bottom-0 h-0.5 bg-green-400 w-0 group-hover:w-full transition-all duration-300 ease-in-out'/>
					</li>
					<li className='relative group'><a href='#contact'
						className='inline-block transition-colors duration-200 hover:text-green-400'>Contact</a><span
						className='absolute left-0 bottom-0 h-0.5 bg-green-400 w-0 group-hover:w-full transition-all duration-300 ease-in-out'/>
					</li>
				</ul>
			</header>
			<main className='flex flex-row justify-evenly items-center text-start py-32'>
				<div className='space-y-5'>
					<h1 className='text-6xl font-bold'>Hi,
                        I'm <span className='text-green-400'>Tom B.</span>
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
			<div className='px-48 text-start'>
				<section id='overviews' className='space-y-7'>
					<h2 className='text-2xl'>Introduction</h2>
					<h1 className='text-7xl font-bold'>Overviews</h1>
					<p className='text-lg max-w-screen-lg'>
                        I am a {getBirthYears(2_007)} years old first-year STI2D high school student with nearly 5 years
                        of experience in programming field.
                        Deeply interested in technology, I specialize in backend and full-stack development. From the
                        north of France, I am influenced
                        by a robust technological culture. My programming drive involves continuous learning and
                        creating innovative solutions. TypeScript
                        is my preference and I enjoy working with frameworks like Nest.js and Next.js for scalable and
                        modern web applications.
					</p>
				</section>
				<section id='knowledge'>
					<h1 className='text-4xl font-semibold'>Knowledge</h1>
				</section>
			</div>
			<section id='contact'>
				<h1 className='text-4xl font-semibold'>Contact</h1>
			</section>
			<footer className='flex flex-row justify-center items-center py-8 border-t border-gray-600'>
				<p className='text-gray-500'>© 2024 Tom B. All rights reserved.</p>
			</footer>
		</>
	);
}
