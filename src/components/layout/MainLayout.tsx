import { GithubAvatar } from "@/components/GithubAvatar";

export function MainLayout() {
	return <main className='flex justify-center items-center container mx-auto my-20'>
		<div className='container mx-auto flex justify-around items-center text-start'>
			<div>
				<h1 className='text-3xl font-bold'>Hi, I'm Tom !</h1>
				<p className='mt-4'>A young French FullStack developer with a passion for what he does.</p>
			</div>
			<div>
				<GithubAvatar username='AtsumiFlex' width={260} height={260} className='rounded-full'/>
			</div>
		</div>
	</main>;
}
