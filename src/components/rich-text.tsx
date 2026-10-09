import { A } from "@/components/shell";

const TOKEN = /(\[\[[^\]]+\]\]|\[[^\]]+\]\(https?:\/\/[^)\s]+\))/g;

export function Rich({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, index) => {
        const internal = /^\[\[([^|\]]+)\|([^\]]+)\]\]$/.exec(part);
        if (internal) {
          return (
            <A key={index} href={internal[1]} className="font-semibold text-green underline decoration-gold underline-offset-4">
              {internal[2]}
            </A>
          );
        }
        const external = /^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/.exec(part);
        if (external) {
          return (
            <a
              key={index}
              href={external[2]}
              className="font-semibold text-green underline decoration-gold underline-offset-4"
              rel="noopener noreferrer"
              target="_blank"
            >
              {external[1]}
            </a>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
