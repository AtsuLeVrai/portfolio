export default function Loading() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 via-white to-cyan-50">
			<div className="flex flex-col items-center gap-4">
				<div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-cyan-600" />
				<p className="font-bold text-gray-600">Loading...</p>
			</div>
		</div>
	);
}
