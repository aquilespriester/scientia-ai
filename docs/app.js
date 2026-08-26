const PHOTO = "https://raw.githubusercontent.com/aquilespriester/scientia-ai/main/public/photos";
const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
menuBtn.onclick = () => drawer.classList.toggle("open");
drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => drawer.classList.remove("open")));

const PHASES = [
  { n: "01", title: "Descubrimiento", aim: "Intereses, problema, viabilidad y público.", ia: "Explorar brechas y reformular preguntas.", human: "Decidir qué vale la pena investigar." },
  { n: "02", title: "Proyecto", aim: "Título, pregunta, objetivos, hipótesis y método.", ia: "Probar coherencia y alternativas metodológicas.", human: "Aprobar el diseño del estudio." },
  { n: "03", title: "Investigación", aim: "Estrategia de búsqueda, bases, selección y lectura crítica.", ia: "Selección, resumen, comparación y mapas.", human: "Validar cada fuente y cada exclusión." },
  { n: "04", title: "Producción", aim: "Estructura, escritura, citas, tablas y figuras.", ia: "Esquema, contraargumentos y claridad.", human: "Redactar y reescribir como autor." },
  { n: "05", title: "Revisión", aim: "Coherencia, método, similitud y lenguaje.", ia: "Checklist, inconsistencias y estilo.", human: "Corregir el contenido y declarar el uso de IA." },
  { n: "06", title: "Defensa", aim: "Diapositivas, guion y simulación de banca.", ia: "Preguntas difíciles y puntos débiles.", human: "Argumentar y sustentar decisiones." },
];
let active = 0;
const btns = document.getElementById("phaseBtns");
const panel = document.getElementById("phasePanel");
function renderPhase() {
  btns.innerHTML = PHASES.map((p, i) => `<li style="list-style:none"><button class="${i===active?"active":""}" data-i="${i}"><span class="n">${p.n}</span>${p.title}</button></li>`).join("");
  const p = PHASES[active];
  panel.innerHTML = `<p class="eyebrow">${p.n}</p><h3 style="font-size:1.85rem;margin:.4rem 0">${p.title}</h3><p style="color:var(--ink-soft)">${p.aim}</p><div class="split"><div class="pill-box"><p class="k">IA</p><p>${p.ia}</p></div><div class="pill-box forest"><p class="k">Humano</p><p>${p.human}</p></div></div>`;
  btns.querySelectorAll("button").forEach((b) => b.onclick = () => { active = +b.dataset.i; renderPhase(); });
}
renderPhase();

document.getElementById("caps").innerHTML = [
  "Encontrar y comparar artículos","Identificar brechas","Construir estrategias de búsqueda","Organizar referencias (Zotero / Mendeley)","Analizar PDF y extraer datos","Elaborar tablas y mapas conceptuales","Estructurar revisiones sistemáticas","Apoyar análisis estadístico (sin sustituir al estadístico)","Mejorar la redacción","Traducir con revisión humana","Preparar diapositivas y preguntas de tribunal"
].map((c) => `<li style="display:flex;gap:.7rem;font-size:.9rem;color:rgba(242,237,228,.8)"><span style="width:6px;height:6px;border-radius:99px;background:var(--sage);margin-top:.45rem;flex:none"></span>${c}</li>`).join("");

document.getElementById("bases").innerHTML = ["PubMed","Scholar","Scopus","Web of Science","SciELO","Cochrane","ClinicalTrials.gov","Zotero","Mendeley","ChatGPT","Claude","Gemini","Grok","Perplexity","Elicit","NotebookLM"].map((b) => `<span class="chip">${b}</span>`).join("");

document.getElementById("ladder").innerHTML = [
  ["Clase introductoria","Academy","Gratuita","Adquisición y filtro ético. Quien pide ghostwriting no pasa."],
  ["Workshop IA para investigadores","Academy","Bajo costo","Prueba del método en formato corto."],
  ["Curso IA + Investigación","Academy","Recurrente","Ingresos de contenido. Base de método grabada."],
  ["Plan START","Academy / Mentor","Entrada","Grabado + comunidad. Accesible para arrancar."],
  ["Plan PRO","Mentor","Núcleo","Grupo en vivo. El corazón de ingresos medios.", true],
  ["Plan PREMIUM","Mentor","1:1","Un consultor por proyecto. Margen alto."],
  ["Plan MASTER","Mentor","Completo","Tesis desde Cero. Acompañamiento premium de las seis fases."],
  ["Consultoría institucional","Lab / B2B","A medida","Workshops para posgrado y comités de ética."],
].map((p, i) => `<li class="${p[4]?"feat":""}"><span style="font-family:var(--display);color:${p[4]?"var(--sage)":"var(--muted)"}">${String(i+1).padStart(2,"0")}</span><strong style="font-family:var(--display);font-size:1.15rem;font-weight:500">${p[0]}</strong><span style="color:${p[4]?"var(--sage)":"var(--forest)"}">${p[1]}</span><span>${p[2]}</span><span style="color:${p[4]?"rgba(242,237,228,.7)":"var(--muted)"};font-size:.9rem">${p[3]}</span></li>`).join("");

const RULES = [
  "No fabricar referencias, datos, resultados, tablas o “hallazgos”.",
  "Verificar toda cita en la fuente original antes de incorporarla al manuscrito.",
  "Declarar el uso de IA conforme a la normativa de la institución y, cuando corresponda, Portaria CNPq 2.664/2026 (herramienta + finalidad + etapa).",
  "Está prohibido presentar texto generado por IA como autoría humana no declarada.",
  "El investigador es integralmente responsable del contenido final.",
];
document.getElementById("ethicsPreview").innerHTML = RULES.map((r,i) => `<li style="display:flex;gap:1.2rem;border-top:1px solid var(--line);padding:1.2rem 0"><span style="font-family:var(--display);color:var(--sage);width:2rem">${String(i+1).padStart(2,"0")}</span><span style="color:var(--ink-soft);line-height:1.55">${r}</span></li>`).join("");

const PRODUCTS = [
  {id:"tcc",label:"TCC / Trabajo de grado"},{id:"monografia",label:"Monografía"},{id:"articulo",label:"Artículo científico"},
  {id:"revision",label:"Revisión sistemática"},{id:"disertacion",label:"Disertación (maestría)"},{id:"tesis",label:"Tesis (doctorado)"},
  {id:"proyecto",label:"Proyecto de investigación"},{id:"clase",label:"Clase / material docente"},{id:"productividad",label:"Productividad científica"}
];
const PROGRAMS = {
  START:{name:"Plan START",tag:"Academy / Mentor",summary:"Grabado + comunidad. Entrada accesible para arrancar con método."},
  PRO:{name:"Plan PRO",tag:"Mentor grupal",summary:"Grupo en vivo, 8 semanas, sobre tu proyecto real."},
  PREMIUM:{name:"Plan PREMIUM",tag:"Mentor 1:1",summary:"Un consultor por proyecto. Acompañamiento individual de alto margen de control."},
  MASTER:{name:"Plan MASTER",tag:"Tesis desde Cero",summary:"Acompañamiento premium completo, las seis fases del método."}
};
const STEPS = [
  {key:"ghostwrite",title:"¿Quieres que alguien escriba tu tesis o artículo por ti?",hint:"Filtro ético. La respuesta define si podemos trabajar juntos.",kind:"choice",options:[{id:"no",label:"No. Quiero autoría y método."},{id:"si",label:"Sí. Necesito que la escriban."}]},
  {key:"product",title:"¿Cuál es el producto académico?",hint:"No eliges un plan. Eliges el trabajo.",kind:"choice",options:PRODUCTS},
  {key:"level",title:"¿En qué nivel estás?",kind:"choice",options:[{id:"grado",label:"Grado / licenciatura"},{id:"especialidad",label:"Especialidad"},{id:"maestria",label:"Maestría"},{id:"doctorado",label:"Doctorado"},{id:"profesional",label:"Ejercicio profesional"}]},
  {key:"area",title:"Área de conocimiento",kind:"choice",options:["Medicina","Enfermería","Odontología","Fisioterapia","Farmacia","Biomedicina","Nutrición","Salud Pública","Psicología","Educación","Ingeniería","Derecho","Otra"].map(a=>({id:a,label:a}))},
  {key:"theme",title:"Tema o línea (aunque sea tentativo)",hint:"Una frase basta. Ejemplo: revisión bibliográfica en neumología.",kind:"text"},
  {key:"advisor",title:"¿Tienes asesor o tutor activo?",kind:"choice",options:[{id:"si",label:"Sí, con seguimiento regular"},{id:"parcial",label:"Sí, pero irregular"},{id:"no",label:"No / aún no asignado"}]},
  {key:"deadline",title:"¿Cuál es el plazo real?",kind:"choice",options:[{id:"30",label:"30 días"},{id:"60",label:"60 días"},{id:"90",label:"90 días"},{id:"180",label:"180 días"},{id:"365",label:"12 meses"}]},
  {key:"method",title:"Metodología prevista",kind:"choice",options:[{id:"revision",label:"Revisión bibliográfica / sistemática"},{id:"cualitativa",label:"Cualitativa"},{id:"cuantitativa",label:"Cuantitativa"},{id:"mixta",label:"Mixta"},{id:"indefinida",label:"Aún no está clara"}]},
  {key:"stage",title:"¿En qué etapa estás hoy?",kind:"choice",options:[{id:"cero",label:"Desde cero"},{id:"proyecto",label:"Proyecto / protocolo"},{id:"busqueda",label:"Búsqueda y lectura"},{id:"redaccion",label:"Redacción"},{id:"revision",label:"Revisión"},{id:"defensa",label:"Preparando defensa"}]},
  {key:"bottleneck",title:"Principal cuello de botella",kind:"choice",options:[{id:"tema",label:"Elegir o acotar el tema"},{id:"metodologia",label:"Metodología"},{id:"literatura",label:"Revisión de literatura"},{id:"redaccion",label:"Redacción"},{id:"analisis",label:"Análisis"},{id:"defensa",label:"Defensa"},{id:"tiempo",label:"Tiempo / bloqueo"}]},
  {key:"iaLevel",title:"¿Cuál es tu nivel de uso de IA?",kind:"choice",options:[{id:"nula",label:"Casi nulo"},{id:"inicial",label:"Inicial — chat ocasional"},{id:"intermedia",label:"Intermedio — ya busca y resume"},{id:"avanzada",label:"Avanzado — flujo con herramientas"}]},
  {key:"hours",title:"Horas semanales reales para el trabajo",kind:"choice",options:[{id:"2",label:"2 a 4 horas"},{id:"5",label:"5 a 8 horas"},{id:"10",label:"10 a 14 horas"},{id:"15",label:"15 horas o más"}]},
  {key:"ethics",title:"¿El estudio pasa por comité de ética?",kind:"choice",options:[{id:"si",label:"Sí"},{id:"no",label:"No"},{id:"no-se",label:"Aún no lo sé"}]},
  {key:"name",title:"¿Cómo te llamas? (opcional)",hint:"Para titular el plan. Puedes dejarlo en blanco.",kind:"text"},
];
const LEVEL_LABEL = {nula:"nivel nulo de IA",inicial:"nivel inicial",intermedia:"nivel intermedio",avanzada:"nivel avanzado","":"nivel por definir"};
const DEADLINE_LABEL = {"30":"plazo 30 días","60":"plazo 60 días","90":"plazo 90 días","180":"plazo 180 días","365":"plazo 12 meses","":"plazo por definir"};
const BOTTLENECK_LABEL = {tema:"dificultad en el tema",metodologia:"dificultad en metodología",literatura:"dificultad en revisión bibliográfica",redaccion:"dificultad en redacción",analisis:"dificultad en análisis",defensa:"dificultad en la defensa",tiempo:"cuello de botella: tiempo","":"cuello de botella por mapear"};
function recommend(a) {
  const product = PRODUCTS.find((p) => p.id === a.product);
  const isThesis = a.product === "tesis" || a.product === "disertacion";
  const long = a.deadline === "180" || a.deadline === "365";
  const short = a.deadline === "30" || a.deadline === "60";
  const early = a.stage === "cero" || a.stage === "proyecto";
  const highTouch = a.bottleneck === "metodologia" || a.bottleneck === "analisis" || a.level === "doctorado" || a.product === "revision";
  let program = "PRO"; const reasons = [];
  if (isThesis && (long || early) && a.hours !== "2") { program = "MASTER"; reasons.push("Trabajo de posgrado largo: conviene la columna vertebral Tesis desde Cero."); }
  else if (highTouch && (a.level === "doctorado" || a.level === "maestria" || a.advisor === "no")) { program = "PREMIUM"; reasons.push("El cuello de botella y el nivel piden auditoría 1:1, no un ritmo grupal."); }
  else if (a.iaLevel === "nula" || a.iaLevel === "inicial" || short || a.hours === "2") {
    program = a.product === "clase" || a.product === "productividad" ? "START" : "PRO";
    reasons.push(program === "START" ? "Entrada accesible: grabado + comunidad para instalar el método sin saturarte." : "Plazo y nivel de IA encajan con inmersión grupal sobre tu proyecto real.");
  } else { program = "PRO"; reasons.push("El formato grupal en vivo es el núcleo: método + comunidad + ejercicio sobre tu trabajo."); }
  if (a.bottleneck === "metodologia") reasons.push("La metodología es el punto de control humano: la IA propone, tú apruebas el diseño.");
  if (a.product === "revision") reasons.push("Revisión sistemática exige estrategia de búsqueda, exclusión y trazabilidad declarable.");
  if (a.ethics === "si") reasons.push("Hay comité de ética: el flujo MedAI no introduce datos identificables de pacientes.");
  const phases = program === "MASTER" ? ["Descubrimiento","Proyecto","Investigación","Producción","Revisión","Defensa"] : program === "PREMIUM" ? ["Diagnóstico","Diseño","Búsqueda y lectura","Redacción auditada","Defensa"] : program === "PRO" ? ["IA para investigadores","Bases y búsqueda","Lectura","Metodología","Escritura","Defensa"] : ["Clase introductoria","Curso IA + Investigación","Comunidad","Plan de 90 días"];
  return { level: LEVEL_LABEL[a.iaLevel]||"", deadline: DEADLINE_LABEL[a.deadline]||"", work: product?.label || "producto académico", area: a.area || "área por definir", bottleneck: BOTTLENECK_LABEL[a.bottleneck]||"", program, reasons, phases };
}
const KEY = "scientia-diagnostico";
let answers = JSON.parse(localStorage.getItem(KEY) || "{}");
let step = 0, done = false;
const box = document.getElementById("diag");
function save() { localStorage.setItem(KEY, JSON.stringify(answers)); }
function renderDiag() {
  if (answers.ghostwrite === "si" && step > 0) {
    box.innerHTML = `<h3 style="font-size:1.85rem">No tomamos ese encargo.</h3><p style="color:var(--ink-soft);line-height:1.6">Scientia AI no hace ghostwriting. Quien solicita que escribamos la tesis en su lugar es rechazado — el Código de Ética no es un anexo decorativo: es el filtro comercial.</p><p style="color:var(--muted)">Si lo que buscas es aprender a conducir tu investigación con IA, de forma declarable, puedes volver a empezar.</p><button class="btn" id="resetBtn" style="margin-top:1.6rem">Reiniciar diagnóstico</button>`;
    box.querySelector("#resetBtn").onclick = reset;
    return;
  }
  if (done) {
    const plan = recommend(answers); const prog = PROGRAMS[plan.program];
    const chips = [plan.level, plan.deadline, plan.work, plan.area, plan.bottleneck, "programa "+plan.program].join(" · ");
    box.innerHTML = `<p class="eyebrow">Plan personalizado de investigación</p><h3 style="font-size:1.85rem;margin:.4rem 0">${answers.name ? answers.name+", este es tu plan." : "Este es tu plan."}</h3>${answers.theme?`<p style="font-style:italic;color:var(--muted)">«${answers.theme}»</p>`:""}<p style="font-size:.9rem;color:var(--muted)">${chips}</p><div style="background:var(--ink);color:var(--paper);border-radius:1rem;padding:1.6rem;margin-top:1.6rem"><p class="eyebrow" style="color:var(--sage)">${prog.tag}</p><p style="font-family:var(--display);font-size:1.7rem;margin:.3rem 0">${prog.name}</p><p style="color:rgba(242,237,228,.75)">${prog.summary}</p></div><ul style="margin:1.4rem 0;padding:0;list-style:none">${plan.reasons.map(r=>`<li style="display:flex;gap:.7rem;font-size:.9rem;color:var(--ink-soft);margin:.5rem 0"><span style="width:6px;height:6px;border-radius:99px;background:var(--forest);margin-top:.5rem;flex:none"></span>${r}</li>`).join("")}</ul><p class="eyebrow" style="color:var(--muted)">Recorrido recomendado</p><div class="chips">${plan.phases.map((ph,i)=>`<span class="chip">${i+1}. ${ph}</span>`).join("")}</div><div class="row"><a class="btn" href="#sede">Agendar en Manzana 40</a><button class="btn btn-ghost" id="resetBtn" style="color:var(--ink);box-shadow:inset 0 0 0 1px var(--line)">Nuevo diagnóstico</button></div>`;
    box.querySelector("#resetBtn").onclick = reset;
    return;
  }
  const cur = STEPS[step]; const val = answers[cur.key] || "";
  const can = cur.key === "name" || cur.kind === "text" || !!val;
  box.innerHTML = `<div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.6rem"><p class="eyebrow" style="margin:0;color:var(--muted)">Ítem ${step+1} de ${STEPS.length}</p><div class="progress"><span style="width:${((step+1)/STEPS.length)*100}%"></span></div></div><h3 style="font-size:1.7rem;margin:0">${cur.title}</h3>${cur.hint?`<p style="color:var(--muted);font-size:.9rem">${cur.hint}</p>`:""}${cur.kind==="text"?`<input id="txt" placeholder="Escribe aquí" value="${(val||"").replace(/"/g,'"')}" />`:`<div class="opts">${cur.options.map(o=>`<button class="opt ${val===o.id?"on":""}" data-id="${o.id}">${o.label}</button>`).join("")}</div>`}<div style="display:flex;justify-content:space-between;margin-top:2.2rem"><button class="btn btn-ghost" id="back" ${step===0?"disabled":""} style="color:var(--ink);box-shadow:inset 0 0 0 1px var(--line)">Atrás</button><button class="btn" id="next" ${can?"":"disabled"}>${step===STEPS.length-1?"Ver plan":"Continuar"}</button></div>`;
  box.querySelectorAll(".opt").forEach((b) => b.onclick = () => { answers[cur.key] = b.dataset.id; save(); renderDiag(); });
  const txt = box.querySelector("#txt");
  if (txt) txt.oninput = () => { answers[cur.key] = txt.value; save(); };
  if (txt) txt.onkeydown = (e) => { if (e.key === "Enter") goNext(); };
  box.querySelector("#back").onclick = () => { step = Math.max(0, step-1); renderDiag(); };
  box.querySelector("#next").onclick = goNext;
}
function goNext() {
  const cur = STEPS[step];
  if (cur.key === "ghostwrite" && answers.ghostwrite === "si") { step = 1; renderDiag(); return; }
  if (step === STEPS.length - 1) { done = true; renderDiag(); return; }
  step += 1; renderDiag();
}
function reset() { localStorage.removeItem(KEY); answers = {}; step = 0; done = false; renderDiag(); }
renderDiag();

document.getElementById("visitForm").onsubmit = (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const prev = JSON.parse(localStorage.getItem("scientia-visitas") || "[]");
  localStorage.setItem("scientia-visitas", JSON.stringify([{...data, at: new Date().toISOString()}, ...prev].slice(0,20)));
  document.getElementById("visitFields").classList.add("hidden");
  document.getElementById("visitOk").classList.remove("hidden");
};
