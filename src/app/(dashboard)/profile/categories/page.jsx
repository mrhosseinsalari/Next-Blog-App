import { Suspense } from "react";
import Spinner from "@/ui/Spinner";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";
import CategoriesTable from "./_components/CategoriesTable";

function Page() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-y-8 items-center justify-between mb-12">
        <h1 className="text-secondary-700 font-bold text-xl">
          لیست دسته بندی ها
        </h1>
        <Link
          href="/profile/categories/create"
          className="flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0
          transition-colors hover:bg-primary-700"
        >
          <span>ایجاد دسته بندی</span>
          <PlusIcon className="w-5" />
        </Link>
      </div>
      <Suspense fallback={<Spinner />}>
        <CategoriesTable />
      </Suspense>
    </div>
  );
}

export default Page;
