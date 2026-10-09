import { createFileRoute, Outlet } from "@tanstack/react-router";

const URDU_FONT =
  "https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;600&display=swap";

export const Route = createFileRoute("/ur")({
  head: () => ({
    links: [{ rel: "stylesheet", href: URDU_FONT }],
  }),
  component: () => <Outlet />,
});
