"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GithubUserData } from "@/types";
import { FetchGithubUser } from "@/utils";

export function GithubUserProfile({ username, width, height, className }: Readonly<{
	className?: string;
	height: number;
	username: string;
	width: number;
}>) {
	const [userData, setUserData] = useState<GithubUserData>(Object);

	useEffect(() => {
		const fetchData = async () => {
			const data = await FetchGithubUser(username);
			setUserData(data);
		};

		void fetchData();
	}, [username]);

	return <Image src={userData.avatar_url} alt={`Github ${userData.name} avatar`} width={width} height={height}
		className={className}/>;
}
