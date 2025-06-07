
import { Card, CardContent } from "@/components/ui/card";

export function AboutMe() {
  return (
    <section className="py-12 ">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* <h2 className="text-center mb-8 font-semibold">About The Artist</h2> */}
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white dark:from-neutral-600 dark:to-white text-4xl md:text-4xl lg:text-5xl py-2 md:py-10 relative z-20 font-playfair font-semibold tracking-tight mb-8">
        About The Artist
         </h2>
          <Card>
            <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center ">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Artist portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                {/* <h3 className="text-xl font-medium mb-2">Manish Saha</h3> */}
                <h3 className="bg-clip-text text-transparent mb-2 bg-gradient-to-b from-neutral-600 to-white dark:from-neutral-600 dark:to-white text-xl md:text-2xl lg:text-3xl  font-playfair font-semibold">
        Manish Saha
         </h3>


                {/* <p className="text-muted-foreground mb-4">
                  I'm a passionate artist specializing in custom phone covers and handcrafted items.
                </p>
                <p className="text-muted-foreground">
                  Each piece is carefully created in my home studio, ensuring attention to detail and quality.
                </p> */}

                <p className="text-sm md:text-lg text-neutral-400 dark:text-neutral-400 text-center lg:text-left mb-4">
        Hi, I’m Manish — a makeover artist who believes beauty is deeply personal.
From flawless skin preps to head-turning hairstyles, I love helping people feel like the best version of themselves.
Every look I create is fueled by passion, precision, and a genuine love for the art of transformation.
      </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
