"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GithubUserData } from "@/types";
import { GetUserGithub } from "@/utils/GetUserGithub";

export function PutGithubUserAvatar({ username, width, height, className }: Readonly<{
	className?: string;
	height: number;
	username: string;
	width: number;
}>) {
	const [avatar, setAvatar] = useState<GithubUserData | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await GetUserGithub(username);
			setAvatar(data);
		};

		void fetchData();
	}, [username]);

	if (!avatar) {
		return <div>Loading...</div>;
	}

	return <Image src={avatar?.avatar_url} alt={`Github ${username} avatar`} width={width} height={height}
		className={className}/>;
}
