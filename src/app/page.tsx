import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
	return (
		<div className='flex flex-col justify-between min-h-screen'>
			<Header/>
			<main className='m-auto flex justify-center items-center text-center'>
				<section className='space-y-5'>
					<h1 className='text-6xl font-bold'>Hi, I'm <span className='text-green-400'>AtsumiFlex</span></h1>
					<p className='text-2xl font-semibold'>A young FullStack Developer.</p>
					<pre
						className='bg-gray-800 border-2 border-gray-500 rounded-lg inline-block py-3 px-3 select-none'><code><span
							className='text-code-red'>console</span>.<span className='text-code-blue'>log</span><span
							className='text-code-yellow'>(<span
								className='text-code-green'>"Hello World!"</span>)</span></code></pre>
				</section>
			</main>
			<Footer/>
		</div>
	);
}
