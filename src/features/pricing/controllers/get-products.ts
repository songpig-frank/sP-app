import { stripeAdmin } from '@/libs/stripe/stripe-admin';

export async function getProducts() {
  const products = await stripeAdmin.products.list({
    active: true,
    expand: ['data.default_price'],
  });

  const prices = await stripeAdmin.prices.list({
    active: true,
  });

  const productsWithPrices = products.data.map((product) => ({
    ...product,
    prices: prices.data.filter((price) => price.product === product.id),
  }));

  return productsWithPrices;
}
