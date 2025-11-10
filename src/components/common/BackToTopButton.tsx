export function BackToTopButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-full border border-brand-primary/20 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-brand-primary transition hover:border-brand-primary hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent dark:border-white/10 dark:text-brand-darkText dark:hover:border-brand-primary/40 dark:hover:text-brand-primary"
    >
      Voltar ao topo
    </button>
  );
}

