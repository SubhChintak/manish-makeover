
import { Product } from "@/data/products";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  reverse?: boolean;
}

export function ProductCard({ product, reverse = false }: ProductCardProps) {
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in ordering the "${product.name}" for ${formatCurrency(product.price)}. Could you provide more details?`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
      className="group"
    >
      <Card className={`product-card w-[280px] bg-card/90 backdrop-blur-sm text-light shadow-xl border-accent/20 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 ${reverse ? 'animate-fade-in' : ''}`}>
        <CardHeader className="p-0 relative overflow-hidden">
          <motion.div 
            className="product-image relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-full w-full object-cover transition-all duration-700 group-hover:brightness-110"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </CardHeader>
        
        <CardContent className="p-6 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-playfair font-medium line-clamp-1 text-light text-lg mb-2 group-hover:text-accent transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-sm text-light/70 line-clamp-2 mb-3 leading-relaxed">
              {product.description}
            </p>
            <motion.p 
              className="font-semibold text-accent text-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {formatCurrency(product.price)}
            </motion.p>
          </motion.div>
        </CardContent>
        
        <CardFooter className="p-6 pt-0">
          <motion.div
            className="w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              className="w-full bg-accent text-dark hover:bg-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/30 font-medium"
              onClick={handleWhatsAppOrder}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Order via WhatsApp
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}