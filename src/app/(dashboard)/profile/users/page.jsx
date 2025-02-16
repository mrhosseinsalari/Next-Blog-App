import { Suspense } from "react";
import Spinner from "@/ui/Spinner";
import UsersTable from "./_components/UsersTable";

function Page() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-secondary-700 mb-8 font-bold text-xl">
          لیست کاربران
        </h1>
      </div>
      <Suspense fallback={<Spinner />}>
        <UsersTable />
      </Suspense>
    </div>
  );
}

export default Page;
