export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface Product2 {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
  description?: string;
}
