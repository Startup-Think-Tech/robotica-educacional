import { useEffect, useRef, useState } from "react";
import daviImg from "../../assets/img/davi.jpg";
import jessicaImg from "../../assets/img/jessica.jpg";
import gabrielImg from "../../assets/img/gabriel.jpeg";
import frankImg from "../../assets/img/frank.jpeg";
import andreImg from "../../assets/img/andre.jpeg";
import muriloImg from "../../assets/img/murilo.jpeg";
import lucasImg from "../../assets/img/lucas.jpeg";
import anaImg from "../../assets/img/ana.jpeg";
import antonioImg from "../../assets/img/antonio.jpg";

interface TeamMember {
  name: string;
  role: string;
  course: string;
  bio: string;
  avatar: string;
  linkedin: string;
  github: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Davi Peterson",
    role: "Backend Developer",
    course: "Análise e Desenvolvimento de Sistemas",
    bio: "Desenvolvedor Fullstack focado em criar soluções web modernas, eficientes e que realmente funcionam na prática.",
    avatar: daviImg,
    linkedin:
      "https://www.linkedin.com/in/davipeterson?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/daviPeter07",
  },
  {
    name: "Jessica Batista",
    role: "Frontend Developer",
    course: "Análise e Desenvolvimento de Sistemas",
    bio: "Mestre em lógica de negócios e otimização de banco de dados, Jessica constrói a infraestrutura robusta que suporta todo o sistema.",
    avatar: jessicaImg,
    linkedin: "https://www.linkedin.com/in/jessica-l-l-batista/",
    github: "https://github.com/devel-jessy",
  },
  {
    name: "Gabriel Monteiro",
    role: "Cybersecurity",
    course: "Análise e Desenvolvimento de Sistemas",
    bio: "Responsável por garantir a segurança digital da startup, protegendo sistemas e dados contra ameaças cibernéticas e mantendo a infraestrutura sempre protegida e confiável.",
    avatar: gabrielImg,
    linkedin:
      "https://www.linkedin.com/in/gabriel-vasconcelos-b61916274/",
    github: "https://github.com/gabrielvasconcelos77",
  },
  {
    name: "Frank Junior",
    role: "Full-stack Developer",
    course: "Análise e Desenvolvimento de Sistemas",
    bio: "Prof. Matemática, apaixonado pelo mundo Tech, desenvolvedor diversificado, em constante evolução e aprendizado.",
    avatar: frankImg,
    linkedin: "https://www.linkedin.com/in/frankjunior23/",
    github: "https://github.com/FrankJr23",
  },
  {
    name: "Andre Botelho",
    role: "Quality Assurance",
    course: "Análise e Desenvolvimento de Sistemas",
    bio: "Com olhar detalhista, André automatiza testes e reporta bugs, assegurando que o lançamento do produto seja suave e sem surpresas.",
    avatar: andreImg,
    linkedin:
      "https://www.linkedin.com/in/andr%C3%A9-luiz-botelho-de-souza-5a8773120/",
    github: "https://github.com/amdrls",
  },
  {
    name: "Murilo Coelho",
    role: "Backend Developer",
    course: "Análise e Desenvolvimento de Sistemas",
    bio: "Apaixonado por tecnologia e automação, Murilo atua como programador backend, desenvolvendo soluções criativas e inteligentes.",
    avatar: muriloImg,
    linkedin:
      "https://www.linkedin.com/in/murilo-coelho-souza-995500301/",
    github: "https://github.com/murilouw",
  },
  {
    name: "Lucas Campos",
    role: "Analista de Dados",
    course: "Análise e Desenvolvimento de Sistemas",
    bio: "Lucas transforma dados brutos em insights estratégicos, ajudando a tomar decisões informadas para a evolução do produto.",
    avatar: lucasImg,
    linkedin: "https://www.linkedin.com/in/lucas-csz/",
    github: "https://github.com/Hello-Luke0",
  },
  {
    name: "Ana Claudia",
    role: "Frontend Developer",
    course: "Análise e Desenvolvimento de Sistemas",
    bio: "Responsável pela base do software, cuidando da organização de arquivos e da paleta de cores para garantir melhor escalabilidade.",
    avatar: anaImg,
    linkedin: "https://www.linkedin.com/in/ana-silva-a10a0130b",
    github: "https://github.com/freitas7ana",
  },
  {
    name: "Antônio Carlos",
    role: "Full-stack Developer",
    course: "Análise e Desenvolvimento de Sistemas",
    bio: "Com expertise nas duas pontas do desenvolvimento, Antônio é o coringa que transita entre o frontend e o backend com maestria.",
    avatar: antonioImg,
    linkedin:
      "https://www.linkedin.com/in/antonio-carlos-a543051b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/antoniooccarlos",
  },
];

export function TeamPage() {
  const members = TEAM_MEMBERS;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScrollState = () => {
      setCanScrollLeft(container.scrollLeft > 0);
      const maxScrollLeft = container.scrollWidth - container.clientWidth - 4;
      setCanScrollRight(container.scrollLeft < maxScrollLeft);
    };

    updateScrollState();
    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const handleScroll = (direction: "prev" | "next") => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.9;
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-brand-lightText md:px-8 dark:text-brand-darkText">
      <section className="text-center md:text-left">
        <h2 className="text-3xl font-bold uppercase tracking-[0.4rem] text-brand-primary md:text-4xl">
          Nossa Equipe
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-brand-lightTextMuted dark:text-brand-darkTextMuted">
          Conheça os talentos e a paixão por tecnologia que movem nosso projeto.
          Uma equipe diversificada e dedicada a entregar o melhor resultado.
        </p>
      </section>

      <div className="relative mt-12">
        <div className="mt-8 overflow-hidden rounded-3xl border border-black/10 bg-white/80 shadow-light backdrop-blur-lg dark:border-white/10 dark:bg-white/10">
          <div className="flex gap-6 overflow-x-auto px-6 py-10" ref={containerRef}>
            {members.map((member) => (
              <article
                key={member.name}
                className="group flex w-80 shrink-0 flex-col rounded-2xl bg-brand-lightBgSecondary p-6 shadow-light transition hover:-translate-y-1 hover:shadow-medium dark:bg-brand-darkBgSecondary/70"
              >
                <figure className="relative aspect-square overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
                  <img
                    src={member.avatar}
                    alt={`Foto de ${member.name}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </figure>

                <div className="mt-6 space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                    {member.role}
                  </span>
                  <h3 className="text-xl font-semibold text-brand-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-brand-lightTextMuted dark:text-brand-darkTextMuted">
                    {member.course}
                  </p>
                  <p className="text-sm leading-relaxed text-brand-lightTextMuted dark:text-brand-darkTextMuted/80">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full border border-brand-primary/40 px-4 py-2 text-center text-sm font-semibold text-brand-primary transition hover:border-brand-primary hover:bg-brand-primary/10"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full border border-brand-accent/40 px-4 py-2 text-center text-sm font-semibold text-brand-accent transition hover:border-brand-accent hover:bg-brand-accent/10"
                  >
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => handleScroll("prev")}
            className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand-primary/40 bg-white text-brand-primary shadow-light transition hover:border-brand-primary hover:bg-brand-primary/10 disabled:pointer-events-none disabled:opacity-30 dark:border-white/30 dark:bg-brand-darkBg dark:text-brand-darkText dark:hover:border-brand-primary/50 dark:hover:text-brand-primary md:flex"
            aria-label="Membros anteriores"
            disabled={!canScrollLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => handleScroll("next")}
            className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand-primary/40 bg-white text-brand-primary shadow-light transition hover:border-brand-primary hover:bg-brand-primary/10 disabled:pointer-events-none disabled:opacity-30 dark:border-white/30 dark:bg-brand-darkBg dark:text-brand-darkText dark:hover:border-brand-primary/50 dark:hover:text-brand-primary md:flex"
            aria-label="Próximos membros"
            disabled={!canScrollRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

