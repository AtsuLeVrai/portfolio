import { getYears } from "@/utils";

export function Footer() {
	return <footer className='flex justify-center py-10 items-center w-full'>
		<p>© {getYears} AtsumiFlex. All rights reserved.</p>
	</footer>;
}
