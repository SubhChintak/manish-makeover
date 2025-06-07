
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'Category Name 01' | 'Category Name 02';
  bestSeller: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Product Name 01",
    description: "Product description goes here. This is a sample product to showcase the design and functionality of the product card.",
    price: 599,
    imageUrl: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Category Name 01",
    bestSeller: true,
  },
  {
    id: "2",
    name: "Product Name 02",
    description: "Product description goes here. This is a sample product to showcase the design and functionality of the product card.",
    price: 599,
    imageUrl: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Category Name 02",
    bestSeller: true,
  },
  {
    id: "3",
    name: "Product Name 03",
    description: "Product description goes here. This is a sample product to showcase the design and functionality of the product card.",
    price: 599,
    imageUrl: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Category Name 02",
    bestSeller: false,
  },
  {
    id: "4",
   name: "Product Name 04",
    description: "Product description goes here. This is a sample product to showcase the design and functionality of the product card.",
    price: 599,
    imageUrl: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Category Name 01",
    bestSeller: true,
  },
  {
    id: "5",
    name: "Product Name 05",
    description: "Product description goes here. This is a sample product to showcase the design and functionality of the product card.",
    price: 599,
    imageUrl: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Category Name 01",
    bestSeller: true,
  },
  {
    id: "6",
    name: "Product Name 06",
    description: "Product description goes here. This is a sample product to showcase the design and functionality of the product card.",
    price: 599,
    imageUrl: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Category Name 02",
    bestSeller: false,
  },
  {
    id: "7",
    name: "Product Name 07",
    description: "Product description goes here. This is a sample product to showcase the design and functionality of the product card.",
    price: 599,
    imageUrl: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Category Name 02",
    bestSeller: false,
  },
  {
    id: "8",
   name: "Product Name 08",
    description: "Product description goes here. This is a sample product to showcase the design and functionality of the product card.",
    price: 599,
    imageUrl: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Category Name 01",
    bestSeller: true,
  },
  {
    id: "9",
   name: "Product Name 01",
    description: "Product description goes here. This is a sample product to showcase the design and functionality of the product card.",
    price: 599,
    imageUrl: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Category Name 01",
    bestSeller: true,
  },
  {
    id: "10",
    name: "Product Name 10",
    description: "Product description goes here. This is a sample product to showcase the design and functionality of the product card.",
    price: 599,
    imageUrl: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Category Name 02",
    bestSeller: false,
  }
];

export const getBestSellers = () => products.filter(product => product.bestSeller);
export const getPhoneCovers = () => products.filter(product => product.category === 'Category Name 01');
export const getHandcrafted = () => products.filter(product => product.category === 'Category Name 02');
