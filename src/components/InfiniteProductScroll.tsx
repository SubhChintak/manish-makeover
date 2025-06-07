
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { useState } from "react";

interface InfiniteProductScrollProps {
  title: string;
  products: Product[];
}

export function InfiniteProductScroll({ title, products }: InfiniteProductScrollProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Duplicate products to create seamless loop
  const duplicatedProducts = [...products, ...products];

  return (
    <section className="py-8 overflow-hidden">
      <div className="container">
        <h2 className="mb-6 font-playfair font-semibold text-3xl">{title}</h2>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex gap-4"
            animate={{
              x: isHovered ? 0 : -280 * products.length - (16 * products.length)
            }}
            transition={{
              duration: isHovered ? 0 : products.length * 8,
              ease: "linear",
              repeat: isHovered ? 0 : Infinity,
            }}
            style={{ width: `${(280 + 16) * duplicatedProducts.length}px` }}
          >
            {duplicatedProducts.map((product, index) => (
              <div key={`${product.id}-${index}`} className="flex-shrink-0 w-[280px]">
                <ProductCard product={product} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}