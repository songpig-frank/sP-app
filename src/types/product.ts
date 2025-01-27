export interface ProductType {
  id: string;
  name: string;
  description?: string;
  // Remove image temporarily
  // image: string | null;
  prices: PriceType[];
}

export interface PriceType {
  id: string;
  currency: string;
  unit_amount: number;
}

export interface ProductWithPrices extends ProductType {
  prices: PriceType[];
  image: string | null;
} 