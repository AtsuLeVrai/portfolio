"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MenuItem({ pathname, label }: Readonly<{ label: string; pathname: string; }>) {
	const currentPathname = usePathname();
	return <li className='relative group'><Link href={`/${pathname}`}><span className='text-green-400'>#</span>{label}
	</Link> <span
		className={`absolute left-0 bottom-0 h-0.5 bg-green-400 transition-all duration-300 ease-in-out group-hover:w-full ${currentPathname === `/${pathname}` ? "w-full" : "w-0"}`}/>
	</li>;
}

export function Header() {
	return <header className='flex justify-center py-8 items-center'>
		<ul className='flex space-x-10'>
			<MenuItem pathname='' label='home'/>
			<MenuItem pathname='overview' label='overview'/>
			<MenuItem pathname='knowledge' label='knowledge'/>
			<MenuItem pathname='contact' label='contact'/></ul>
	</header>;
}
