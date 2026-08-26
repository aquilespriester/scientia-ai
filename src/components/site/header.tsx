import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/site/logo";

const LINKS = [
  { href: "/#metodo", label: "Método" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#planes", label: "Planes" },
  { href: "/etica", label: "Ética" },
  { href: "/#sede", label: "Sede" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper/95 shadow-border backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="relative z-10 text-ink">
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted hover:text-ink text-[0.8125rem] font-medium tracking-wide transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="/#diagnostico">Diagnóstico académico</a>
          </Button>
        </nav>
        <button
          type="button"
          className="relative z-10 flex size-11 items-center justify-center rounded-md text-ink lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <div className="fixed inset-0 top-16 z-40 bg-paper lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display py-3 text-2xl text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#diagnostico"
              onClick={() => setOpen(false)}
              className="bg-forest text-paper mt-6 inline-flex h-12 items-center justify-center rounded-md px-5 text-sm font-medium"
            >
              Diagnóstico académico
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
