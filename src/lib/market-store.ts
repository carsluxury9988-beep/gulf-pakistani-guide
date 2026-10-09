import type { Market } from "@/lib/format";

const KEY = "apna-ghar-market-v1";

type Store = { market: Market; savedAt: string };

function kvConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return { url: url.replace(/\/$/, ""), token };
}

async function kvGet(): Promise<Store | null> {
  const cfg = kvConfig();
  if (!cfg) return null;
  try {
    const res = await fetch(`${cfg.url}/get/${encodeURIComponent(KEY)}`, {
      headers: { Authorization: `Bearer ${cfg.token}` },
    });
    if (!res.ok) return null;
    const body = (await res.json()) as { result?: string | null };
    if (!body.result) return null;
    return JSON.parse(body.result) as Store;
  } catch {
    return null;
  }
}

async function kvSet(store: Store) {
  const cfg = kvConfig();
  if (!cfg) return false;
  try {
    const res = await fetch(`${cfg.url}/set/${encodeURIComponent(KEY)}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${cfg.token}`, "Content-Type": "application/json" },
      body: JSON.stringify(JSON.stringify(store)),
    });
    return res.ok;
  } catch {
    return false;
  }
}

function blobConfig() {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  return token ? { token } : null;
}

async function blobGet(): Promise<Store | null> {
  const cfg = blobConfig();
  if (!cfg) return null;
  try {
    const list = await fetch(`https://blob.vercel-storage.com?prefix=${KEY}.json`, {
      headers: { Authorization: `Bearer ${cfg.token}` },
    });
    if (!list.ok) return null;
    const body = (await list.json()) as { blobs?: { url: string; pathname: string }[] };
    const hit = body.blobs?.find((item) => item.pathname.endsWith(`${KEY}.json`)) ?? body.blobs?.[0];
    if (!hit?.url) return null;
    const file = await fetch(hit.url);
    if (!file.ok) return null;
    return (await file.json()) as Store;
  } catch {
    return null;
  }
}

async function blobSet(store: Store) {
  const cfg = blobConfig();
  if (!cfg) return false;
  try {
    const res = await fetch(`https://blob.vercel-storage.com/${KEY}.json`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${cfg.token}`,
        "x-content-type": "application/json",
        "x-add-random-suffix": "0",
      },
      body: JSON.stringify(store),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function readStoredRecord(): Promise<Store | null> {
  const stored = (await kvGet()) ?? (await blobGet());
  if (!stored?.market?.usd || !stored.market.xauUsd || !stored.savedAt) return null;
  return stored;
}

export async function readStoredMarket(): Promise<Market | null> {
  const stored = await readStoredRecord();
  if (!stored) return null;
  return {
    ...stored.market,
    stale: true,
    source: `${stored.market.source} · last saved ${stored.savedAt.slice(0, 16)}Z`,
  };
}

export async function writeStoredMarket(market: Market) {
  const store: Store = { market, savedAt: new Date().toISOString() };
  const ok = await kvSet(store);
  if (ok) return;
  await blobSet(store);
}
