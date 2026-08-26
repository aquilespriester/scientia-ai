import { Link } from "@tanstack/react-router";
import { Wordmark } from "@/components/site/logo";

export function Footer() {
  return (
    <footer className="bg-paper-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Wordmark />
          <p className="font-display mt-6 max-w-sm text-2xl leading-snug tracking-[-0.02em] text-ink">
            Inteligencia para tu investigación. Ciencia para tus decisiones.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm md:col-span-7 md:grid-cols-3">
          <div>
            <p className="mb-3 text-[0.7rem] font-medium tracking-[0.16em] text-muted uppercase">Método</p>
            <ul className="space-y-2 text-ink-soft">
              <li><a href="/#metodo">Tesis desde Cero</a></li>
              <li><a href="/#servicios">Scientia Mentor</a></li>
              <li><a href="/#diagnostico">Diagnóstico</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-[0.7rem] font-medium tracking-[0.16em] text-muted uppercase">Empresa</p>
            <ul className="space-y-2 text-ink-soft">
              <li><Link to="/etica">Código de Ética</Link></li>
              <li><a href="/#planes">Planes</a></li>
              <li><a href="/#sede">Manzana 40</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-[0.7rem] font-medium tracking-[0.16em] text-muted uppercase">Sede</p>
            <p className="leading-relaxed text-ink-soft">
              Manzana 40 Plaza Empresarial
              <br />
              Av. San Martín
              <br />
              Santa Cruz de la Sierra, BO
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted md:flex-row md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Scientia AI. Autoría asistida.</p>
          <p>El investigador es integralmente responsable del contenido final.</p>
        </div>
      </div>
    </footer>
  );
}
