import { getCategoriesApi } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesApi,
  });

  // {_id, title, englishTitle, ...}
  const { categories: rawCategories = [] } = data || {};

  // {label, value}
  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  // {title, enTitle}
  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, categories, transformedCategories };
}
