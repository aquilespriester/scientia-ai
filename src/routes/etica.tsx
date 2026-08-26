import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { RULES } from "@/components/site/ethics";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/etica")({ component: EthicsPage });

function EthicsPage() {
  return (
    <main className="bg-paper min-h-screen">
      <Header />
      <article className="mx-auto max-w-3xl px-5 pb-20 md:px-8" style={{ paddingTop: "8.5rem" }}>
        <Link to="/" className="text-muted inline-flex min-h-11 items-center gap-2 text-sm">
          <ArrowLeft className="size-4" /> Volver
        </Link>
        <p className="text-forest mt-8 text-[0.7rem] font-medium tracking-[0.2em] uppercase">
          Documento público
        </p>
        <h1 className="font-display mt-3 text-4xl leading-[1.1] tracking-[-0.03em] text-ink md:text-5xl">
          Código de Ética — IA e investigación científica
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          Scientia AI es una consultoría de método científico mediado por IA. El cliente permanece
          como autor. Este código no es un anexo decorativo: es el filtro comercial. Quien solicita
          ghostwriting es rechazado.
        </p>
        <blockquote className="mt-10 border-l-[3px] border-forest pl-6">
          <p className="font-display text-2xl leading-snug tracking-[-0.02em] text-ink">
            No hacemos tu tesis. Te enseñamos a conducir tu investigación con IA de forma
            metodológicamente correcta, ética y declarable.
          </p>
        </blockquote>
        <ol className="mt-12">
          {RULES.map((r, i) => (
            <li key={r} className="flex gap-5 border-t border-line py-6">
              <span className="font-display text-sage w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <p className="leading-relaxed text-ink-soft">{r}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-sm leading-relaxed text-muted">
          El investigador es integralmente responsable del contenido final. Scientia AI no garantiza
          aprobación ante tribunal ni Qualis de una revista.
        </p>
        <Button asChild className="mt-10">
          <a href="/#diagnostico">Hacer el diagnóstico académico</a>
        </Button>
      </article>
      <Footer />
    </main>
  );
}
