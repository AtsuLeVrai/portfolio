import React from "react";

export const HeaderSection: React.FC = () => <header className='flex justify-center mx-auto'>
	<ul className='flex space-x-4'>
		<li className='list-none'>
			<a href='#about' className='hover:underline'>About Me</a>
		</li>
		<li className='list-none'>
			<a href='#languages' className='hover:underline'>Languages</a>
		</li>
		<li className='list-none'>
			<a href='#projects' className='hover:underline'>Projects</a>
		</li>
		<li className='list-none'>
			<a href='#contact' className='hover:underline'>Contact</a>
		</li>
	</ul>
</header>;
