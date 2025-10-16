import { Product } from "@/lib/api/product";
import moment from "moment";

export const getFlashSaleProducts = (products: Product[], count = 5) => {
  const men = products.filter((p) => p.category === "men's clothing");
  const women = products.filter((p) => p.category === "women's clothing");

  const result: Product[] = [];

  for (let i = 0; i < count; i++) {
    if (men[i]) result.push(men[i]);
    if (women[i]) result.push(women[i]);
  }

  return result;
};

export const getMostPopularProducts = (products: Product[], count = 5) => {
  return products
    .sort((a, b) => b.rating.count - a.rating.count)
    .slice(0, count);
};

export const getLatestProducts = (products: Product[], count = 5) => {
  return products
    .sort(
      (a, b) => (b?.createdAt?.getTime() ?? 0) - (a?.createdAt?.getTime() ?? 0)
    )
    .slice(0, count);
};

const getRandomDate = () => {
  const endDate = moment().toDate();

  const days = Math.floor(Math.random() * 100);
  const startDate = moment(endDate).subtract(days, "days").toDate();

  return startDate;
};

export const mapProducts = (products: Product[]) => {
  return products.map((product) => ({
    ...product,
    createdAt: getRandomDate(),
  }));
};
