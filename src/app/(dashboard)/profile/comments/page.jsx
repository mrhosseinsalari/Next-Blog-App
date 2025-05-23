import { Suspense } from "react";
import Spinner from "@/ui/Spinner";
import CommentsTable from "./_/components/CommentsTable";

export const revalidate = 0;

function Page() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-secondary-700 mb-8 font-bold text-xl">
          لیست نظرات
        </h1>
      </div>
      <Suspense fallback={<Spinner />}>
        <CommentsTable />
      </Suspense>
    </div>
  );
}

export default Page;
