import { useEffect, useState } from "react";

type Point = { date: string; value: number };

export function MiniChart({ points, label }: { points: Point[]; label: string }) {
  const [charts, setCharts] = useState<typeof import("recharts") | null>(null);
  useEffect(() => {
    let live = true;
    void import("recharts").then((mod) => {
      if (live) setCharts(mod);
    });
    return () => {
      live = false;
    };
  }, []);

  if (points.length < 2) {
    return <p className="text-sm text-muted">Trend data is not available for this pair right now.</p>;
  }

  const data = points.map((point) => ({
    ...point,
    label: point.date.slice(5),
  }));

  return (
    <div>
      <div className="h-52 w-full" aria-hidden={charts ? undefined : true}>
        {charts ? (
          <charts.ResponsiveContainer width="100%" height="100%">
            <charts.LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <charts.CartesianGrid stroke="var(--color-line)" vertical={false} />
              <charts.XAxis dataKey="label" tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} />
              <charts.YAxis
                domain={["auto", "auto"]}
                tick={{ fill: "var(--color-muted)", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                width={64}
              />
              <charts.Tooltip
                formatter={(value) => [typeof value === "number" ? value.toFixed(2) : String(value ?? ""), "PKR"]}
              />
              <charts.Line type="monotone" dataKey="value" stroke="var(--color-green)" strokeWidth={2} dot={false} />
            </charts.LineChart>
          </charts.ResponsiveContainer>
        ) : (
          <div className="h-full rounded-lg bg-gold-soft" />
        )}
      </div>
      <table className="sr-only">
        <caption>{label}</caption>
        <thead>
          <tr>
            <th>Date</th>
            <th>PKR</th>
          </tr>
        </thead>
        <tbody>
          {points.map((point) => (
            <tr key={point.date}>
              <td>{point.date}</td>
              <td>{point.value.toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
