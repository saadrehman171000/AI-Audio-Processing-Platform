import {
  Album,
  Facebook,
  Github,
  Headset,
  Instagram,
  Twitch,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="bg-[#00171f]">
      <div className="max-w-7xl mx-auto p-5 px-10 w-full text-white">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-2xl">MUSIX</h1>
              <p>Follow us</p>
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center justify-center gap-2">
                  <Facebook />
                  <Instagram />
                  <Twitter />
                  <Twitch />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Github />
                  <Youtube />
                  <Headset />
                  <Album />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-bold">Explore</h1>
              <div className="flex flex-col gap-2">
                <Link href={"#"}>Help</Link>
                <Link href={"#"}>Pricing</Link>
                <Link href={"#"}>For Business</Link>
                <Link href={"#"}>Tools and API</Link>
                <Link href={"#"}>Support</Link>
                <Link href={"#"}>Affiliate Program</Link>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-bold">Company</h1>
              <div className="flex flex-col gap-2">
                <Link href={"#"}>About</Link>
                <Link href={"#"}>Blog</Link>
                <Link href={"#"}>Media Kit</Link>
                <Link href={"#"}>Press</Link>
                <Link href={"#"}>Ambassador Program</Link>
              </div>
            </div>
            <div className="flex flex-col gap-5 max-w-sm">
              <h1 className="text-xl font-bold">Newsletter</h1>
              <p>
                Get the ideas, tools and tips you need to grow your sound
                straight to your inbox.
              </p>
              <div className="flex gap-2">
                <Input className="rounded-xl" />
                <Button className="bg-white rounded-xl px-2 py-2 hover:bg-white text-black hover:opacity-80">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-start gap-10 text-slate-400 tracking-tighter">
            <h1>© 2024 OmniSale GMBH</h1>
            <Link href={"#"}>Terms of service</Link>
            <Link href={"#"}>Privacy policy</Link>
            <Link href={"#"}>Refund Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
