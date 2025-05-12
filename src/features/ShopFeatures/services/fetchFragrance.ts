export type Product = {
  id: number;
  name: string;
  brandName: string;
  imageKey: string;
  price: string;
  offerPrice: string;
  description: string;
  itemsLeft: number;
  category: string;
  details: string;
  maxLimit : number
};

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("/data/shopdata/FragranceData.json");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching fragrance data:", error);
    return [];
  }
};
