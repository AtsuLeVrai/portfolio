"use client";

import Error from "next/error";

type GithubUserOptions = {
	avatar_url: string;
	bio: string;
	blog: string | null;
	company: string | null;
	created_at: string;
	email: string | null;
	events_url: string;
	followers: number;
	followers_url: string;
	following: number;
	following_url: string;
	gists_url: string;
	gravatar_id: number | string;
	hireable: null;
	html_url: string;
	id: number;
	location: string;
	login: string;
	name: string;
	node_id: string;
	organizations_url: string;
	public_gists: number;
	public_repos: number;
	received_events_url: string;
	repos_url: string;
	site_admin: boolean;
	starred_url: string;
	subscriptions_url: string;
	twitter_username: null;
	type: string;
	updated_at: string;
	url: string;
};

export async function fetchGithubUser(username: string): Promise<GithubUserOptions> {
	const response = await fetch(`https://api.github.com/users/${username}`);
	if (!response.ok) {
		new Error({
			title: "Failed to fetch user",
			statusCode: 404,
		});
	}

	return response.json();
}
