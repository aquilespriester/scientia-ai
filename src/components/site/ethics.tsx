import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const RULES = [
  "No fabricar referencias, datos, resultados, tablas o “hallazgos”.",
  "Verificar toda cita en la fuente original antes de incorporarla al manuscrito.",
  "Declarar el uso de IA conforme a la normativa de la institución y, cuando corresponda, Portaria CNPq 2.664/2026 (herramienta + finalidad + etapa).",
  "Está prohibido presentar texto generado por IA como autoría humana no declarada.",
  "El investigador es integralmente responsable del contenido final.",
  "No introducir datos personales, historias clínicas o información clínica identificable en herramientas inadecuadas.",
  "Respetar el reglamento de la universidad, comité de ética y derechos de autor.",
  "Mantener registro de prompts relevantes cuando la institución exija trazabilidad.",
  "Scientia AI no garantiza aprobación ante tribunal ni Qualis de una revista.",
];

export function EthicsPreview() {
  return (
    <section className="bg-paper-2">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-5">
          <p className="text-forest mb-4 text-[0.7rem] font-medium tracking-[0.2em] uppercase">
            Código de Ética
          </p>
          <h2 className="font-display text-4xl leading-[1.1] tracking-[-0.03em] text-ink md:text-5xl">
            IA e investigación científica.
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            Documento público de la marca. No es un anexo decorativo: es el filtro comercial. Quien
            solicita ghostwriting es rechazado.
          </p>
          <Link
            to="/etica"
            className="text-forest mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium"
          >
            Leer el código completo <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <ol className="md:col-span-7">
          {RULES.slice(0, 5).map((r, i) => (
            <li key={r} className="flex gap-5 border-t border-line py-5 first:border-t-0 first:pt-0">
              <span className="font-display text-sage w-8 shrink-0 text-sm">{String(i + 1).padStart(2, "0")}</span>
              <p className="leading-relaxed text-ink-soft">{r}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export { RULES };
