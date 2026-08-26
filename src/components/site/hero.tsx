import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-paper">
      <img
        src="/photos/hub40.jpg"
        alt="Hub 40 en Manzana 40: espacio de trabajo con vista al dosel de Santa Cruz de la Sierra"
        className="absolute inset-0 size-full object-cover object-[38%_28%] md:object-[42%_30%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/72 to-ink/30" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
        <p className="text-sage mb-5 text-[0.7rem] font-medium tracking-[0.22em] uppercase">
          Hub 40 · Manzana 40 · Santa Cruz de la Sierra
        </p>
        <h1 className="font-display max-w-4xl text-[2.6rem] leading-[1.05] font-medium tracking-[-0.035em] md:text-6xl lg:text-[4.5rem]">
          Inteligencia para tu investigación.
          <span className="mt-2 block text-paper/70">Ciencia para tus decisiones.</span>
        </h1>
        <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-paper/80 md:text-lg">
          Enseñamos a utilizar Inteligencia Artificial para investigar, analizar, escribir y
          desarrollar trabajos científicos con método, calidad y responsabilidad.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg" variant="invert">
            <a href="/#diagnostico">Empezar diagnóstico</a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-paper hover:bg-paper/10 hover:text-paper">
            <a href="/#metodo">Ver el método</a>
          </Button>
        </div>
        <div className="mt-16 flex items-center gap-3 text-[0.7rem] tracking-[0.18em] text-paper/55 uppercase">
          <ArrowDown className="size-3.5" />
          Autoría asistida, no sustituida
        </div>
      </div>
    </section>
  );
}
