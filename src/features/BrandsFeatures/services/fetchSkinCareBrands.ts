export type BrandInfo = {
  link: string;
  imageKey: string;
  products: string[];
};

export type BrandObject = Record<string, BrandInfo>;

const fetchSkinCareBrands = async (): Promise<BrandObject[]> => {
  try {
    const response = await fetch("/data/skinCareBrands.json");
    if (!response.ok) {
      throw new Error("Failed to fetch skincare brands");
    }
    const data: BrandObject[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching skincare brands:", error);
    return [];
  }
};

export default fetchSkinCareBrands;
