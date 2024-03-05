"use client";

import Error from "next/error";
import Image from "next/image";
import { useEffect, useState } from "react";

async function fetchAvatar(pseudo: string) {
	const response = await fetch(`https://api.github.com/users/${pseudo}`);
	if (!response.ok) {
		new Error({
			title: "Failed to fetch user data",
			statusCode: 404,
		});
	}

	const data = await response.json();
	return data.avatar_url;
}

export function UserProfileAvatar({ username }: { readonly username: string; }) {
	const [avatarURL, setAvatarURL] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchAvatar(username);
			setAvatarURL(data);
		};

		void fetchData();
	}, [username]);

	if (!avatarURL) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Image src={avatarURL} alt='Uer Picture' width='460' height='460'/>
		</div>
	);
}
