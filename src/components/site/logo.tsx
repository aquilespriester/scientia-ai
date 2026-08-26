import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8 shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="7" fill="currentColor" />
      <path
        fill="var(--color-paper)"
        d="M21.4 11.1c0-2.35-1.95-3.85-5.25-3.85-3.45 0-5.55 1.7-6.15 4.25h3.15c.35-1.2 1.45-2.05 3-2.05 1.4 0 2.2.65 2.2 1.65 0 .9-.7 1.4-2.65 1.85l-2.15.5c-3.15.7-4.7 2.15-4.7 4.55 0 2.6 2.15 4.25 5.6 4.25 3.55 0 5.75-1.8 6.4-4.5h-3.25c-.4 1.3-1.6 2.2-3.3 2.2-1.5 0-2.4-.7-2.4-1.7 0-.9.7-1.4 2.75-1.9l2.25-.5c3.05-.7 4.4-2.2 4.4-4.6z"
      />
    </svg>
  );
}

export function Wordmark({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark className={invert ? "text-paper" : "text-forest"} />
      <span className="font-display text-[1.05rem] font-medium tracking-[-0.03em] leading-none">
        Scientia <span className={invert ? "text-sage" : "text-forest"}>AI</span>
      </span>
    </span>
  );
}
