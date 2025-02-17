import { useAuth } from "@/context/AuthContext";
import SpinnerMini from "@/ui/SpinnerMini";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

function Logout() {
  const { isLoading, logout } = useAuth();
  const router = useRouter();

  const handleClick = async () => {
    await logout();
    router.push("/signin");
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-x-2 rounded-2xl font-medium transition-all 
      duration-200 text-secondary-700 py-3 px-4 hover:text-red-400 cursor-pointer"
    >
      {isLoading ? (
        <SpinnerMini />
      ) : (
        <>
          <ArrowLeftStartOnRectangleIcon className="ml-4 h-5 w-5" />
          <span>خروج</span>
        </>
      )}
    </button>
  );
}

export default Logout;
