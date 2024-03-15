"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getGithubUserData } from "@/utils/getGithubUserData";

export function GithubAvatar({ username, width, height, className }: Readonly<{
	className?: string;
	height: number;
	username: string;
	width: number;
}>) {
	const [avatar, setAvatar] = useState(String);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getGithubUserData(username);
			setAvatar(data.avatar_url);
		};

		void fetchData();
	}, [username]);

	if (!avatar) {
		return <div>Loading...</div>;
	}

	return <Image src={avatar} alt={`${username} avatar`} width={width} height={height} className={className}/>;
}
