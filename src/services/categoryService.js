import http from "./httpService";

export async function getCategoriesApi(options = {}) {
  return http.get("/category/list", options).then(({ data }) => data.data);
}

export async function createCategoryApi(data) {
  return http.post("/category/add", data).then(({ data }) => data.data);
}
