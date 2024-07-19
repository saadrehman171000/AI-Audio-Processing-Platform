"use client";
import React from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { useUser } from "@/app/state/state";
import { useRouter } from "next/navigation";

const PricingTable = () => {
  const router = useRouter();
  const { getUser } = useUser();
  console.log(getUser);
  const handleBuyNow = async () => {
    const user = getUser();
    console.log("hello", user);
    console.log("prcingin", user?.accessToken);
    if (!user) {
      console.error("User is not logged in or access token is missing");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/user/subscribe/",
        { name: "BASIC" },
        {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
        }
      );

      router.push(`${response.data.url}`);

      console.log(response.data);
    } catch (error) {
      console.error("Error during subscription:", error);
    }
  };
  const plans = [
    {
      name: "Free",
      price: "$0.00",
      uploadSize: "500 mb",
      formats: "MP3, WAV",
      fastProcessing: "No",
      maxDownloadLength: "30 Seconds",
      stemDownload: "No",
      batchUpload: "No",
      stemDownloads: "0",
      advancedStemDownloads: "0",
    },
    {
      name: "Lite",
      price: "$6.99",
      oldPrice: "$23.00",
      uploadSize: "2GB",
      formats: "MP3, WAV, OGG, FLAC, AVI, MP4, MKV, AIFF, ACC",
      fastProcessing: "Yes",
      maxDownloadLength: "Full Length",
      stemDownload: "Yes",
      batchUpload: "Yes",
      stemDownloads: "10",
      advancedStemDownloads: "10",
    },
    {
      name: "Pro",
      price: "$11.99",
      oldPrice: "$40.00",
      uploadSize: "2GB",
      formats: "MP3, WAV, OGG, FLAC, AVI, MP4, MKV, AIFF, ACC",
      fastProcessing: "Yes",
      maxDownloadLength: "Full Length",
      stemDownload: "Yes",
      batchUpload: "Yes",
      stemDownloads: "50",
      advancedStemDownloads: "100",
    },
    {
      name: "Plus",
      price: "$19.99",
      oldPrice: "$67.00",
      uploadSize: "Unlimited",
      formats: "MP3, WAV, OGG, FLAC, AVI, MP4, MKV, AIFF, ACC",
      fastProcessing: "Yes",
      maxDownloadLength: "Full Length",
      stemDownload: "Yes",
      batchUpload: "Yes",
      stemDownloads: "Unlimited",
      advancedStemDownloads: "Unlimited",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full mt-32 mb-32 p-5 bg-[#00171f] text-white">
      <h2 className="text-4xl md:text-7xl font-bold mb-10 text-center tracking-tighter">
        Choose your package
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 bg-[#00171f] rounded-lg shadow-lg w-full md:w-72  ${
              plan.name === "Pro" || plan.name === "Plus"
                ? "border-8 border-[#1b586c]"
                : "border-2 border-gray-600"
            }`}
          >
            <h3 className="text-xl font-bold mb-2 tracking-tighter">
              {plan.name}
            </h3>
            {plan.oldPrice && (
              <p className="tracking-tighter text-gray-400 line-through mb-2">
                {plan.oldPrice}
              </p>
            )}
            <p className="text-3xl font-bold tracking-tighter mb-4">
              {plan.price}
            </p>
            <Button
              onClick={handleBuyNow}
              className="px-6 py-2 bg-[#1b586c] rounded-full text-white font-extralight mb-4 hover:bg-[#1b586c] hover:opacity-80"
            >
              Buy Now
            </Button>
            <ul className="text-left tracking-tighter">
              <li className="mb-2">
                {" "}
                <span className="font-bold">Upload Size: </span>{" "}
                {plan.uploadSize}
              </li>
              <li className="mb-2">
                <span className="font-bold">Formats: </span> {plan.formats}
              </li>
              <li className="mb-2">
                <span className="font-bold"> Fast Processing: </span>{" "}
                {plan.fastProcessing}
              </li>
              <li className="mb-2">
                <span className="font-bold">Max Download Length: </span>{" "}
                {plan.maxDownloadLength}
              </li>
              <li className="mb-2">
                <span className="font-bold">Stem Download: </span>{" "}
                {plan.stemDownload}
              </li>
              <li className="mb-2">
                <span className="font-bold">Batch Upload: </span>{" "}
                {plan.batchUpload}
              </li>
              <li className="mb-2">
                <span className="font-bold">Number of Stem Downloads: </span>
                {plan.stemDownloads}
              </li>
              <li className="mb-2">
                <span className="font-bold">
                  Number of Advanced Stem Downloads:
                </span>
                {plan.advancedStemDownloads}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
