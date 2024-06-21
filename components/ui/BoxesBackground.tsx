"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "./background-boxes";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export function BackgroundBoxes() {
  return (
    <ParallaxProvider>
      <div className="fixed w-full h-screen">
        <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Parallax translateY={[10, -10]}>
            <Boxes />
          </Parallax>
          <h1 className={cn("md:text-6xl text-xl text-white relative z-20 font-bold")}>
            Mischa Strauss
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            Application Developer
          </p>
        </div>
      </div>
    </ParallaxProvider>
  );
}
