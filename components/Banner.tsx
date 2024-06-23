import Image from "next/image";
import React from "react";
import backImge from "@/public/backimage.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative max-w-7xl mx-auto w-full my-32 h-[500px] text-white ">
      <Image
        src={backImge}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-80"
      />
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-light tracking-tighter">
          MUSIX <span className="text-[#6337d4] font-bold">Studio</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl max-w-2xl tracking-tighter">
          Create and release more music for one low price with Plugins, Samples,
          Mastering, Distribution, and more.
        </p>
        <p className="mt-2 text-lg md:text-xl tracking-tighter">
          Starting at just $11.99/mo.
        </p>
        <Link
          href={"/pricing"}
          className="mt-6 px-5 py-3 bg-[#371F76] tracking-tighter text-white rounded-full hover:bg-[#371F76] hover:opacity-80"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Banner;
