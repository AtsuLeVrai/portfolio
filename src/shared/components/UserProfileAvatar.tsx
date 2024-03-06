"use client";

import Error from "next/error";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchGithubUser } from "@/shared";

export function UserProfileAvatar({ username }: { readonly username: string; }) {
	const [avatarURL, setAvatarURL] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchGithubUser(username);
			setAvatarURL(data.avatar_url);
		};

		void fetchData();
	}, [username]);

	if (avatarURL === null) {
		return <Error statusCode={404} title='User not found'/>;
	}

	if (!avatarURL) {
		return <div className='text-gray-500'>Loading...</div>;
	}

	return (
		<div className='inline-block relative'>
			<Image src={avatarURL} alt={`${username}'s Picture`} className='rounded-full' width={300} height={300}/>
		</div>
	);
}
