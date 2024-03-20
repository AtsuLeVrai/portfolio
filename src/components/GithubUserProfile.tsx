"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GithubUserData } from "@/types";
import { fetchGithubUser } from "@/utils";

type GithubUserProfileParams = {
	className?: string;
	height: number;
	username: string;
	width: number;
};

export function GithubUserProfile({ username, width, height, className }: Readonly<GithubUserProfileParams>) {
	const [userData, setUserData] = useState<GithubUserData>(Object);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchGithubUser(username);
			setUserData(data);
		};

		void fetchData();
	}, [username]);

	return <Image src={userData.avatar_url} alt={`Github ${userData.login} avatar`} width={width} height={height}
		className={className}/>;
}
