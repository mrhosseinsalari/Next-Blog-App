"use client";

import Breadcrumbs from "@/ui/BreadCrumbs";
import EditProfileForm from "./_/EditProfileForm";
import { useAuth } from "@/context/AuthContext";
import Spinner from "@/ui/Spinner";

function Page() {
  const { isLoading, user } = useAuth();

  const breadcrumbs = [
    {
      label: "پروفایل",
      href: "/profile",
    },
    {
      label: "ویرایش پروفایل کاربر",
      href: "edit-profile",
      active: true,
    },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {isLoading ? <Spinner /> : <EditProfileForm userToEdit={user} />}
    </div>
  );
}

export default Page;
