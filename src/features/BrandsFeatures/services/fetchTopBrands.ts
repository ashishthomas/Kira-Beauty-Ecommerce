export type BrandInfo = {
  link: string;
  image: string;
  products: string[];
};

export type BrandObject = Record<string, BrandInfo>;

const fetchTopBrands = async (): Promise<BrandObject[]> => {
  try {
    const response = await fetch("/data/topBrands.json");
    if (!response.ok) {
      throw new Error("Failed to fetch top brands");
    }
    const data: BrandObject[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching top brands:", error);
    return [];
  }
};

export default fetchTopBrands;
