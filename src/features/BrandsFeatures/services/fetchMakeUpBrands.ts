export type BrandInfo = {
  link: string;
  image: string;
  products: string[];
};

export type BrandObject = Record<string, BrandInfo>;

const fetchMakeUpBrands = async (): Promise<BrandObject[]> => {
  try {
    const response = await fetch("/data/makeUpBrands.json");
    if (!response.ok) {
      throw new Error("Failed to fetch MakeUp brands");
    }
    const data: BrandObject[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching MakeUp brands:", error);
    return [];
  }
};

export default fetchMakeUpBrands;
