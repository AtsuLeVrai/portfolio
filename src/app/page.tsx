"use client";

import { useEffect, useState } from "react";

export default function Home() {
	const [scrollPos, setScrollPos] = useState(0);

	const handleScroll = () => {
		setScrollPos(window.scrollY);
	};

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);
		return () => document.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<header className='px-8'>
				<div className='px-8 py-7 flex items-center justify-between border-b-2 border-white'>
					<h1 className='text-3xl font-bold'>AtsumiFlex</h1>
					<ul className='flex space-x-28'>
						<li className='relative group'>
							<a href='#' className='text-xl uppercase'>About</a>
							<span
								className='absolute left-0 bottom-0 h-0.5 bg-green-400 w-0 group-hover:w-full transition-all duration-300 ease-in-out'/>
						</li>
						<li className='relative group'>
							<a href='#' className='text-xl uppercase'>Overview</a>
							<span
								className='absolute left-0 bottom-0 h-0.5 bg-green-400 w-0 group-hover:w-full transition-all duration-300 ease-in-out'/>
						</li>
						<li className='relative group'>
							<a href='#' className='text-xl uppercase'>Knowledge</a>
							<span
								className='absolute left-0 bottom-0 h-0.5 bg-green-400 w-0 group-hover:w-full transition-all duration-300 ease-in-out'/>
						</li>
					</ul>
				</div>
			</header>
			<div className='h-screen'/>
			<main className='py-16 uppercase'>
				<div className='text-9xl text-start items-center'
					style={{ transform: `translateX(${scrollPos}px)` }}>Crafting
				</div>
				<div className='text-9xl text-end' style={{ transform: `translateX(-${scrollPos}px)` }}>tomorrow's</div>
				<div className='text-9xl text-start' style={{ transform: `translateX(${scrollPos}px)` }}>solutions, one
				</div>
				<div className='text-9xl flex items-center text-start space-x-10'
					style={{ transform: `translateX(${scrollPos}px)` }}><span
						className='text-lg underline'>line</span> of <span
						className='text-lg underline'>code</span></div>
				<div className='text-9xl text-end' style={{ transform: `translateX(-${scrollPos}px)` }}>at</div>
				<div className='text-9xl text-start' style={{ transform: `translateX(${scrollPos}px)` }}>a time.</div>
			</main>
		</>
	);
}
