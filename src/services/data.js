import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUsersApi } from "./authService";
import { getPosts } from "./postService";
import { getAllCommentsApi } from "./commentService";

export async function fetchCardData() {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const data = await Promise.all([
      getAllUsersApi(options),
      getAllCommentsApi(options),
      getPosts(),
    ]);

    const numberOfUsers = Number(data[0].users.length ?? "0");
    const numberOfComments = Number(data[1].commentsCount ?? "0");
    const numberOfPosts = Number(data[2].length ?? "0");

    return {
      numberOfUsers,
      numberOfPosts,
      numberOfComments,
    };
  } catch (error) {
    console.log(error.response.data.message);
    throw new Error("خطا در بارگذاری اطلاعات");
  }
}
