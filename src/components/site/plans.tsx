const LADDER = [
  {
    name: "Clase introductoria",
    lane: "Academy",
    price: "Gratuita",
    note: "Adquisición y filtro ético. Quien pide ghostwriting no pasa.",
  },
  {
    name: "Workshop IA para investigadores",
    lane: "Academy",
    price: "Bajo costo",
    note: "Prueba del método en formato corto.",
  },
  {
    name: "Curso IA + Investigación",
    lane: "Academy",
    price: "Recurrente",
    note: "Ingresos de contenido. Base de método grabada.",
  },
  {
    name: "Plan START",
    lane: "Academy / Mentor",
    price: "Entrada",
    note: "Grabado + comunidad. Accesible para arrancar.",
  },
  {
    name: "Plan PRO",
    lane: "Mentor",
    price: "Núcleo",
    note: "Grupo en vivo. El corazón de ingresos medios.",
    featured: true,
  },
  {
    name: "Plan PREMIUM",
    lane: "Mentor",
    price: "1:1",
    note: "Un consultor por proyecto. Margen alto.",
  },
  {
    name: "Plan MASTER",
    lane: "Mentor",
    price: "Completo",
    note: "Tesis desde Cero. Acompañamiento premium de las seis fases.",
  },
  {
    name: "Consultoría institucional",
    lane: "Lab / B2B",
    price: "A medida",
    note: "Workshops para posgrado y comités de ética.",
  },
];

export function Plans() {
  return (
    <section id="planes" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-forest mb-4 text-[0.7rem] font-medium tracking-[0.2em] uppercase">Escalera comercial</p>
          <h2 className="font-display text-4xl leading-[1.1] tracking-[-0.03em] text-ink md:text-5xl">
            No eliges un plan. Eliges el producto académico.
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            El diagnóstico recomienda el peldaño. La escalera existe para que el método se pueda
            probar, profundizar o contratar 1:1 — nunca para vender escritura ajena.
          </p>
        </div>
        <ol className="mt-14 divide-y divide-line border-y border-line">
          {LADDER.map((p, i) => (
            <li
              key={p.name}
              className={
                p.featured
                  ? "grid gap-3 bg-ink px-5 py-6 text-paper md:grid-cols-12 md:items-baseline md:px-6"
                  : "grid gap-3 px-1 py-6 md:grid-cols-12 md:items-baseline md:px-2"
              }
            >
              <span className={`font-display text-sm md:col-span-1 ${p.featured ? "text-sage" : "text-muted"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl tracking-[-0.02em] md:col-span-4">{p.name}</h3>
              <p className={`text-sm md:col-span-2 ${p.featured ? "text-sage" : "text-forest"}`}>{p.lane}</p>
              <p className="text-sm md:col-span-2">{p.price}</p>
              <p className={`text-sm leading-relaxed md:col-span-3 ${p.featured ? "text-paper/70" : "text-muted"}`}>
                {p.note}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
