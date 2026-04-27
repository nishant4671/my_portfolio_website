import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const username = "Nishant-Kumar-Dev";
    
    // Fetch user data
    const userRes = await axios.get(`https://api.github.com/users/${username}`);
    const { public_repos, followers } = userRes.data;

    // Fetch repos for stars
    const reposRes = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`);
    const stars = reposRes.data.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

    return NextResponse.json({
      repos: public_repos,
      stars: stars,
      followers: followers,
      contributions: 450, // Mocked value, fetching actual contributions requires GraphQL API
    });
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      { repos: 0, stars: 0, followers: 0, contributions: 0 },
      { status: 200 } // Return zeros instead of failing
    );
  }
}
