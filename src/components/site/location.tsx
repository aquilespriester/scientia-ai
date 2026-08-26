import { useState, type FormEvent } from "react";
import { MapPin, Building2, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const GALLERY = [
  {
    src: "/photos/manzana-sala.jpg",
    alt: "Sala de reuniones en Manzana 40 con vista al bosque urbano",
    className: "md:col-span-2",
  },
  {
    src: "/photos/hub40.jpg",
    alt: "Coworking Hub 40, espacio de inmersión de Scientia AI",
    className: "",
  },
  {
    src: "/photos/manzana-cielo.jpg",
    alt: "Torres de Manzana 40 Plaza Empresarial",
    className: "",
  },
  {
    src: "/photos/plaza-aerea.jpg",
    alt: "Vista aérea de la Plaza 24 de Septiembre y la Catedral Metropolitana",
    className: "md:col-span-2",
  },
  {
    src: "/photos/catedral.jpg",
    alt: "Catedral Metropolitana de Santa Cruz de la Sierra",
    className: "",
  },
  {
    src: "/photos/skyline.jpg",
    alt: "Skyline de Santa Cruz de la Sierra entre el dosel tropical",
    className: "",
  },
  {
    src: "/photos/catedral-atardecer.jpg",
    alt: "Atardecer en la Plaza 24 de Septiembre",
    className: "",
  },
  {
    src: "/photos/microscopio.jpg",
    alt: "Trabajo de laboratorio científico — el público MedAI",
    className: "md:col-span-2",
  },
];

export function Location() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      note: String(data.get("note") ?? ""),
      at: new Date().toISOString(),
    };
    const prev = JSON.parse(localStorage.getItem("scientia-visitas") || "[]") as unknown[];
    localStorage.setItem("scientia-visitas", JSON.stringify([payload, ...prev].slice(0, 20)));
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section id="sede" className="bg-ink text-paper">
      <div className="relative min-h-[52vh] overflow-hidden">
        <img
          src="/photos/manzana40.jpg"
          alt="Torres de Manzana 40 Plaza Empresarial al atardecer en Santa Cruz de la Sierra"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="relative mx-auto flex min-h-[52vh] max-w-6xl flex-col justify-end px-5 py-16 md:px-8">
          <p className="text-sage mb-3 text-[0.7rem] font-medium tracking-[0.22em] uppercase">Sede</p>
          <h2 className="font-display max-w-3xl text-4xl leading-[1.08] tracking-[-0.03em] md:text-6xl">
            Manzana 40.
            <span className="mt-2 block text-paper/70">Santa Cruz de la Sierra.</span>
          </h2>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <div className="md:col-span-6">
          <p className="text-lg leading-relaxed text-paper/80">
            Scientia AI opera en Manzana 40 Plaza Empresarial, en el corazón financiero de Equipetrol
            Norte. Un edificio LEED — torres gemelas de muro cortina, 16 ascensores, coworking Hub 40
            y boulevard gastronómico — pensado para trabajo de alto criterio, no para un aula improvisada.
          </p>
          <ul className="mt-10 space-y-5">
            <li className="flex gap-4">
              <MapPin className="text-sage mt-0.5 size-5 shrink-0" />
              <div>
                <p className="font-medium">Av. San Martín, Equipetrol Norte</p>
                <p className="text-sm text-paper/60">Santa Cruz de la Sierra, Bolivia</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Building2 className="text-sage mt-0.5 size-5 shrink-0" />
              <div>
                <p className="font-medium">Plaza Empresarial · A4 Arquitectos</p>
                <p className="text-sm text-paper/60">Primera edificación empresarial LEED del país</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Leaf className="text-sage mt-0.5 size-5 shrink-0" />
              <div>
                <p className="font-medium">Mentorías presenciales y en vivo</p>
                <p className="text-sm text-paper/60">Hub 40, salas de reunión y sesiones 1:1</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="md:col-span-6">
          <form onSubmit={onSubmit} className="rounded-[1.75rem] bg-ink-soft p-7 md:p-9">
            <h3 className="font-display text-2xl tracking-[-0.02em]">Agenda una visita</h3>
            <p className="mt-2 text-sm text-paper/60">
              Trae tu diagnóstico. Hablamos de método, no de atajos.
            </p>
            {sent ? (
              <p className="mt-8 rounded-2xl bg-forest/40 p-5 text-sm leading-relaxed text-paper">
                Recibido. Te contactaremos para coordinar en Manzana 40. Si ya completaste el
                diagnóstico, lo usaremos como punto de partida.
              </p>
            ) : (
              <div className="mt-8 grid gap-4">
                <label className="grid gap-1.5 text-sm">
                  Nombre
                  <input
                    name="name"
                    required
                    className="h-12 rounded-xl border-0 bg-ink px-4 text-paper outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sage"
                  />
                </label>
                <label className="grid gap-1.5 text-sm">
                  Correo
                  <input
                    name="email"
                    type="email"
                    required
                    className="h-12 rounded-xl border-0 bg-ink px-4 text-paper outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sage"
                  />
                </label>
                <label className="grid gap-1.5 text-sm">
                  Qué estás escribiendo
                  <textarea
                    name="note"
                    rows={3}
                    className="rounded-xl border-0 bg-ink px-4 py-3 text-paper outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sage"
                  />
                </label>
                <Button type="submit" variant="invert" className="mt-2 h-12">
                  Solicitar agenda
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-5 pb-20 md:grid-cols-3 md:px-8">
        {GALLERY.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`aspect-[4/3] w-full rounded-[1.5rem] object-cover ${img.className}`}
          />
        ))}
      </div>
    </section>
  );
}
