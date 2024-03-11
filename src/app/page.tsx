import { PutGithubUserAvatar } from "@/components/PutGithubUserAvatar";

export default function Home() {
	return (
		<>
			<header className='max-w-6xl mx-auto px-4'>
				<nav className='flex justify-center items-center py-6'>
					<ul className='flex text-lg'>
						<li className='mx-4'>
							<a href='#about'><span
								className='inline-block bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text'>#</span>About</a>
						</li>
						<li className='mx-4'>
							<a href='#skills'><span
								className='inline-block bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text'>#</span>Skills</a>
						</li>
						<li className='mx-4'>
							<a href='#projects'><span
								className='inline-block bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text'>#</span>Projects</a>
						</li>
						<li className='mx-4'>
							<a href='#contact'><span
								className='inline-block bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text'>#</span>Contact</a>
						</li>
					</ul>
				</nav>
			</header>

			<main className='flex flex-col items-start my-10 ml-20'>
				<h1 className='text-5xl'>Hi, I'm <span
					className='inline-block bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text font-bold'>AtsumiFlex</span>
				</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fuga modi quo totam. Accusamus
                    architecto autem dicta dolorum illo nesciunt optio quidem quis quo saepe?</p>
				<div>
					<PutGithubUserAvatar username='AtsumiFlex' height={460} width={460}
						className='rounded-full hover:rounded-lg'/>
				</div>
			</main>
		</>
	);
}
