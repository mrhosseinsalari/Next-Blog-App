import { updateCommentApi } from "@/services/commentService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useChangeCommentStatus() {
  const { isPending: isUpdating, mutate: changeCommentStatus } = useMutation({
    mutationFn: updateCommentApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isUpdating, changeCommentStatus };
}
