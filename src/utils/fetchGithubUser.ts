import type { GithubUserData } from "@/types";

/**
 * Retrieves the data of a GitHub user from the GitHub API.
 *
 * @param {string} username - The GitHub username of the user to retrieve.
 * @returns {Promise<GithubUserData>} A promise that resolves with the user data.
 * @throws {Error} Throws an error if the HTTP request fails or if the JSON data cannot be parsed.
 */
export async function FetchGithubUser(username: string): Promise<GithubUserData> {
	const response = await fetch(`https://api.github.com/users/${username}`, { cache: "force-cache" });

	if (!response.ok) {
		throw new Error(`HTTP error ! status: ${response.status}`);
	}

	let data: GithubUserData;
	try {
		data = await response.json();
	} catch {
		throw new Error("Could not parse JSON !");
	}

	return data;
}
