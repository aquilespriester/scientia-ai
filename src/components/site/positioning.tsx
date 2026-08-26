const VERBS = [
  {
    n: "01",
    title: "Enseñar",
    body: "Instalar criterio. La IA es instrumento; el método es el producto.",
  },
  {
    n: "02",
    title: "Acompañar",
    body: "Estar en la cadena completa: del tema a la defensa, sin escribir el capítulo por ti.",
  },
  {
    n: "03",
    title: "Personalizar",
    body: "Un plan por proyecto: nivel, plazo, tipo de trabajo y cuello de botella.",
  },
  {
    n: "04",
    title: "Optimizar",
    body: "Acelerar lo repetible. Devolver el control al autor en cada decisión científica.",
  },
];

export function Positioning() {
  return (
    <section id="empresa" className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-8 md:py-28">
        <div className="md:col-span-5">
          <p className="text-forest mb-4 text-[0.7rem] font-medium tracking-[0.2em] uppercase">Qué es esta empresa</p>
          <h2 className="font-display text-4xl leading-[1.1] tracking-[-0.03em] text-ink md:text-5xl">
            Consultoría de método científico mediado por IA.
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-8">
          <p className="text-lg leading-relaxed text-ink-soft">
            El cliente permanece como autor. Scientia AI enseña, acompaña, personaliza y
            optimiza el proceso — desde la elección del tema hasta la defensa.
          </p>
          <blockquote className="mt-10 border-l-[3px] border-forest pl-6">
            <p className="font-display text-2xl leading-snug tracking-[-0.02em] text-ink md:text-[1.85rem]">
              No hacemos tu tesis. Te enseñamos a conducir tu investigación con IA de forma
              metodológicamente correcta, ética y declarable.
            </p>
            <footer className="mt-4 text-sm text-muted">Posicionamiento de rechazo — público y contractual.</footer>
          </blockquote>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {VERBS.map((v) => (
            <article key={v.n} className="bg-paper px-6 py-10 md:px-8">
              <p className="font-display text-sage mb-8 text-sm tracking-[0.16em]">{v.n}</p>
              <h3 className="font-display text-2xl tracking-[-0.02em] text-ink">{v.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
