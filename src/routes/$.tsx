import { createFileRoute, notFound } from "@tanstack/react-router";
import { redirectHome } from "@/lib/go-home";

const OLD = new Set([
  "islamabad",
  "rawalpindi",
  "lahore",
  "karachi",
  "peshawar",
  "multan",
  "faisalabad",
  "quetta",
  "hyderabad",
  "sialkot",
  "gujranwala",
  "abbottabad",
  "sargodha",
  "bahawalpur",
  "sukkur",
  "mardan",
  "gujrat",
  "sheikhupura",
  "wah",
  "wah-cantt",
  "jhelum",
  "mirpur",
  "muzaffarabad",
  "gilgit",
  "swat",
  "charsadda",
  "nowshera",
  "larkana",
  "nawabshah",
  "search",
  "register",
  "dashboard",
  "agents",
  "contact-agent",
  "signup",
  "sign-up",
  "account",
  "profile",
  "saved",
  "favourites",
  "favorites",
]);

export const Route = createFileRoute("/$")({
  beforeLoad: ({ params }) => {
    const slug = String(params._splat || "").split("/")[0].toLowerCase();
    if (OLD.has(slug)) redirectHome();
    throw notFound();
  },
});
