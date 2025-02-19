import { useAuth } from "@/context/AuthContext";
import { editUserProfileApi } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useEditUserProfile() {
  const { dispatch } = useAuth();

  const { isPending: isEditing, mutate: editUserProfile } = useMutation({
    mutationFn: editUserProfileApi,
    onSuccess: ({ user, message }) => {
      dispatch({ type: "user/edit-profile", payload: user });
      toast.success(message);
    },
    onError: (err) => {
      const errorMsg = err?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    },
  });

  return { isEditing, editUserProfile };
}
