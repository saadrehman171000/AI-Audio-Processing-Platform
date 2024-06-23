"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselCard = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const quotes = [
    "Music is the universal language of mankind",
    "Where words fail, music speaks.",
    "Music can change the world because it can change people.",
    "One good thing about music, when it hits you, you feel no pain.",
    "Without music, life would be a mistake.",
  ];

  return (
    <div className="max-w-7xl mx-auto p-5 px-20 md:px-10 w-full flex items-center justify-center bg-[#00171f] text-white relative my-44">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-4xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {quotes.map((quote, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-[#00171f] border-none">
                  <CardContent className="flex items-center justify-center p-6 text-center">
                    <span className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tighter">
                      {quote}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <CarouselPrevious className="text-white text-3xl">
            &larr;
          </CarouselPrevious>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <CarouselNext className="text-white text-3xl">&rarr;</CarouselNext>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselCard;
