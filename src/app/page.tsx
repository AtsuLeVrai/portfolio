"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { GithubDefaultResponse } from "@/types";

export default function Home() {
	const [githubUser, setGithubUser] = useState<GithubDefaultResponse>(Object);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch("https://api.github.com/users/AtsumiFlex");
			const response: GithubDefaultResponse = await data.json();
			setGithubUser(response);
		};

		void fetchData();
	}, []);

	return (
		<>
			<Header/>
			<main className='flex justify-center py-40 items-center space-x-64'>
				<section className='space-y-5'>
					<h1 className='text-5xl font-bold'>Hi, I'm <span className='text-green-400'>AtsumiFlex</span></h1>
					<p className='text-2xl font-semibold'>A young FullStack Developer.</p>
					<pre
						className='bg-gray-800 border-2 border-gray-500 rounded-lg inline-block py-3 px-3'><code><span
							className='text-red-500'>console</span>.<span className='text-blue-400'>log</span><span
							className='text-yellow-300'>(<span
								className='text-green-300'>"Hello World!"</span>)</span></code></pre>
				</section>
				<section
					className='ring ring-green-400 ring-offset-2 dark:ring-offset-slate-900 rounded-lg'>
					<Image src={githubUser.avatar_url} alt={"avatar_url"} width={300} height={300}
						className='rounded-lg'/>
				</section>
			</main>
			<Footer/>
		</>
	);
}
