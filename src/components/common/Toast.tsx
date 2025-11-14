import { X } from "lucide-react";
import clsx from "clsx";
import type { ToastState } from "../../hooks/useToast";

interface ToastProps {
  toast: ToastState | null;
  onClose: () => void;
}

export function Toast({ toast, onClose }: ToastProps) {
  if (!toast) {
    return null;
  }

  return (
    <div
      className={clsx(
        "fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl border px-5 py-4 shadow-light transition-all duration-300",
        toast.visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        toast.variant === "success"
          ? "border-feedback-successBorder bg-feedback-successBg text-feedback-successText"
          : "border-feedback-errorBorder bg-feedback-errorBg text-feedback-errorText",
      )}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <h4 className="text-sm font-semibold uppercase tracking-wide">
            {toast.title}
          </h4>
          <p className="mt-1 text-sm">{toast.message}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-white/40 p-1 text-xs uppercase tracking-wide transition hover:border-white/70 hover:bg-white/10"
          aria-label="Fechar aviso"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

