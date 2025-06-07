import React from "react";
import { Vortex } from "@/components/ui/vortex";

export function VortexDemo() {

    const handleCall = () => {
    window.open("tel:+1234567890");
  };

const handleWhatsApp = () => {
    window.open("https://wa.me/?text=Hi, I have a question about your products.", "_blank");
  };

  return (
    <div className=" mx-auto rounded-md  w-full h-svh max-h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full "
      >
       {/* <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          The hell is this?
        </h2> */}
        {/* <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar.
        </p>  */}

        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white dark:from-neutral-600 dark:to-white text-4xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 font-playfair font-bold tracking-tight">
        Welcome You <br/> To <br /> <span className="text-gold"> Manish Makeover </span>
      </h2>
      <h2 className="text-white text-2xl md:text-6xl font-playfair text-center">
          Where Every Detail Matters!
        </h2>
      <p className="max-w-xl mt-3 mx-auto text-sm md:text-lg text-neutral-400 dark:text-neutral-400 text-center">
        More than just a salon — we craft personalized transformations that elevate your natural beauty.
Step in for expert care, step out with unmatched confidence.
      </p>
        <div className="flex flex-row items-center gap-4 mt-6">
          <button onClick={handleCall} className="px-4 py-2  font-medium bg-primary hover:bg-primary/70 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Call Now
          </button>
          
          <button onClick={handleWhatsApp} className="px-4 py-2  font-medium bg-gold hover:bg-gold/70 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            WhatsApp Me
          </button>
         
        </div>
      </Vortex>
    </div>
  );
}
