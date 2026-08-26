export const PRODUCTS = [
  { id: "tcc", label: "TCC / Trabajo de grado", group: "grado" },
  { id: "monografia", label: "Monografía", group: "grado" },
  { id: "articulo", label: "Artículo científico", group: "publicacion" },
  { id: "revision", label: "Revisión sistemática", group: "publicacion" },
  { id: "disertacion", label: "Disertación (maestría)", group: "posgrado" },
  { id: "tesis", label: "Tesis (doctorado)", group: "posgrado" },
  { id: "proyecto", label: "Proyecto de investigación", group: "proyecto" },
  { id: "clase", label: "Clase / material docente", group: "docencia" },
  { id: "productividad", label: "Productividad científica", group: "profesional" },
] as const;

export const AREAS = [
  "Medicina",
  "Enfermería",
  "Odontología",
  "Fisioterapia",
  "Farmacia",
  "Biomedicina",
  "Nutrición",
  "Salud Pública",
  "Psicología",
  "Educación",
  "Ingeniería",
  "Derecho",
  "Otra",
] as const;

export const PROGRAMS = {
  START: {
    id: "START",
    name: "Plan START",
    tag: "Academy / Mentor",
    summary: "Grabado + comunidad. Entrada accesible para arrancar con método.",
  },
  PRO: {
    id: "PRO",
    name: "Plan PRO",
    tag: "Mentor grupal",
    summary: "Grupo en vivo, 8 semanas, sobre tu proyecto real.",
  },
  PREMIUM: {
    id: "PREMIUM",
    name: "Plan PREMIUM",
    tag: "Mentor 1:1",
    summary: "Un consultor por proyecto. Acompañamiento individual de alto margen de control.",
  },
  MASTER: {
    id: "MASTER",
    name: "Plan MASTER",
    tag: "Tesis desde Cero",
    summary: "Acompañamiento premium completo, las seis fases del método.",
  },
} as const;

export type ProgramId = keyof typeof PROGRAMS;
export type ProductId = (typeof PRODUCTS)[number]["id"];

export type DiagnosisAnswers = {
  ghostwrite: "no" | "si" | "";
  product: ProductId | "";
  area: string;
  theme: string;
  advisor: "si" | "no" | "parcial" | "";
  deadline: "30" | "60" | "90" | "180" | "365" | "";
  method: "cualitativa" | "cuantitativa" | "mixta" | "revision" | "indefinida" | "";
  iaLevel: "nula" | "inicial" | "intermedia" | "avanzada" | "";
  bottleneck: "tema" | "metodologia" | "literatura" | "redaccion" | "analisis" | "defensa" | "tiempo" | "";
  level: "grado" | "especialidad" | "maestria" | "doctorado" | "profesional" | "";
  stage: "cero" | "proyecto" | "busqueda" | "redaccion" | "revision" | "defensa" | "";
  hours: "2" | "5" | "10" | "15" | "";
  ethics: "si" | "no" | "no-se" | "";
  name: string;
};

export const EMPTY_ANSWERS: DiagnosisAnswers = {
  ghostwrite: "",
  product: "",
  area: "",
  theme: "",
  advisor: "",
  deadline: "",
  method: "",
  iaLevel: "",
  bottleneck: "",
  level: "",
  stage: "",
  hours: "",
  ethics: "",
  name: "",
};

export type PersonalizedPlan = {
  level: string;
  deadline: string;
  work: string;
  area: string;
  bottleneck: string;
  program: ProgramId;
  reasons: string[];
  phases: string[];
};

const LEVEL_LABEL: Record<DiagnosisAnswers["iaLevel"], string> = {
  nula: "nivel nulo de IA",
  inicial: "nivel inicial",
  intermedia: "nivel intermedio",
  avanzada: "nivel avanzado",
  "": "nivel por definir",
};

const DEADLINE_LABEL: Record<DiagnosisAnswers["deadline"], string> = {
  "30": "plazo 30 días",
  "60": "plazo 60 días",
  "90": "plazo 90 días",
  "180": "plazo 180 días",
  "365": "plazo 12 meses",
  "": "plazo por definir",
};

const BOTTLENECK_LABEL: Record<DiagnosisAnswers["bottleneck"], string> = {
  tema: "dificultad en el tema",
  metodologia: "dificultad en metodología",
  literatura: "dificultad en revisión bibliográfica",
  redaccion: "dificultad en redacción",
  analisis: "dificultad en análisis",
  defensa: "dificultad en la defensa",
  tiempo: "cuello de botella: tiempo",
  "": "cuello de botella por mapear",
};

export function recommendPlan(a: DiagnosisAnswers): PersonalizedPlan {
  const product = PRODUCTS.find((p) => p.id === a.product);
  const isThesis = a.product === "tesis" || a.product === "disertacion";
  const long = a.deadline === "180" || a.deadline === "365";
  const short = a.deadline === "30" || a.deadline === "60";
  const early = a.stage === "cero" || a.stage === "proyecto";
  const highTouch =
    a.bottleneck === "metodologia" ||
    a.bottleneck === "analisis" ||
    a.level === "doctorado" ||
    a.product === "revision";

  let program: ProgramId = "PRO";
  const reasons: string[] = [];

  if (isThesis && (long || early) && a.hours !== "2") {
    program = "MASTER";
    reasons.push("Trabajo de posgrado largo: conviene la columna vertebral Tesis desde Cero.");
  } else if (highTouch && (a.level === "doctorado" || a.level === "maestria" || a.advisor === "no")) {
    program = "PREMIUM";
    reasons.push("El cuello de botella y el nivel piden auditoría 1:1, no un ritmo grupal.");
  } else if (a.iaLevel === "nula" || a.iaLevel === "inicial" || short || a.hours === "2") {
    program = a.product === "clase" || a.product === "productividad" ? "START" : "PRO";
    reasons.push(
      program === "START"
        ? "Entrada accesible: grabado + comunidad para instalar el método sin saturarte."
        : "Plazo y nivel de IA encajan con inmersión grupal sobre tu proyecto real.",
    );
  } else {
    program = "PRO";
    reasons.push("El formato grupal en vivo es el núcleo: método + comunidad + ejercicio sobre tu trabajo.");
  }

  if (a.bottleneck === "metodologia") {
    reasons.push("La metodología es el punto de control humano: la IA propone, tú apruebas el diseño.");
  }
  if (a.product === "revision") {
    reasons.push("Revisión sistemática exige estrategia de búsqueda, exclusión y trazabilidad declarable.");
  }
  if (a.ethics === "si") {
    reasons.push("Hay comité de ética: el flujo MedAI no introduce datos identificables de pacientes.");
  }

  const phases =
    program === "MASTER"
      ? ["Descubrimiento", "Proyecto", "Investigación", "Producción", "Revisión", "Defensa"]
      : program === "PREMIUM"
        ? ["Diagnóstico", "Diseño", "Búsqueda y lectura", "Redacción auditada", "Defensa"]
        : program === "PRO"
          ? ["IA para investigadores", "Bases y búsqueda", "Lectura", "Metodología", "Escritura", "Defensa"]
          : ["Clase introductoria", "Curso IA + Investigación", "Comunidad", "Plan de 90 días"];

  return {
    level: LEVEL_LABEL[a.iaLevel],
    deadline: DEADLINE_LABEL[a.deadline],
    work: product?.label ?? "producto académico",
    area: a.area || "área por definir",
    bottleneck: BOTTLENECK_LABEL[a.bottleneck],
    program,
    reasons,
    phases,
  };
}

export const STORAGE_KEY = "scientia-diagnostico";
