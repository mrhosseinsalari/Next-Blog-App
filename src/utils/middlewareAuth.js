import setCookieOnReq from "./setCookieOnReq";

export async function middlewareAuth(req) {
  const options = setCookieOnReq(req.cookies);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
    options
  );

  const { data } = await res.json();
  const { user } = data || {};
  return user;
}
