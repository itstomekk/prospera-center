import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import EmailForm from "@/components/EmailForm";

const DomainBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-2">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-between gap-3 text-left"
          aria-expanded={open}
        >
          <span className="text-[11px] leading-tight tracking-wide text-muted-foreground sm:text-xs">
            <span className="text-primary">prospera.center</span> is for sale —
            interested in this domain?
          </span>
          <span className="flex shrink-0 items-center gap-1 text-[11px] uppercase tracking-wider text-primary sm:text-xs">
            {open ? "Hide" : "Get in touch"}
            {open ? (
              <ChevronDown className="h-3.5 w-3.5" />
            ) : (
              <ChevronUp className="h-3.5 w-3.5" />
            )}
          </span>
        </button>

        {open && (
          <div className="pb-2">
            <EmailForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainBar;
