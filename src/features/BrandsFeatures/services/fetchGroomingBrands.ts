export type BrandInfo = {
  link: string;
  imageKey: string;
  products: string[];
};

export type BrandObject = Record<string, BrandInfo>;

const fetchGroomingBrands = async (): Promise<BrandObject[]> => {
  try {
    const response = await fetch("/data/groomingBrands.json");
    if (!response.ok) {
      throw new Error("Failed to fetch grooming brands");
    }
    const data: BrandObject[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching grooming brands:", error);
    return [];
  }
};

export default fetchGroomingBrands;
