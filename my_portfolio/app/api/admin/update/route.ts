import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { password, type, data: newItem } = await req.json();

    // 1. Validate Password
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER || "Nishant-Kumar-Dev";
    const repo = process.env.GITHUB_REPO || "my_portfolio"; // Fallback to common name
    const path = "lib/data.json";

    if (!token) {
      return NextResponse.json({ error: "GitHub token not configured" }, { status: 500 });
    }

    // 2. Fetch current file from GitHub to get the SHA
    const githubApiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const fileRes = await axios.get(githubApiUrl, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    const { sha, content: encodedContent } = fileRes.data;
    const currentData = JSON.parse(Buffer.from(encodedContent, "base64").toString("utf-8"));

    // 3. Update the data
    if (type === "project") {
      currentData.projects.push(newItem);
    } else if (type === "certification") {
      currentData.certifications.push(newItem);
    } else {
      return NextResponse.json({ error: "Invalid update type" }, { status: 400 });
    }

    // 4. Commit back to GitHub
    const updatedContent = Buffer.from(JSON.stringify(currentData, null, 2)).toString("base64");
    
    await axios.put(githubApiUrl, {
      message: `Admin: Add new ${type} - ${newItem.title || newItem.slug}`,
      content: updatedContent,
      sha: sha,
    }, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("GitHub Update Error:", error.response?.data || error.message);
    return NextResponse.json({ 
      error: error.response?.data?.message || "Failed to update repository" 
    }, { status: 500 });
  }
}
