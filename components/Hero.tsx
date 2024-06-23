import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen mb-32">
      <video
        src={require("../public/2022395-hd_1920_1080_30fps.mp4")}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="relative flex flex-col items-center justify-center min-h-screen text-white font-bold z-10 gap-10">
        <div className="flex flex-col gap-5 max-w-3xl text-center">
          <div className="flex flex-col gap-2">
            <h1 className="p-4 text-3xl md:text-5xl lg:text-7xl tracking-tighter">
              Your one-stop music production powerhouse
            </h1>
            <p className="tracking-tighter">
              Everything you need to create and release your music, including
              samples, plugins, unlimited distribution and the world’s best AI
              mastering engine
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Link
              href={"/pricing"}
              className="rounded-full px-6 py-3 text-white tracking-tighter bg-[#1b586c] hover:opacity-80 hover:bg-[#1b586c] font-medium"
            >
              Start using MUSIX
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
