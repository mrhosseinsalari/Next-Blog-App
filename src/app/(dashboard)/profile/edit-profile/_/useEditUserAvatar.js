import { useAuth } from "@/context/AuthContext";
import { editUserAvatarApi } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useEditUserAvatar() {
  const { dispatch } = useAuth();

  const { isPending: isEditing, mutate: editUserAvatar } = useMutation({
    mutationFn: editUserAvatarApi,
    onSuccess: ({ user, message }) => {
      dispatch({ type: "user/edit-avatar", payload: user });
      toast.success(message);
    },
    onError: (err) => {
      const errorMsg = err?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    },
  });

  return { isEditing, editUserAvatar };
}
