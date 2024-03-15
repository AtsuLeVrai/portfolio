import Image from "next/image";
import { GetYears } from "@/utils";

export default function Home() {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li><a href='#home'>Home</a></li>
						<li><a href='#about_me'>About Me</a></li>
						<li><a href='#skills'>Skills</a></li>
						<li><a href='#projects'>Projects</a></li>
						<li><a href='#contact'>Contact</a></li>
					</ul>
				</nav>
			</header>

			<main id='home'>
				<div>
					<h1>Hello, I'm Atsu. !</h1>
					<h2>A passionate young FullStack developer from France.</h2>
					<pre><code>console.info("Hello World !")</code></pre>
				</div>
				<div>
					<Image src={""} alt='atsumiflex_profile'/>
				</div>
			</main>

			<section id='about_me'>
				<h2>About Me</h2>
			</section>

			<section id='skills'>
				<h2>Skills</h2>
			</section>

			<section id='projects'>
				<h2>Projects</h2>
			</section>

			<section id='contact'>
				<h2>Contact</h2>
			</section>

			<footer>
				<p>&copy; {GetYears()} Atsu. All rights reserved.</p>
			</footer>
		</>
	);
}
