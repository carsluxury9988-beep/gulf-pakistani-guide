import { features } from "@/lib/site";

export function AdSlot({ label = "Advertisement" }: { label?: string }) {
  if (!features.ads) return null;
  return (
    <aside className="rounded-lg border border-dashed border-line bg-surface p-4 text-center text-sm text-muted" aria-label={label}>
      {label}
    </aside>
  );
}

export function RemittanceOffers() {
  if (!features.remittanceOffers) return null;
  return (
    <aside className="rounded-lg border border-line bg-gold-soft p-4">
      <p className="font-semibold text-ink">Remittance partners</p>
      <p className="mt-1 text-sm text-muted">Partner cards are switched on in the site config. Add real offers here. Do not invent rates.</p>
    </aside>
  );
}

export function FlightSearch() {
  if (!features.flightSearch) return null;
  return (
    <aside className="rounded-lg border border-line bg-surface p-4">
      <p className="font-semibold">Flight search</p>
      <p className="mt-1 text-sm text-muted">The search widget is on. Connect a provider before showing prices.</p>
    </aside>
  );
}
