"use client";

import { NavBar } from "@/components/NavBar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import moment from "moment";

export default function Home() {
  const yearSince = (): number => {
    return moment().diff(moment('20210725', 'YYYYMMDD'), 'years')
  }
  return (
    <>
      <NavBar />
      <div className="fixed -z-50">
        <BackgroundGradientAnimation>
          <div className="h-screen flex-wrap items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              Mischa Strauss
            </p>
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">hi</p>
          </div>
        </BackgroundGradientAnimation>
      </div>
    </>
  );
}
