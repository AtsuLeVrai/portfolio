import type { GithubUserData } from "@/types";

export async function GetUserGithub(username: string): Promise<GithubUserData> {
	const response = await fetch(`https://api.github.com/users/${username}`);
	if (!response.ok) {
		throw new Error(`GitHub user not found: ${username}`);
	}

	return response.json();
}
