const CAPABILITIES = [
  "Encontrar y comparar artículos",
  "Identificar brechas",
  "Construir estrategias de búsqueda",
  "Organizar referencias (Zotero / Mendeley)",
  "Analizar PDF y extraer datos",
  "Elaborar tablas y mapas conceptuales",
  "Estructurar revisiones sistemáticas",
  "Apoyar análisis estadístico (sin sustituir al estadístico)",
  "Mejorar la redacción",
  "Traducir con revisión humana",
  "Preparar diapositivas y preguntas de tribunal",
];

const BASES = [
  "PubMed",
  "Scholar",
  "Scopus",
  "Web of Science",
  "SciELO",
  "Cochrane",
  "ClinicalTrials.gov",
  "Zotero",
  "Mendeley",
  "ChatGPT",
  "Claude",
  "Gemini",
  "Grok",
  "Perplexity",
  "Elicit",
  "NotebookLM",
];

export function Services() {
  return (
    <section id="servicios" className="bg-paper-2">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-forest mb-4 text-[0.7rem] font-medium tracking-[0.2em] uppercase">Portafolio</p>
        <h2 className="font-display max-w-3xl text-4xl leading-[1.1] tracking-[-0.03em] text-ink md:text-5xl">
          Mentor, inmersión y MedAI Research.
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-[1.75rem] bg-paper shadow-border">
            <img
              src="/photos/manzana-sala.jpg"
              alt="Sala de Scientia Mentor en Manzana 40"
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="p-7 md:p-9">
              <p className="text-forest text-[0.7rem] font-medium tracking-[0.16em] uppercase">01 · Individual</p>
              <h3 className="font-display mt-2 text-3xl tracking-[-0.03em] text-ink">Scientia Mentor</h3>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Un consultor por proyecto. Acompaña la cadena completa: tema, problema, pregunta,
                objetivos, hipótesis, metodología, búsqueda, organización, análisis, redacción,
                referencias, revisión, presentación y defensa.
              </p>
              <p className="mt-4 text-sm text-muted">
                No escribe el capítulo en lugar del estudiante; audita el uso de IA y devuelve el
                control al autor.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-[1.75rem] bg-paper shadow-border">
            <img
              src="/photos/hub40.jpg"
              alt="Inmersión grupal en Hub 40, Manzana 40"
              className="aspect-[16/9] w-full object-cover object-[38%_0%]"
            />
            <div className="p-7 md:p-9">
              <p className="text-forest text-[0.7rem] font-medium tracking-[0.16em] uppercase">
                02 · Grupo · 5 a 15 personas
              </p>
              <h3 className="font-display mt-2 text-3xl tracking-[-0.03em] text-ink">Inmersión IA</h3>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Ocho semanas: IA para investigadores; encontrar artículos; PubMed, Scopus, WoS,
                SciELO, Cochrane; lectura científica con IA; revisión bibliográfica; metodología;
                escritura y referencias; presentación y defensa.
              </p>
              <p className="mt-4 text-sm text-muted">
                En vivo + materiales + comunidad privada + ejercicio sobre el proyecto real de cada
                participante.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          <article className="rounded-[1.75rem] bg-ink p-7 text-paper md:p-9 lg:col-span-3">
            <p className="text-sage text-[0.7rem] font-medium tracking-[0.16em] uppercase">03 · Capacidad aplicada</p>
            <h3 className="font-display mt-2 text-3xl tracking-[-0.03em]">Lo que el método pone en tus manos</h3>
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {CAPABILITIES.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-snug text-paper/80">
                  <span className="bg-sage mt-1.5 size-1.5 shrink-0 rounded-full" />
                  {c}
                </li>
              ))}
            </ul>
          </article>

          <article className="overflow-hidden rounded-[1.75rem] bg-forest lg:col-span-2">
            <img
              src="/photos/medai-lab.jpg"
              alt="Investigación clínica mediada por IA — MedAI Research"
              className="aspect-[16/10] w-full object-cover lg:aspect-auto lg:h-52"
            />
            <div className="p-7 text-paper">
              <p className="text-sage text-[0.7rem] font-medium tracking-[0.16em] uppercase">04 · Nicho inicial</p>
              <h3 className="font-display mt-2 text-2xl tracking-[-0.02em]">MedAI Research</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/80">
                Medicina, Enfermería, Odontología, Fisioterapia, Farmacia, Biomedicina, Nutrición y
                Salud Pública.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-paper/70">
                Ningún dato identificable de paciente entra en una herramienta sin base legal y
                configuración adecuada de privacidad.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-10">
          <p className="text-[0.7rem] font-medium tracking-[0.18em] text-muted uppercase">Bases y herramientas</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {BASES.map((b) => (
              <li
                key={b}
                className="rounded-full bg-paper px-3.5 py-1.5 text-xs font-medium tracking-wide text-ink-soft shadow-border"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
