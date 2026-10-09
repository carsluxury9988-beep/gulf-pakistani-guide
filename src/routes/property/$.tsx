import { createFileRoute } from "@tanstack/react-router";
import { redirectHome } from "@/lib/go-home";

export const Route = createFileRoute("/property/$")({
  beforeLoad: redirectHome,
});
