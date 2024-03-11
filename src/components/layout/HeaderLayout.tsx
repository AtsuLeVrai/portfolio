export function HeaderLayout() {
	return (
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
	);
}
