import http from "./httpService";

export async function createCommentApi(data, options) {
  return http.post("/comment/add", data, options).then(({ data }) => data.data);
}

export async function getAllCommentsApi(options = {}) {
  return http.get("/comment/list", options).then(({ data }) => data.data);
}

export async function updateCommentApi({ commentId, data }, options = {}) {
  return http
    .patch(`/comment/update/${commentId}`, data, options)
    .then(({ data }) => data.data);
}

export async function removeCommentApi(id, options) {
  return http
    .delete(`/comment/remove/${id}`, options)
    .then(({ data }) => data.data);
}
