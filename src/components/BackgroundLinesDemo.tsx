import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center bg-dark w-full h-svh max-h-screen flex-col px-4 ">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white dark:from-neutral-600 dark:to-white text-4xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 font-playfair font-bold tracking-tight">
        Welcome to <br /> <span className="text-gold"> Manish Makeover </span>
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 dark:text-neutral-400 text-center">
        More than just a salon — we craft personalized transformations that elevate your natural beauty.
Step in for expert care, step out with unmatched confidence.


      </p>
      
    </BackgroundLines>
  );
}


{/* <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 font-playfair font-bold tracking-tight">
        Sanjana Airlines, <br /> Sajana Textiles.
      </h2> */}