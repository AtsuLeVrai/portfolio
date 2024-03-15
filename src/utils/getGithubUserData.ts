import type { GithubUserData } from "@/types";

export async function getGithubUserData(username: string): Promise<GithubUserData> {
	const response = await fetch(`https://api.github.com/users/${username}`);
	return response.json();
}
