const AUDIENCES = [
  {
    who: "Estudiante",
    need: "Salir del bloqueo y llegar a la defensa con autoría y declaración del uso de IA.",
    img: "/photos/mesa-papers.jpg",
    alt: "Mesa de trabajo con artículos científicos, notas y revisión de literatura",
  },
  {
    who: "Posgraduando",
    need: "Calidad metodológica, revisión de literatura verificable y manuscrito defendible.",
    img: "/photos/manzana-sala.jpg",
    alt: "Sala de mentoría en Manzana 40 con vista a Santa Cruz",
  },
  {
    who: "Profesor",
    need: "Materiales, evaluación y supervisión de orientandos que ya utilizan IA.",
    img: "/photos/mentor-reunion.jpg",
    alt: "Sesión de supervisión académica con mapa metodológico",
  },
  {
    who: "Investigador",
    need: "Flujo de artículo — búsqueda, extracción, redacción, envío — sin renunciar a la integridad.",
    img: "/photos/expedientes.jpg",
    alt: "Expedientes y fuentes primarias listas para verificación",
  },
  {
    who: "Profesional de salud",
    need: "Informes, revisiones y productividad científica sin exponer datos de pacientes.",
    img: "/photos/microscopio.jpg",
    alt: "Investigación de laboratorio clínico con microscopio",
  },
];

export function Audiences() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-sage mb-4 text-[0.7rem] font-medium tracking-[0.2em] uppercase">Propuesta de valor</p>
        <h2 className="font-display max-w-3xl text-4xl leading-[1.1] tracking-[-0.03em] md:text-5xl">
          Un público, un problema, un método.
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {AUDIENCES.map((a, i) => (
            <article
              key={a.who}
              className={
                i === 0
                  ? "lg:col-span-3 overflow-hidden rounded-[1.75rem] bg-ink-soft"
                  : i === 1
                    ? "lg:col-span-3 overflow-hidden rounded-[1.75rem] bg-ink-soft"
                    : "lg:col-span-2 overflow-hidden rounded-[1.75rem] bg-ink-soft"
              }
            >
              <div className={i < 2 ? "aspect-[16/10] overflow-hidden" : "aspect-[4/3] overflow-hidden"}>
                <img src={a.img} alt={a.alt} className="size-full object-cover" />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-display text-2xl tracking-[-0.02em]">{a.who}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{a.need}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
