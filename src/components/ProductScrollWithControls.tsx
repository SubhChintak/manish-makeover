
import { useRef, useState } from "react";
import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductScrollWithControlsProps {
  title: string;
  products: Product[];
}

export function ProductScrollWithControls({ title, products }: ProductScrollWithControlsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollAmount = 280 + 16; // card width + gap
    
    const newScrollLeft = direction === "left" 
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });

    // Update scroll buttons state after scrolling
    setTimeout(() => {
      if (!containerRef.current) return;
      setCanScrollLeft(containerRef.current.scrollLeft > 0);
      setCanScrollRight(
        containerRef.current.scrollLeft < 
        containerRef.current.scrollWidth - containerRef.current.clientWidth - 10
      );
    }, 300);
  };

  const handleScrollEvent = () => {
    if (!containerRef.current) return;
    
    setCanScrollLeft(containerRef.current.scrollLeft > 0);
    setCanScrollRight(
      containerRef.current.scrollLeft < 
      containerRef.current.scrollWidth - containerRef.current.clientWidth - 10
    );
  };
  
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-playfair font-semibold text-3xl">{title}</h2>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-md bg-card/80 backdrop-blur-sm border-accent/30 text-accent hover:bg-accent hover:text-dark"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-md bg-card/80 backdrop-blur-sm border-accent/30 text-accent hover:bg-accent hover:text-dark"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div 
            ref={containerRef}
            className="flex gap-4 pb-4 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={handleScrollEvent}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[280px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}