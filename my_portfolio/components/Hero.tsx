"use client";

import React, { useEffect, useRef } from "react";
import GitHubStats from "./GitHubStats";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".hero-stats", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center pt-20"
    >
      <div className="container px-6 text-center">
        <h1 className="hero-title text-6xl md:text-8xl font-bold tracking-tight mb-8">
          Nishant Kumar
        </h1>
        <div className="hero-stats w-full max-w-4xl mx-auto">
          <GitHubStats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
