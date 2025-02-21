"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Select from "./Select";

function FilterDropDown({ options, filterField }) {
  const searchParams = useSearchParams();
  const value = searchParams.get(filterField) || "";
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", "1");
    newParams.set("limit", "6");

    newParams.set(filterField, e.target.value);
    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  return <Select value={value} onChange={handleChange} options={options} />;
}

export default FilterDropDown;
