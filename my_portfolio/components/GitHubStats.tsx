"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Github, Star, Users, GitBranch, Trophy } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";

interface Stats {
  repos: number;
  stars: number;
  followers: number;
  contributions: number;
}

const GitHubStats = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("/api/github");
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        // Fallback or handle error
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statItems = [
    { label: "Repos", value: stats?.repos ?? 0, icon: <GitBranch size={16} /> },
    { label: "Stars", value: stats?.stars ?? 0, icon: <Star size={16} /> },
    { label: "Followers", value: stats?.followers ?? 0, icon: <Users size={16} /> },
    { label: "Contributions", value: stats?.contributions ?? 0, icon: <Trophy size={16} /> },
  ];

  return (
    <Link
      href={personalInfo.github}
      target="_blank"
      className="flex flex-wrap justify-center gap-4 mt-4"
    >
      {loading
        ? [1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-10 w-28 bg-muted animate-pulse rounded-full"
            />
          ))
        : statItems.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:border-primary/50 transition-colors"
            >
              <span className="text-primary">{stat.icon}</span>
              <span className="text-sm font-medium">
                {stat.value} {stat.label}
              </span>
            </div>
          ))}
    </Link>
  );
};

export default GitHubStats;
