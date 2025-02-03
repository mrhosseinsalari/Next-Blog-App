import { getCategoriesApi } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesApi,
  });
}
