import { redirect } from "@tanstack/react-router";

/** Old rental-site URLs (listings, property, cities, post-ad, login) go home. */
export function redirectHome(): never {
  throw redirect({ href: "/", statusCode: 301 });
}
