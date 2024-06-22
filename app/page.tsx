"use client";

import { LinkPreview } from "@/components/ui/link-preview";
import moment from "moment";

export default function Home() {
  const yearSince = (): number => {
    return moment().diff(moment('20210725', 'YYYYMMDD'), 'years')
  }
  return (
    <>
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl space-y-4 pointer-events-none">
        <p className="bg-clip-text drop-shadow-2xl bg-gradient-to-b text-transparent from-white/80 to-white/20">
          Mischa Strauss
        </p>
        <p className="text-sm bg-clip-text drop-shadow-2xl bg-gradient-to-b text-transparent from-gray-300/80 to-gray-300/20 relative">
          Application developer based in Switzerland.
          Currently in a four-year apprenticeship at{" "}
          <span className="pointer-events-auto relative">
            <LinkPreview
              url="https://www.six-group.com/de/home.html"
              className="font-normal text-blue-700/80 underline"
            >
              SIX
            </LinkPreview>
          </span>
        </p>
      </div>
    </>
  );
}
