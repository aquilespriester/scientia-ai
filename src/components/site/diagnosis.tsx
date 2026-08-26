import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw, ShieldOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AREAS,
  EMPTY_ANSWERS,
  PRODUCTS,
  PROGRAMS,
  STORAGE_KEY,
  type DiagnosisAnswers,
  recommendPlan,
} from "@/lib/diagnosis";
import { cn } from "@/lib/utils";

type Step = {
  key: keyof DiagnosisAnswers;
  title: string;
  hint?: string;
  kind: "choice" | "text";
  options?: { id: string; label: string }[];
};

const STEPS: Step[] = [
  {
    key: "ghostwrite",
    title: "¿Quieres que alguien escriba tu tesis o artículo por ti?",
    hint: "Filtro ético. La respuesta define si podemos trabajar juntos.",
    kind: "choice",
    options: [
      { id: "no", label: "No. Quiero autoría y método." },
      { id: "si", label: "Sí. Necesito que la escriban." },
    ],
  },
  {
    key: "product",
    title: "¿Cuál es el producto académico?",
    hint: "No eliges un plan. Eliges el trabajo.",
    kind: "choice",
    options: PRODUCTS.map((p) => ({ id: p.id, label: p.label })),
  },
  {
    key: "level",
    title: "¿En qué nivel estás?",
    kind: "choice",
    options: [
      { id: "grado", label: "Grado / licenciatura" },
      { id: "especialidad", label: "Especialidad" },
      { id: "maestria", label: "Maestría" },
      { id: "doctorado", label: "Doctorado" },
      { id: "profesional", label: "Ejercicio profesional" },
    ],
  },
  {
    key: "area",
    title: "Área de conocimiento",
    kind: "choice",
    options: AREAS.map((a) => ({ id: a, label: a })),
  },
  {
    key: "theme",
    title: "Tema o línea (aunque sea tentativo)",
    hint: "Una frase basta. Ejemplo: revisión bibliográfica en neumología.",
    kind: "text",
  },
  {
    key: "advisor",
    title: "¿Tienes asesor o tutor activo?",
    kind: "choice",
    options: [
      { id: "si", label: "Sí, con seguimiento regular" },
      { id: "parcial", label: "Sí, pero irregular" },
      { id: "no", label: "No / aún no asignado" },
    ],
  },
  {
    key: "deadline",
    title: "¿Cuál es el plazo real?",
    kind: "choice",
    options: [
      { id: "30", label: "30 días" },
      { id: "60", label: "60 días" },
      { id: "90", label: "90 días" },
      { id: "180", label: "180 días" },
      { id: "365", label: "12 meses" },
    ],
  },
  {
    key: "method",
    title: "Metodología prevista",
    kind: "choice",
    options: [
      { id: "revision", label: "Revisión bibliográfica / sistemática" },
      { id: "cualitativa", label: "Cualitativa" },
      { id: "cuantitativa", label: "Cuantitativa" },
      { id: "mixta", label: "Mixta" },
      { id: "indefinida", label: "Aún no está clara" },
    ],
  },
  {
    key: "stage",
    title: "¿En qué etapa estás hoy?",
    kind: "choice",
    options: [
      { id: "cero", label: "Desde cero" },
      { id: "proyecto", label: "Proyecto / protocolo" },
      { id: "busqueda", label: "Búsqueda y lectura" },
      { id: "redaccion", label: "Redacción" },
      { id: "revision", label: "Revisión" },
      { id: "defensa", label: "Preparando defensa" },
    ],
  },
  {
    key: "bottleneck",
    title: "Principal cuello de botella",
    kind: "choice",
    options: [
      { id: "tema", label: "Elegir o acotar el tema" },
      { id: "metodologia", label: "Metodología" },
      { id: "literatura", label: "Revisión de literatura" },
      { id: "redaccion", label: "Redacción" },
      { id: "analisis", label: "Análisis" },
      { id: "defensa", label: "Defensa" },
      { id: "tiempo", label: "Tiempo / bloqueo" },
    ],
  },
  {
    key: "iaLevel",
    title: "¿Cuál es tu nivel de uso de IA?",
    kind: "choice",
    options: [
      { id: "nula", label: "Casi nulo" },
      { id: "inicial", label: "Inicial — chat ocasional" },
      { id: "intermedia", label: "Intermedio — ya busca y resume" },
      { id: "avanzada", label: "Avanzado — flujo con herramientas" },
    ],
  },
  {
    key: "hours",
    title: "Horas semanales reales para el trabajo",
    kind: "choice",
    options: [
      { id: "2", label: "2 a 4 horas" },
      { id: "5", label: "5 a 8 horas" },
      { id: "10", label: "10 a 14 horas" },
      { id: "15", label: "15 horas o más" },
    ],
  },
  {
    key: "ethics",
    title: "¿El estudio pasa por comité de ética?",
    kind: "choice",
    options: [
      { id: "si", label: "Sí" },
      { id: "no", label: "No" },
      { id: "no-se", label: "Aún no lo sé" },
    ],
  },
  {
    key: "name",
    title: "¿Cómo te llamas? (opcional)",
    hint: "Para titular el plan. Puedes dejarlo en blanco.",
    kind: "text",
  },
];

function readStored(): DiagnosisAnswers {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...EMPTY_ANSWERS };
    return { ...EMPTY_ANSWERS, ...JSON.parse(raw) };
  } catch {
    return { ...EMPTY_ANSWERS };
  }
}

export function Diagnosis() {
  const [answers, setAnswers] = useState<DiagnosisAnswers>(EMPTY_ANSWERS);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setAnswers(readStored());
  }, []);

  const current = STEPS[step];
  const value = answers[current.key];
  const canNext = current.key === "name" || current.kind === "text" || Boolean(value);
  const rejected = answers.ghostwrite === "si" && step > 0;
  const plan = useMemo(() => (done ? recommendPlan(answers) : null), [done, answers]);

  function setField(key: keyof DiagnosisAnswers, v: string) {
    setAnswers((prev) => {
      const next = { ...prev, [key]: v };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  function goNext() {
    if (current.key === "ghostwrite" && answers.ghostwrite === "si") {
      setStep(1);
      return;
    }
    if (step === STEPS.length - 1) {
      setDone(true);
      return;
    }
    setStep((s) => s + 1);
  }

  function reset() {
    localStorage.removeItem(STORAGE_KEY);
    setAnswers({ ...EMPTY_ANSWERS });
    setStep(0);
    setDone(false);
  }

  return (
    <section id="diagnostico" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sage mb-4 text-[0.7rem] font-medium tracking-[0.2em] uppercase">
              Jornada del cliente
            </p>
            <h2 className="font-display text-4xl leading-[1.1] tracking-[-0.03em] md:text-5xl">
              Diagnóstico académico.
            </h2>
            <p className="mt-5 leading-relaxed text-paper/70">
              Diez a quince ítems. El resultado es un Plan Personalizado de Investigación: nivel,
              plazo, tipo de trabajo, cuello de botella y programa recomendado.
            </p>
            <p className="mt-6 text-sm text-paper/50">
              Ejemplo: nivel inicial · plazo 90 días · revisión bibliográfica · neumología ·
              dificultad en metodología · programa PRO.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-[1.75rem] bg-paper p-6 text-ink shadow-border md:p-10">
              {rejected ? (
                <RejectCard onReset={reset} />
              ) : done && plan ? (
                <ResultCard answers={answers} plan={plan} onReset={reset} />
              ) : (
                <>
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <p className="text-[0.7rem] font-medium tracking-[0.16em] text-muted uppercase">
                      Ítem {step + 1} de {STEPS.length}
                    </p>
                    <div className="bg-paper-3 h-1 flex-1 overflow-hidden rounded-full">
                      <div
                        className="bg-forest h-full transition-[width] duration-200"
                        style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl tracking-[-0.02em] md:text-3xl">{current.title}</h3>
                  {current.hint ? <p className="mt-2 text-sm text-muted">{current.hint}</p> : null}

                  {current.kind === "text" ? (
                    <input
                      value={String(value)}
                      onChange={(e) => setField(current.key, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") goNext();
                      }}
                      placeholder="Escribe aquí"
                      className="mt-8 h-12 w-full rounded-xl border-0 bg-paper-2 px-4 text-base text-ink shadow-border outline-none ring-forest focus:ring-2"
                    />
                  ) : (
                    <div className="mt-8 grid gap-2 sm:grid-cols-2">
                      {current.options?.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setField(current.key, opt.id)}
                          className={cn(
                            "min-h-12 rounded-xl px-4 py-3 text-left text-sm leading-snug transition-[background-color,color,box-shadow] duration-150",
                            value === opt.id
                              ? "bg-forest text-paper"
                              : "bg-paper-2 text-ink hover:bg-paper-3",
                          )}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="mt-10 flex items-center justify-between">
                    <Button
                      type="button"
                      variant="ghost"
                      disabled={step === 0}
                      onClick={() => setStep((s) => Math.max(0, s - 1))}
                    >
                      <ArrowLeft /> Atrás
                    </Button>
                    <Button type="button" disabled={!canNext} onClick={goNext}>
                      {step === STEPS.length - 1 ? "Ver plan" : "Continuar"} <ArrowRight />
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RejectCard({ onReset }: { onReset: () => void }) {
  return (
    <div>
      <ShieldOff className="text-destructive size-8" />
      <h3 className="font-display mt-5 text-3xl tracking-[-0.03em]">No tomamos ese encargo.</h3>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Scientia AI no hace ghostwriting. Quien solicita que escribamos la tesis en su lugar es
        rechazado — el Código de Ética no es un anexo decorativo: es el filtro comercial.
      </p>
      <p className="mt-4 leading-relaxed text-muted">
        Si lo que buscas es aprender a conducir tu investigación con IA, de forma declarable, puedes
        volver a empezar.
      </p>
      <Button type="button" className="mt-8" onClick={onReset}>
        <RotateCcw /> Reiniciar diagnóstico
      </Button>
    </div>
  );
}

function ResultCard({
  answers,
  plan,
  onReset,
}: {
  answers: DiagnosisAnswers;
  plan: ReturnType<typeof recommendPlan>;
  onReset: () => void;
}) {
  const program = PROGRAMS[plan.program];
  const chips = [plan.level, plan.deadline, plan.work, plan.area, plan.bottleneck, `programa ${plan.program}`];

  return (
    <div>
      <p className="text-forest text-[0.7rem] font-medium tracking-[0.18em] uppercase">
        Plan personalizado de investigación
      </p>
      <h3 className="font-display mt-3 text-3xl tracking-[-0.03em]">
        {answers.name ? `${answers.name}, este es tu plan.` : "Este es tu plan."}
      </h3>
      {answers.theme ? (
        <p className="mt-2 text-sm italic text-muted">«{answers.theme}»</p>
      ) : null}
      <p className="mt-3 text-sm leading-relaxed text-muted">{chips.join(" · ")}</p>

      <div className="mt-8 rounded-2xl bg-ink p-6 text-paper md:p-8">
        <p className="text-sage text-[0.7rem] tracking-[0.16em] uppercase">{program.tag}</p>
        <p className="font-display mt-2 text-3xl">{program.name}</p>
        <p className="mt-3 text-paper/75">{program.summary}</p>
      </div>

      <ul className="mt-6 space-y-3">
        {plan.reasons.map((r) => (
          <li key={r} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
            <span className="bg-forest mt-2 size-1.5 shrink-0 rounded-full" />
            {r}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <p className="text-[0.7rem] font-medium tracking-[0.16em] text-muted uppercase">Recorrido recomendado</p>
        <ol className="mt-3 flex flex-wrap gap-2">
          {plan.phases.map((ph, i) => (
            <li key={ph} className="rounded-full bg-paper-2 px-3 py-1.5 text-xs font-medium text-ink-soft">
              {i + 1}. {ph}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <a href="/#sede">Agendar en Manzana 40</a>
        </Button>
        <Button type="button" variant="outline" onClick={onReset}>
          <RotateCcw /> Nuevo diagnóstico
        </Button>
      </div>
    </div>
  );
}
