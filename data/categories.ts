// data/categories.ts
// Define the Category interface to specify the structure of a category
export interface Category {
  id: string;
  title: string;
  color: string;
}

// Define an array of categories
export const CATEGORIES: Category[] = [
  { id: "c1", title: "Italian", color: "#f5428d" },
  { id: "c2", title: "Quick & Easy", color: "#f54242" },
  { id: "c3", title: "Hamburgers", color: "#f5a442" },
  { id: "c4", title: "German", color: "#f5d142" },
  { id: "c5", title: "Light & Lovely", color: "#368dff" },
  { id: "c6", title: "Exotic", color: "#41d95d" },
  { id: "c7", title: "Breakfast", color: "#9eecff" },
  { id: "c8", title: "Asian", color: "#b9ffb0" },
  { id: "c9", title: "French", color: "#ffc7ff" },
  { id: "c10", title: "Summer", color: "#47fced" },
];
