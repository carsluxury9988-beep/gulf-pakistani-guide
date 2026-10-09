import { createServerFn } from "@tanstack/react-start";
import { loadMarket } from "@/lib/market-load";

export const getMarket = createServerFn({ method: "GET" }).handler(async () => loadMarket());
