export type BrandInfo = {
  link: string;
  imageKey: string;
  products: string[];
};

export type BrandObject = Record<string, BrandInfo>;

const fetchFragranceBrands = async (): Promise<BrandObject[]> => {
  try {
    const response = await fetch("/data/fragranceBrands.json");
    if (!response.ok) {
      throw new Error("Failed to fetch fragrance brands");
    }
    const data: BrandObject[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching fragrance brands:", error);
    return [];
  }
};

export default fetchFragranceBrands;
