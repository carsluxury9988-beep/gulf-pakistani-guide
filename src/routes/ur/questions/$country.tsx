import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ur/questions/$country")({
  beforeLoad: ({ params }) => {
    throw redirect({ href: `/questions/${params.country}`, statusCode: 301 });
  },
});
