import Image from "next/image";
import React from "react";
import { TracingBeam } from "@/shared";

const dummyContent = [
	{
		title: "Lorem Ipsum Dolor Sit Amet",
		description:
            <><p>
                Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
                deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
                non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
                sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
                velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
                commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
            </p>
            </>,
		badge: "Launch Week",
		image:
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

export const AboutSection: React.FC = () => <section id='about' className='about-section'>
	<h2 className='text-2xl'>About Me</h2>
	<div className='container'>
		<TracingBeam className='px-6'>
			<div className='max-w-2xl mx-auto antialiased pt-4 relative'>
				{dummyContent.map((item, index) => <div key={`content-${index}`} className='mb-10'>
					<h2 className='bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4'>
						{item.badge}
					</h2>

					<p className={"text-xl mb-4"}>
						{item.title}
					</p>

					<div className='text-sm  prose prose-sm dark:prose-invert'>
						{item?.image &&
                            <Image src={item.image} alt='blog thumbnail' height='1000' width='1000'
                            	className='rounded-lg mb-10 object-cover'/>
						}
						{item.description}
					</div>
				</div>)}
			</div>
		</TracingBeam>
	</div>
</section>;
