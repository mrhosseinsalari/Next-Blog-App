import http from "./httpService";

export async function getPosts(queries = "", options) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`,
    options
  );
  const { data } = await res.json();
  const { posts } = data || {};

  return posts;
}

export async function getPostBySlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`,
    { cache: "no-store" }
  );
  const { data } = await res.json();
  const { post } = data || {};

  return post;
}

export async function likePostApi(postId) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}

export async function bookmarkPostApi(postId) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}
