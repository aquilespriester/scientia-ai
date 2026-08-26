import { useState } from "react";
import { cn } from "@/lib/utils";

const PHASES = [
  {
    n: "01",
    title: "Descubrimiento",
    aim: "Intereses, problema, viabilidad y público.",
    ia: "Explorar brechas y reformular preguntas.",
    human: "Decidir qué vale la pena investigar.",
  },
  {
    n: "02",
    title: "Proyecto",
    aim: "Título, pregunta, objetivos, hipótesis y método.",
    ia: "Probar coherencia y alternativas metodológicas.",
    human: "Aprobar el diseño del estudio.",
  },
  {
    n: "03",
    title: "Investigación",
    aim: "Estrategia de búsqueda, bases, selección y lectura crítica.",
    ia: "Selección, resumen, comparación y mapas.",
    human: "Validar cada fuente y cada exclusión.",
  },
  {
    n: "04",
    title: "Producción",
    aim: "Estructura, escritura, citas, tablas y figuras.",
    ia: "Esquema, contraargumentos y claridad.",
    human: "Redactar y reescribir como autor.",
  },
  {
    n: "05",
    title: "Revisión",
    aim: "Coherencia, método, similitud y lenguaje.",
    ia: "Checklist, inconsistencias y estilo.",
    human: "Corregir el contenido y declarar el uso de IA.",
  },
  {
    n: "06",
    title: "Defensa",
    aim: "Diapositivas, guion y simulación de banca.",
    ia: "Preguntas difíciles y puntos débiles.",
    human: "Argumentar y sustentar decisiones.",
  },
];

export function Method() {
  const [active, setActive] = useState(0);
  const phase = PHASES[active];

  return (
    <section id="metodo" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-forest mb-4 text-[0.7rem] font-medium tracking-[0.2em] uppercase">
              El producto invisible
            </p>
            <h2 className="font-display text-4xl leading-[1.1] tracking-[-0.03em] text-ink md:text-5xl">
              Tesis desde Cero.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              Seis fases. Columna vertebral de la mentoría individual y de la inmersión grupal.
              En cada etapa, la IA propone; el humano decide.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-[1.75rem]">
              <img
                src="/photos/mentor-reunion.jpg"
                alt="Ensayo de defensa y revisión metodológica en sala de Manzana 40"
                className="aspect-[16/9] w-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <ol className="flex gap-2 overflow-x-auto pb-2 lg:col-span-5 lg:flex-col lg:overflow-visible lg:pb-0">
            {PHASES.map((p, i) => (
              <li key={p.n} className="shrink-0 lg:shrink">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex w-full min-h-11 items-center gap-4 rounded-xl px-4 py-3 text-left transition-[background-color,color] duration-150",
                    i === active ? "bg-ink text-paper" : "bg-paper-2 text-ink hover:bg-paper-3",
                  )}
                >
                  <span className={cn("font-display text-sm", i === active ? "text-sage" : "text-muted")}>
                    {p.n}
                  </span>
                  <span className="font-medium">{p.title}</span>
                </button>
              </li>
            ))}
          </ol>
          <div className="rounded-[1.75rem] bg-paper-2 p-7 md:p-10 lg:col-span-7">
            <p className="text-forest font-display text-sm tracking-[0.16em]">{phase.n}</p>
            <h3 className="font-display mt-3 text-3xl tracking-[-0.03em] text-ink">{phase.title}</h3>
            <p className="mt-3 text-ink-soft">{phase.aim}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-paper p-5">
                <p className="text-[0.7rem] font-medium tracking-[0.16em] text-muted uppercase">IA</p>
                <p className="mt-2 leading-relaxed text-ink">{phase.ia}</p>
              </div>
              <div className="rounded-2xl bg-forest p-5 text-paper">
                <p className="text-[0.7rem] font-medium tracking-[0.16em] text-sage uppercase">Humano</p>
                <p className="mt-2 leading-relaxed">{phase.human}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
