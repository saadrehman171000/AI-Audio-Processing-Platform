"use client";
import React from "react";
import Image from "next/image";
import chords from "@/public/chords.webp";
import { Button } from "./ui/button";
import { UploadButton } from "@/util/uploadthing";

const Chords = () => {
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
        <h1 className="text-3xl md:text-5xl font-bold">Find my chords</h1>
        <p className="max-w-md md:max-w-2xl">
          Just think of the song, and we've got the chords
        </p>
        <Image src={chords} alt="remover" className="max-w-full" />
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
            AI Based Chord Finder
          </h1>
          <div className="bg-[#1b586c] px-10 py-10 text-xl md:text-3xl">
            <h1>
              B C D E F G A... Which chords can you play? Do you only know how
              to play three chords, but do you want to find new songs to jam
              with? <br />
              <br /> No worries! Let us know which chords you can play and we’ll
              find you the next song to jam along with.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chords;
