import { useCallback, useRef, useState } from "react";

export type ToastVariant = "success" | "error";

export interface ToastState {
  title: string;
  message: string;
  variant: ToastVariant;
  visible: boolean;
}

export function useToast(initialTimeout = 4000) {
  const [toast, setToast] = useState<ToastState | null>(null);
  const timerRef = useRef<number | null>(null);

  const hideToast = useCallback(() => {
    setToast((prev) => (prev ? { ...prev, visible: false } : null));
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const showToast = useCallback(
    (payload: Omit<ToastState, "visible">) => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }

      setToast({ ...payload, visible: true });

      timerRef.current = window.setTimeout(() => {
        hideToast();
      }, initialTimeout);
    },
    [hideToast, initialTimeout],
  );

  return { toast, showToast, hideToast };
}

