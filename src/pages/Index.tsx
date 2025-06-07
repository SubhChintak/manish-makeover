
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { InfiniteProductScroll } from "@/components/InfiniteProductScroll";
import { ProductScrollWithControls } from "@/components/ProductScrollWithControls";
import { AboutMe } from "@/components/AboutMe";
import { PromotionalMarquee } from "@/components/PromotionalMarquee";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { BentoGallery } from "@/components/BentoGallery";
import { getBestSellers, products } from "@/data/products";
import { VortexDemo } from "@/components/VortexDemo";

const Index = () => {
  const [bestSellers, setBestSellers] = useState(getBestSellers());
  const [allProducts, setAllProducts] = useState(products);
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
        <PromotionalMarquee />

        <VortexDemo/>
        
        <div id="best-sellers">
          <InfiniteProductScroll 
            title="Trending Now" 
            products={bestSellers} 
          />
        </div>
        
        <div id="all-products">
          <ProductScrollWithControls 
            title="All Services" 
            products={allProducts}
          />
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