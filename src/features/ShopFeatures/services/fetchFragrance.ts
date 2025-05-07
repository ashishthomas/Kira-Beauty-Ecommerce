export type Product = {
  name: string;
  imageKey: string;
  price: string;
  description: string;
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
