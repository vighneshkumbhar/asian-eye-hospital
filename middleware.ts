import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|studio).*)"],
};
// Note: We exclude /studio and other asset/public routes from middleware so Sanity Studio remains accessible.
