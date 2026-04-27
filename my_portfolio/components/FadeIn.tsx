"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const FadeIn = ({ children, delay = 0, direction = "up" }: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    
    const xDist = direction === "left" ? -50 : direction === "right" ? 50 : 0;
    const yDist = direction === "up" ? 50 : direction === "down" ? -50 : 0;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: xDist,
        y: yDist,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay, direction]);

  return <div ref={ref}>{children}</div>;
};

export default FadeIn;
