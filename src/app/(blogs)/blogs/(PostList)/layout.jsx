import { Suspense } from "react";
import CategoryList from "../_components/CategoryList";
import Spinner from "@/ui/Spinner";
import Search from "@/ui/Search";
import FilterDropDown from "@/ui/FilterDropDown";

export const metadata = {
  title: "بلاگ ها",
};

const sortOptions = [
  {
    label: "تاریخ ایجاد (جدید ترین)",
    value: "latest",
  },
  {
    label: "تاریخ ایجاد (قدیمی ترین)",
    value: "earliest",
  },
  {
    label: "محبوبیت",
    value: "popular",
  },
  {
    label: "زمان مطالعه (نزولی)",
    value: "time_desc",
  },
  {
    label: "زمان مطالعه (صعودی)",
    value: "time_asc",
  },
];

function Layout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-lg font-bold">لیست بلاگ ها</h1>
        <Search />
        <FilterDropDown options={sortOptions} filterField="sort" />
      </div>
      <div className="grid grid-cols-12 gap-4 sm:gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-secondary-500 mb-6 lg:mb-0">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
