import { ProductType } from '@/types/product';
import { useEffect, useState } from 'react';

export const AccountPage = () => {
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    // Fetch product data here and set it
    const fetchProduct = async () => {
      const fetchedProduct = await getProduct(); // Replace with your fetch logic
      setProduct(fetchedProduct);
    };
    fetchProduct();
  }, []);

  if (!product) return <div>Loading...</div>;

  const userProduct = product as ProductType; // Now this should work
  console.log('Product:', product);
}; 