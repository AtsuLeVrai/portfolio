import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-rose-50 via-white to-cyan-50 px-4">
			<div className="text-center">
				<h1 className="mb-4 bg-gradient-to-r from-purple-600 via-cyan-600 to-rose-600 bg-clip-text font-black text-9xl text-transparent">
					404
				</h1>
				<h2 className="mb-4 font-black text-3xl text-gray-900">
					Page Not Found
				</h2>
				<p className="mb-8 font-medium text-gray-600 text-lg">
					The page you're looking for doesn't exist or has been moved.
				</p>
				<Link
					href="/"
					className="inline-block rounded-full border-3 border-gray-900 bg-cyan-400 px-8 py-4 font-black text-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(17,24,39,1)]"
				>
					Go Home
				</Link>
			</div>
		</div>
	);
}
