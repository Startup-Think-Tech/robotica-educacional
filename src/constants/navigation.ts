export interface NavigationLink {
  label: string;
  to: string;
}

export const NAVIGATION_LINKS: NavigationLink[] = [
  { label: "Sobre", to: "/" },
  { label: "Equipe", to: "/equipe" },
  { label: "Resultados", to: "/resultados" },
  { label: "Metodologia", to: "/metodologia" },
  { label: "Feedback", to: "/feedback" },
  { label: "Contato", to: "/contato" },
];

