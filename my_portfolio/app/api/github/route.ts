import { NextResponse } from "next/server";

const cacheHeader = {
  "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
};

export const dynamic = "force-dynamic";

interface GitHubUser {
  public_repos: number;
  followers: number;
}

interface GitHubRepo {
  stargazers_count: number;
}

export async function GET() {
  try {
    const username = "Nishant-Kumar-Dev";
    const requestOptions = {
      headers: {
        Accept: "application/vnd.github+json",
      },
    };

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, requestOptions),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`, requestOptions),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error("GitHub API request failed");
    }

    const user = (await userRes.json()) as GitHubUser;
    const repos = (await reposRes.json()) as GitHubRepo[];
    const stars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

    return NextResponse.json(
      {
        repos: user.public_repos,
        stars,
        followers: user.followers,
        contributions: 450,
      },
      { headers: cacheHeader }
    );
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      { repos: 0, stars: 0, followers: 0, contributions: 0 },
      { status: 200, headers: cacheHeader }
    );
  }
}
