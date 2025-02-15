"use server";

import { createCommentApi, removeCommentApi } from "@/services/commentService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// export async function createComment(postId, parentId, formData)

export async function createComment(prevState, { formData, postId, parentId }) {
  const cookiesStore = cookies();
  const options = setCookieOnReq(cookiesStore);

  const rawFormData = {
    postId,
    parentId,
    text: formData.get("text"),
  };

  try {
    const { message } = await createCommentApi(rawFormData, options);
    revalidatePath("/blogs/[slug]");
    return { message };
  } catch (err) {
    const error = err?.response?.data?.message;
    return { error };
  }
}

export async function removeComment(prevState, { formData, id }) {
  const cookiesStore = cookies();
  const options = setCookieOnReq(cookiesStore);

  try {
    const { message } = await removeCommentApi(id, options);
    revalidatePath("/profile/comments");
    return { message };
  } catch (err) {
    const error = err?.response?.data?.message;
    return { error };
  }
}
