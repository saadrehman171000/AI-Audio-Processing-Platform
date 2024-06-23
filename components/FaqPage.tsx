import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqPage = () => {
  return (
    <div className="max-w-7xl mx-auto w-full my-32 p-5 px-28  bg-[#00171f] text-white">
      <h2 className="text-4xl font-bold mb-10 text-center">FAQ</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 flex flex-col gap-10 items-start justify-start text-xl font-semibold">
          <div className="mb-4">Overview</div>
          <div className="mb-4">Packs and Minutes</div>
        </div>
        <div className="md:w-2/3">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-normal">
                How do I sign up/sign in?
              </AccordionTrigger>
              <AccordionContent className="pl-5">
                To sign up or sign in, click on the 'Sign Up' or 'Sign In'
                button on the top right corner of the homepage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-normal">
                How do I split a full track?
              </AccordionTrigger>
              <AccordionContent className="pl-5">
                To split a full track, use our built-in editor available in the
                'Create' section.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-normal">
                What is the expiration date on paid packages?
              </AccordionTrigger>
              <AccordionContent className="pl-5">
                Paid packages expire one year from the date of purchase.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-normal">
                What does the "number of minutes in a pack" mean?
              </AccordionTrigger>
              <AccordionContent className="pl-5">
                The "number of minutes in a pack" refers to the total duration
                of audio you can create or edit using that pack.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-normal">
                How are the minutes deducted from my account?
              </AccordionTrigger>
              <AccordionContent className="pl-5">
                Minutes are deducted based on the length of the audio files you
                process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-normal">
                Where can I see the number of remaining minutes?
              </AccordionTrigger>
              <AccordionContent className="pl-5">
                You can see the number of remaining minutes in your account
                settings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-normal">
                How can I add more minutes to my account?
              </AccordionTrigger>
              <AccordionContent className="pl-5">
                You can add more minutes by purchasing additional packs from the
                pricing page.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
