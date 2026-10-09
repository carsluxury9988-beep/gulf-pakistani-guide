import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ur/jobs/$country")({
  beforeLoad: ({ params }) => {
    throw redirect({ href: `/jobs/${params.country}`, statusCode: 301 });
  },
});
