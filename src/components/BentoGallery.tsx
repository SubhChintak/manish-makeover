
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  size: string;
  description?: string;
}

export function BentoGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Custom Phone Cover",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=800&fit=crop&crop=center",
      size: "normal",
      description: "Personalized phone covers with unique artistic designs"
    },
    {
      id: 2,
      title: "Handcrafted Jewelry",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1200&fit=crop&crop=center",
      size: "tall",
      description: "Elegant handmade jewelry pieces crafted with precision"
    },
    {
      id: 3,
      title: "Artistic Design",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=600&fit=crop&crop=center",
      size: "wide",
      description: "Creative artistic designs for various applications"
    },
    {
      id: 4,
      title: "Unique Accessories",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=800&fit=crop&crop=center",
      size: "normal",
      description: "One-of-a-kind accessories for every occasion"
    },
    {
      id: 5,
      title: "Premium Collection",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=1200&fit=crop&crop=center",
      size: "large",
      description: "Our finest premium collection showcasing exceptional craftsmanship"
    },
    {
      id: 6,
      title: "Custom Art",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop&crop=center",
      size: "normal",
      description: "Bespoke art pieces tailored to your vision"
    },
    {
      id: 7,
      title: "Special Edition",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop&crop=center",
      size: "normal",
      description: "Limited edition pieces with exclusive designs"
    },
    // {
    //   id: 8,
    //   title: "Featured Work",
    //   image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&h=1200&fit=crop&crop=center",
    //   size: "tall",
    //   description: "Highlighted masterpieces from our portfolio"
    // }
  ];

  const getSizeClass = (size: string) => {
    switch (size) {
      case "tall":
        return "md:row-span-2";
      case "wide":
        return "md:col-span-2";
      case "large":
        return "md:col-span-2 md:row-span-2";
      default:
        return "";
    }
  };

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-16">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4 text-light">
            Gallery Showcase
          </h2> */}
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white dark:from-neutral-600 dark:to-white text-4xl md:text-4xl lg:text-5xl py-2 md:py-10 relative z-20 font-playfair font-semibold tracking-tight mb-4">
        My Recent Works
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto text-lg">
            Explore our collection of handcrafted items and custom designs. Each piece tells a unique story of artistry and creativity.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                rotateX: 5,
                rotateY: 2,
              }}
              style={{ 
                perspective: "1000px",
                transformStyle: "preserve-3d"
              }}
              className={`
                relative overflow-hidden rounded-2xl bg-card/90 backdrop-blur-sm border border-accent/20 
                hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 cursor-pointer group
                ${getSizeClass(item.size)}
              `}
              onClick={() => openLightbox(item)}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <h3 className="font-playfair font-medium text-xl mb-2 text-accent">
                  {item.title}
                </h3>
                <p className="text-sm text-light/90 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>

              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="absolute inset-0 bg-dark/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-accent/20">
                <motion.button
                  className="absolute top-4 right-4 z-10 p-2 bg-dark/80 text-accent rounded-full hover:bg-dark/90 transition-colors"
                  onClick={closeLightbox}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
                
                <motion.img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className="p-6 bg-gradient-to-t from-dark/90 to-transparent"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="font-playfair font-semibold text-2xl mb-2 text-accent">
                    {selectedImage.title}
                  </h3>
                  <p className="text-light/80 text-lg leading-relaxed">
                    {selectedImage.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}