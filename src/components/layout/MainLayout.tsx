import { PutGithubUserAvatar } from "@/components/layout/PutGithubUserAvatar";
import { GetAgeWithBirthYears } from "@/utils/GetAgeWithBirthYears";

export function MainLayout() {
	return (
		<main className='flex flex-row items-center justify-center my-10 space-x-10'>
			<section className='flex flex-col items-start'>
				<h1 className='text-5xl'>Hi, I'm <span
					className='inline-block bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text font-bold'>AtsumiFlex</span>
				</h1>
				<pre><code>console.log("test")</code></pre>
				<p>Passionate {GetAgeWithBirthYears(2_007)} years old FullStack developer living in northern
                    France.</p>
			</section>
			<div className='flex-shrink-0'>
				<PutGithubUserAvatar username='AtsumiFlex' height={300} width={300}
					className='rounded-full'/>
			</div>
		</main>
	);
}
