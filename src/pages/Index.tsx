
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductScroll } from "@/components/ProductScroll";
import { AboutMe } from "@/components/AboutMe";
import { PromotionalMarquee } from "@/components/PromotionalMarquee";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { BentoGallery } from "@/components/BentoGallery";
import { getBestSellers, products } from "@/data/products";
import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import { VortexDemo } from "@/components/VortexDemo";

// Filter products by category
const getMensProducts = () => products.filter(product => 
  ["1", "3", "4", "8", "10"].includes(product.id)
);

const getWomensProducts = () => products.filter(product => 
  ["2", "5", "6", "7", "9"].includes(product.id)
);

const Index = () => {
  const [bestSellers, setBestSellers] = useState(getBestSellers());
  const [mensProducts, setMensProducts] = useState(getMensProducts());
  const [womensProducts, setWomensProducts] = useState(getWomensProducts());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-background"></div>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
       

        {/* <BackgroundLinesDemo/> */}
        <PromotionalMarquee />
        <VortexDemo/>
        {/* <PromotionalMarquee /> */}
        

        
        {/* <div id="best-sellers">
          <ProductScroll 
            title="Trending Now" 
            products={bestSellers} 
          />
        </div> */}
        
        <div id="all-products" className="space-y-8">
          <div id="mens-products">
            <ProductScroll 
              title="Trending Now" 
              products={mensProducts}
            />
          </div>
          
          <div id="womens-products">
            <ProductScroll 
              title="All Services" 
              products={womensProducts} 
              reverse={true}
            />
          </div>
        </div>
        
        <div id="gallery">
          <BentoGallery />
        </div>
        
        <div id="about">
          <AboutMe />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
