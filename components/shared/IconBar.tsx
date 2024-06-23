"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import vocal from "@/public/removersvg.png";
import { useParams, usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import menu from "@/public/menu.svg";
import splitter from "@/public/splittersvg.png";
import advanced from "@/public/advancedsplitsvg.png";
import chords from "@/public/chordfinder.svg";
import mixing from "@/public/mixingsvg.png";

const IconBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full p-5 px-10 font-extralight z-20 mt-10 flex items-end justify-end ${
        showBackground ? "bg-black bg-opacity-50" : "bg-transparent "
      }`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="hidden md:block">
          <div className="flex items-center justify-center gap-10 relative">
            <Link
              className={`${
                pathname === "/products/remover" ? "font-bold" : "text-black"
              }`}
              href={"/products/remover"}
            >
              <Image
                src={vocal}
                alt="vocal"
                width={50}
                height={50}
                className="bg-white px-1 py-1 rounded-full"
              />
            </Link>
            <Link
              className={`${
                pathname === "/products/splitter" ? "font-bold" : "text-black"
              }`}
              href={"/products/splitter"}
            >
              <Image
                src={splitter}
                alt="vocal"
                width={50}
                height={50}
                className="bg-white px-1 py-1 rounded-full"
              />
            </Link>

            <Link
              className={`${
                pathname === "/products/advanced-splitter"
                  ? "font-bold"
                  : "text-black"
              }`}
              href={"/products/advanced-splitter"}
            >
              <Image
                src={advanced}
                alt="vocal"
                width={50}
                height={50}
                className="bg-white px-1 py-1 rounded-full"
              />
            </Link>

            <Link
              className={`${
                pathname === "/products/chords" ? "font-bold" : "text-black"
              }`}
              href={"/products/chords"}
            >
              <Image
                src={chords}
                alt="vocal"
                width={50}
                height={50}
                className="bg-white px-1 py-1 rounded-full"
              />
            </Link>
            <Link
              className={`${
                pathname === "/products/mixing" ? "font-bold" : "text-black"
              }`}
              href={"/products/mixing"}
            >
              <Image
                src={mixing}
                alt="vocal"
                width={50}
                height={50}
                className="bg-white px-1 py-1 rounded-full"
              />
            </Link>
          </div>
        </div>
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger className="align-middle">
              <Image
                src={menu}
                alt="menu"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
              <Link
                className={`${
                  pathname === "/products/remover" ? "font-bold" : "text-black"
                }`}
                href={"/products/remover"}
              >
                <Image src={vocal} alt="vocal" width={100} height={100} />
              </Link>
              <Link
                className={`${
                  pathname === "/products/splitter" ? "font-bold" : "text-black"
                }`}
                href={"/products/splitter"}
              >
                <Image src={vocal} alt="vocal" width={100} height={100} />
              </Link>

              <Link
                className={`${
                  pathname === "/products/advanced-splitter"
                    ? "font-bold"
                    : "text-black"
                }`}
                href={"/products/advanced-splitter"}
              >
                <Image src={vocal} alt="vocal" width={100} height={100} />
              </Link>

              <Link
                className={`${
                  pathname === "/products/chords" ? "font-bold" : "text-black"
                }`}
                href={"/products/chords"}
              >
                <Image src={vocal} alt="vocal" width={100} height={100} />
              </Link>
              <Link
                className={`${
                  pathname === "/products/mixing" ? "font-bold" : "text-black"
                }`}
                href={"/products/mixing"}
              >
                <Image src={vocal} alt="vocal" width={100} height={100} />
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default IconBar;
