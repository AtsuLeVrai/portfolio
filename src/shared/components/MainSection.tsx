import React from "react";
import { findAgeByBirthYear, TextGenerateEffect, UserProfileAvatar } from "@/shared";

export const MainSection: React.FC = () => {
	const marginSpace = "my-5";

	const wordForTextGenerateEffect = `At ${findAgeByBirthYear(2_007)}, from Northern France, my journey in full-stack development, sparked in 4th grade, now focuses on creating advanced web applications with TypeScript. My portfolio showcases this evolving passion.`;

	return (
		<main className='flex justify-center items-center p-4 w-full'>
			<div className='flex justify-around items-center w-full max-w-8xl'>
				<div className='text-start w-1/2 px-4'>
					<h1 className={`text-5xl font-bold ${marginSpace}`}>
                        Hi, I'm <span
							className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-green-500'>AtsumiFlex</span>
					</h1>
					<h3 className={marginSpace}>
						<pre><code><span className='namespace'>console</span>.<span className='function'>log</span><span
							className='bracket'>(<span
								className='string'>"Young Developer FullStack"</span>)</span></code></pre>
					</h3>
					<p className={`text-zinc-400 ${marginSpace}`}><TextGenerateEffect
						words={wordForTextGenerateEffect}/></p>
				</div>
				<div>
					<UserProfileAvatar username='atsumiflex'/>
				</div>
			</div>
		</main>
	);
};

