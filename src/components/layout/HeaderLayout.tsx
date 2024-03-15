export function HeaderLayout() {
	const greenToCyanTextGradient = "bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600";

	return <header className='p-10'>
		<div className='container mx-auto flex justify-between items-center'>
			<h1 className='font-bold text-4xl'>Tom B.</h1>
			<nav>
				<ul className='flex text-lg'>
					<li className='mr-6'><a href='#home' className='hover:text-gray-300'><span
						className={greenToCyanTextGradient}>#</span>Home</a>
					</li>
					<li className='mr-6'><a href='#about' className='hover:text-gray-300'><span
						className={greenToCyanTextGradient}>#</span>About</a>
					</li>
					<li className='mr-6'><a href='#skills' className='hover:text-gray-300'><span
						className={greenToCyanTextGradient}>#</span>Skills</a>
					</li>
					<li className='mr-6'><a href='#projects' className='hover:text-gray-300'><span
						className={greenToCyanTextGradient}>#</span>Projects</a>
					</li>
					<li><a href='#contact' className='hover:text-gray-300'><span
						className={greenToCyanTextGradient}>#</span>Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>;
}
