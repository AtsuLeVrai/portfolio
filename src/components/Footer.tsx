import { getYears } from "@/utils";

export function Footer() {
	return <footer className='fixed bottom-0 flex justify-center py-10 items-center w-full'>
		<p>© {getYears} AtsumiFlex. All rights reserved.</p>
	</footer>;
}
