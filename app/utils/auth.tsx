import { json, redirect } from "@remix-run/node";
import { tokenCookie } from "~/utils/cookies";

export const requireAuth = async (request: Request) => {
  const cookieHeader = request.headers.get("Cookie");
  const token = await tokenCookie.parse(cookieHeader);

  if (!token) {
    return redirect("/login");
  }

  return token;
};
