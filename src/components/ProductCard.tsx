
import { Product } from "@/data/products";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

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
    <Card className={`product-card w-[280px] bg-card text-light shadow-lg border-accent/20 ${reverse ? 'animate-fade-in' : ''}`}>
      <CardHeader className="p-0">
        <div className="product-image">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover transition-all hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-playfair font-medium line-clamp-1 text-light">{product.name}</h3>
        <p className="text-sm text-light/70 line-clamp-2 mt-1">{product.description}</p>
        <p className="mt-2 font-semibold text-accent">{formatCurrency(product.price)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-accent text-dark hover:bg-gold" onClick={handleWhatsAppOrder}>
          <MessageCircle className="mr-2 h-4 w-4" />
          Order via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
}
