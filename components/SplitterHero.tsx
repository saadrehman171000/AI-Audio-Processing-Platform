"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import splitter from "@/public/splitter.png";
import { UploadButton } from "@/util/uploadthing";

const SplitterHero = () => {
  const navigateDown = (e: any) => {
    e.preventDefault();
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="max-w-7xl mx-auto w-full p-5 px-10 my-32 text-white tracking-tighter">
      <div className="flex flex-col items-center justify-center gap-10 text-center">
        <Button
          onClick={navigateDown}
          className="text-lg md:text-xl bg-white rounded-xl px-3 hover:bg-white hover:opacity-80 py-2 text-black"
        >
          How it works
        </Button>
        <h1 className="text-3xl md:text-5xl font-bold">Splitter AI</h1>
        <p className="max-w-md md:max-w-2xl">
          Split music into separated parts with AI-Powered algorithms
        </p>
        <Image src={splitter} alt="remover" className="" />
        <div className="mt-10 flex flex-col items-center justify-center gap-10">
          <h1 className="text-xl md:text-2xl font-bold border-b-4 border-[#1b586c] py-2">
            Upload Song or URL
          </h1>
          <UploadButton
            endpoint="imageUploader"
            className="ut-button:bg-[#1b586c] ut-button:ut-readying:bg-[#1b586c]-500"
            onClientUploadComplete={(res: any) => {
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </div>

      <div id="work" className="my-40 border-t-2 border-[#1b586c]">
        <div className="flex flex-col gap-5 items-start justify-start mt-10">
          <h1 className="text-white tracking-tighter text-xl md:text-3xl">
            AI-Powered Music Separator
          </h1>
          <div className="bg-[#1b586c] px-10 py-10 text-xl md:text-3xl">
            <h1>
              This app allows to separate music into an individual streams such
              as vocal, bass, percussion, and lets you rebalance their
              individual volumes. This is the simplest way to get multitracks
              from any song. <br />
              <br /> Once you choose a song, artificial intelligence will
              separate music into stems: vocals, bass, drums, others. Processing
              usually takes about 1 minute.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitterHero;
