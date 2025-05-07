export interface Category {
  name: string;
  imageKey: string;
  price: string;
  description: string;
}

const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(
      `${window.location.origin}/data/categories.json`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data: Category[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export default fetchCategories;
