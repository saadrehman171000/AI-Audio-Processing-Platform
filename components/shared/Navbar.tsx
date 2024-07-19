"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import menu from "@/public/icons8-menu-50.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import splitter from "@/public/splittersvg.png";
import advanced from "@/public/advancedsplitsvg.png";
import chords from "@/public/chordfinder.svg";
import mixing from "@/public/mixingsvg.png";
import { useUser } from "@/app/state/state";
import vocal from "@/public/removersvg.png";
import { CircleUserRound } from "lucide-react";

const Navbar = () => {
  const { user } = useUser();
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

  const handleMenuItemClick = (path: any) => {
    router.push(`/${path}`);
  };

  const isProductPage = pathname.startsWith("/products");

  return (
    <div
      className={`fixed w-full p-5 px-10 font-extralight z-20 ${
        showBackground ? "bg-black bg-opacity-50" : "bg-transparent"
      }`}
    >
      <div className="flex flex-row items-center justify-between text-white">
        <div>
          <Link href="/" className="tracking-tight font-light text-lg">
            MUSIX
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center justify-center gap-10 relative ">
            <Link
              className={`${
                pathname === "/products/remover" ? "font-bold" : "text-black"
              }`}
              href={"/products/remover"}
            >
              <div className="relative group">
                <Image
                  src={vocal}
                  alt="vocal"
                  width={30}
                  height={30}
                  className="bg-white px-1 py-1 rounded-full transition-transform duration-200 hover:scale-110"
                />
                <span className="absolute left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Remover
                </span>
              </div>
            </Link>
            <Link
              className={`${
                pathname === "/products/splitter" ? "font-bold" : "text-black"
              }`}
              href={"/products/splitter"}
            >
              <div className="relative group">
                <Image
                  src={splitter}
                  alt="splitter"
                  width={30}
                  height={30}
                  className="bg-white px-1 py-1 rounded-full transition-transform duration-200 hover:scale-110"
                />
                <span className="absolute left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Splitter
                </span>
              </div>
            </Link>

            <Link
              className={`${
                pathname === "/products/advanced-splitter"
                  ? "font-bold"
                  : "text-black"
              }`}
              href={"/products/advanced-splitter"}
            >
              <div className="relative group">
                <Image
                  src={advanced}
                  alt="advanced"
                  width={30}
                  height={30}
                  className="bg-white px-1 py-1 rounded-full transition-transform duration-200 hover:scale-110"
                />
                <span className="absolute left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Advanced Splitter
                </span>
              </div>
            </Link>

            <Link
              className={`${
                pathname === "/products/chords" ? "font-bold" : "text-black"
              }`}
              href={"/products/chords"}
            >
              <div className="relative group">
                <Image
                  src={chords}
                  alt="chords"
                  width={30}
                  height={30}
                  className="bg-white px-1 py-1 rounded-full transition-transform duration-200 hover:scale-110"
                />
                <span className="absolute left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Find my chords
                </span>
              </div>
            </Link>
            <Link
              className={`${
                pathname === "/products/mixing" ? "font-bold" : "text-black"
              }`}
              href={"/products/mixing"}
            >
              <div className="relative group">
                <Image
                  src={mixing}
                  alt="Mixing"
                  width={30}
                  height={30}
                  className="bg-white px-1 py-1 rounded-full transition-transform duration-200 hover:scale-110"
                />
                <span className="absolute left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Mixing and Mastering
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <div>
            <div className="flex items-center justify-center gap-10 relative">
              <Link
                className={`${pathname === "/" ? "font-bold" : "text-white"}`}
                href="/"
              >
                Home
              </Link>
              <Link
                className={`${
                  pathname === "/about" ? "font-bold" : "text-white"
                }`}
                href="/about"
              >
                About
              </Link>
              <Link
                className={`${
                  pathname === "/pricing" ? "font-bold" : "text-white"
                }`}
                href="/pricing"
              >
                Pricing
              </Link>
              <Link
                className={`${
                  pathname === "/blog" ? "font-bold" : "text-white"
                }`}
                href="/blog"
              >
                Blog
              </Link>
              <div className={`${isProductPage ? "font-bold" : "text-white"}`}>
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">
                    Products
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#00171f] text-white rounded-xl">
                    <DropdownMenuLabel>Select Product</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => handleMenuItemClick("products/remover")}
                    >
                      <span
                        className={
                          pathname === "/products/remover"
                            ? "font-bold text-white"
                            : "text-white"
                        }
                      >
                        Remover
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleMenuItemClick("products/splitter")}
                    >
                      <span
                        className={
                          pathname === "/products/splitter"
                            ? "font-bold text-white"
                            : "text-white"
                        }
                      >
                        Basic Splitter
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() =>
                        handleMenuItemClick("products/advanced-splitter")
                      }
                    >
                      <span
                        className={
                          pathname === "/products/advanced-splitter"
                            ? "font-bold text-white"
                            : "text-white"
                        }
                      >
                        Advanced Splitter
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleMenuItemClick("products/chords")}
                    >
                      <span
                        className={
                          pathname === "/products/chords"
                            ? "font-bold text-white"
                            : "text-white"
                        }
                      >
                        Chord Finder
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleMenuItemClick("products/mixing")}
                    >
                      <span
                        className={
                          pathname === "/products/mixing"
                            ? "font-bold text-white"
                            : "text-white"
                        }
                      >
                        Mixing and Mastering
                      </span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {user && user.access_token ? (
                <div className="flex items-center justify-center gap-2 text-white">
                  <Link href="/login">
                    <Button>Log in</Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="bg-white text-black px-3 py-2 rounded-xl hover:bg-white hover:opacity-80">
                      Sign up free
                    </Button>
                  </Link>
                </div>
              ) : (
                <CircleUserRound />
              )}
            </div>
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
                className="cursor-pointer mix-blend-color-burn"
              />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 bg-[#00171f] md:hidden">
              <Link
                href="/"
                className="tracking-tight font-bold text-lg text-white"
              >
                MUSIX
              </Link>
              <Separator className="border border-gray-500" />
              <div>
                <div className="flex flex-col gap-5 text-white">
                  <Link
                    className={`${
                      pathname === "/" ? "font-bold" : "text-white"
                    }`}
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className={`${
                      pathname === "/about" ? "font-bold" : "text-white"
                    }`}
                    href="/about"
                  >
                    About
                  </Link>
                  <Link
                    className={`${
                      pathname === "/pricing" ? "font-bold" : "text-white"
                    }`}
                    href="/pricing"
                  >
                    Pricing
                  </Link>
                  <Link
                    className={`${
                      pathname === "/blog" ? "font-bold" : "text-white"
                    }`}
                    href="/blog"
                  >
                    Blog
                  </Link>
                  <div
                    className={`${isProductPage ? "font-bold" : "text-white"}`}
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger className="cursor-pointer">
                        Products
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-[#00171f] text-white rounded-xl">
                        <DropdownMenuLabel>Select Product</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() =>
                            handleMenuItemClick("products/remover")
                          }
                        >
                          <span
                            className={
                              pathname === "/products/remover"
                                ? "font-bold text-white"
                                : "text-white"
                            }
                          >
                            Remover
                          </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleMenuItemClick("products/splitter")
                          }
                        >
                          <span
                            className={
                              pathname === "/products/splitter"
                                ? "font-bold text-white"
                                : "text-white"
                            }
                          >
                            Basic Splitter
                          </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleMenuItemClick("products/advanced-splitter")
                          }
                        >
                          <span
                            className={
                              pathname === "/products/advanced-splitter"
                                ? "font-bold text-white"
                                : "text-white"
                            }
                          >
                            Advanced Splitter
                          </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleMenuItemClick("products/chords")}
                        >
                          <span
                            className={
                              pathname === "/products/chords"
                                ? "font-bold text-white"
                                : "text-white"
                            }
                          >
                            Chord Finder
                          </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleMenuItemClick("products/mixing")}
                        >
                          <span
                            className={
                              pathname === "/products/mixing"
                                ? "font-bold text-white"
                                : "text-white"
                            }
                          >
                            Mixing and Mastering
                          </span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  {user && user.access_token ? (
                    <>
                      <Link href="/login">
                        <Button>Log in</Button>
                      </Link>
                      <Link href="/signup">
                        <Button className="bg-white text-black px-3 py-2 rounded-xl hover:bg-white hover:opacity-80">
                          Sign up free
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <CircleUserRound />
                  )}
                </div>
                <div className="flex items-center justify-center gap-10 relative mt-10">
                  <Link
                    className={`${
                      pathname === "/products/remover"
                        ? "font-bold"
                        : "text-black"
                    }`}
                    href={"/products/remover"}
                  >
                    <div className="relative group">
                      <Image
                        src={vocal}
                        alt="vocal"
                        width={30}
                        height={30}
                        className="bg-white px-1 py-1 rounded-full transition-transform duration-200 hover:scale-110"
                      />
                      <span className="absolute left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Remover
                      </span>
                    </div>
                  </Link>
                  <Link
                    className={`${
                      pathname === "/products/splitter"
                        ? "font-bold"
                        : "text-black"
                    }`}
                    href={"/products/splitter"}
                  >
                    <div className="relative group">
                      <Image
                        src={splitter}
                        alt="splitter"
                        width={30}
                        height={30}
                        className="bg-white px-1 py-1 rounded-full transition-transform duration-200 hover:scale-110"
                      />
                      <span className="absolute left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Splitter
                      </span>
                    </div>
                  </Link>

                  <Link
                    className={`${
                      pathname === "/products/advanced-splitter"
                        ? "font-bold"
                        : "text-black"
                    }`}
                    href={"/products/advanced-splitter"}
                  >
                    <div className="relative group">
                      <Image
                        src={advanced}
                        alt="advanced"
                        width={30}
                        height={30}
                        className="bg-white px-1 py-1 rounded-full transition-transform duration-200 hover:scale-110"
                      />
                      <span className="absolute left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Advanced Splitter
                      </span>
                    </div>
                  </Link>

                  <Link
                    className={`${
                      pathname === "/products/chords"
                        ? "font-bold"
                        : "text-black"
                    }`}
                    href={"/products/chords"}
                  >
                    <div className="relative group">
                      <Image
                        src={chords}
                        alt="chords"
                        width={30}
                        height={30}
                        className="bg-white px-1 py-1 rounded-full transition-transform duration-200 hover:scale-110"
                      />
                      <span className="absolute left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Find my chords
                      </span>
                    </div>
                  </Link>
                  <Link
                    className={`${
                      pathname === "/products/mixing"
                        ? "font-bold"
                        : "text-black"
                    }`}
                    href={"/products/mixing"}
                  >
                    <div className="relative group">
                      <Image
                        src={mixing}
                        alt="Mixing"
                        width={30}
                        height={30}
                        className="bg-white px-1 py-1 rounded-full transition-transform duration-200 hover:scale-110"
                      />
                      <span className="absolute left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Mixing and Mastering
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
