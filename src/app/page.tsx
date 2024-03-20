import { GithubUserProfile } from "@/components";
import { fira_code } from "@/utils";

export default function Home() {
	return (
		<>
			<header className='flex flex-row justify-evenly py-8 items-center'>
				<ul className='flex font-medium font text-lg space-x-8'>
					<li><a href='#'>About Me</a></li>
					<li><a href='#'>Languages</a></li>
					<li><a href='#'>Tools</a></li>
					<li><a href='#'>Projects</a></li>
					<li><a href='#'>Contact</a></li>
				</ul>
			</header>

			<main className='flex flex-row justify-evenly items-center text-start pt-32'>
				<div>
					<h1 className='text-6xl font-semibold my-2'>Hi, I'm Atsu. !</h1>
					<section className='bg-slate-800 rounded-md border-solid border-2 border-slate-600'>
						<pre className='m-2'><code
							className={`${fira_code.className} text-xl`}><span
								className='text-red-500'>console</span>.<span
								className='text-sky-400'>info</span><span className='text-amber-400'>(<span
								className='text-lime-500'>"FullStack Developer"</span>)</span></code></pre>
					</section>
					<p className='text-2xl font-medium my-2'>Welcome to my portfolio website !</p>
				</div>
				<div className='rounded-lg outline outline-offset-4 outline-green-400'>
					<GithubUserProfile username='AtsumiFlex' width={300} height={300} className='rounded-lg'/>
				</div>
			</main>
		</>
	);
}
