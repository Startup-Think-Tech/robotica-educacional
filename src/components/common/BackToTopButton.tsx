import { ArrowUp } from "lucide-react";
import { useScrollVisibility } from "../../hooks/useScrollVisibility";

export function BackToTopButton() {
  // Use a lower threshold for mobile (200px) and higher for desktop (300px)
  const isVisible = useScrollVisibility(200);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Voltar ao topo"
      className="fixed bottom-4 right-4 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white shadow-lg transition-all hover:scale-110 hover:bg-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 active:scale-95 dark:bg-brand-accent dark:hover:bg-brand-primary md:bottom-8 md:right-8 md:h-14 md:w-14 md:shadow-accent"
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5 md:h-6 md:w-6" />
    </button>
  );
}

