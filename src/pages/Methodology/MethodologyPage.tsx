const STEAM_CARDS = [
  { label: "S", text: "Ciência", color: "bg-steam-s/20 text-steam-s" },
  { label: "T", text: "Tecnologia", color: "bg-steam-t/20 text-steam-t" },
  { label: "E", text: "Engenharia", color: "bg-steam-e/20 text-steam-e" },
  { label: "A", text: "Artes", color: "bg-steam-a/20 text-steam-a" },
  { label: "M", text: "Matemática", color: "bg-steam-m/20 text-steam-m" },
];

const OBJECTIVE_ITEMS = [
  "Pensamento crítico e criativo",
  "Aprendizagem baseada em projetos",
  "Trabalho em equipe e comunicação",
  "Interdisciplinaridade",
];

const PRACTICE_ITEMS = [
  "Cálculos matemáticos (M)",
  "Conceitos de energia e materiais (S e E)",
  "Uso de softwares ou sensores (T)",
  "Design e criatividade (A)",
];

const BENEFITS = [
  "Aprendizagem ativa e participativa",
  "Desenvolvimento de autonomia e curiosidade científica",
  "Integração entre razão e emoção no processo de aprender",
  "Formação de cidadãos criativos, críticos e colaborativos",
];

export function MethodologyPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-16 text-brand-lightText md:px-8 dark:text-brand-darkText">
      <header className="text-center md:text-left">
        <h1 className="text-4xl font-bold uppercase tracking-[0.4rem] text-brand-primary">
          Metodologia
        </h1>
      </header>

      <section className="grid gap-4 rounded-3xl border border-black/10 bg-white/80 p-8 shadow-light backdrop-blur-md dark:border-white/10 dark:bg-white/10 sm:grid-cols-5">
        {STEAM_CARDS.map((card) => (
          <div
            key={card.label}
            className={`flex flex-col items-center justify-center rounded-2xl p-6 text-center font-bold uppercase tracking-wide ${card.color}`}
          >
            <span className="text-3xl md:text-4xl">{card.label}</span>
            <p className="mt-2 text-sm font-semibold">{card.text}</p>
          </div>
        ))}
      </section>

      <section className="space-y-6 rounded-3xl border border-black/10 bg-white/80 p-8 shadow-light backdrop-blur-md dark:border-white/10 dark:bg-white/10 md:p-12">
        <h2 className="text-2xl font-semibold text-brand-accent md:text-3xl">
          O que é?
        </h2>
        <p className="text-base leading-relaxed text-brand-lightTextMuted dark:text-brand-darkTextMuted">
          A metodologia STEAM é uma forma inovadora de ensinar e aprender que
          combina cinco áreas essenciais do conhecimento: Science (Ciência),
          Technology (Tecnologia), Engineering (Engenharia), Arts (Artes) e
          Mathematics (Matemática).
        </p>
        <p className="text-base leading-relaxed text-brand-lightTextMuted dark:text-brand-darkTextMuted">
          A ideia é integrar essas disciplinas de maneira prática e
          interdisciplinar, mostrando aos alunos que o conhecimento não está
          dividido em matérias isoladas, mas conectado — como acontece na vida
          real. Essa abordagem promove o aprendizado por meio da experimentação,
          da resolução de problemas e da criatividade, tornando o aluno
          protagonista do processo educativo.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-black/10 bg-white/80 p-8 shadow-light backdrop-blur-md dark:border-white/10 dark:bg-white/10 md:p-12">
        <h2 className="text-2xl font-semibold text-brand-accent md:text-3xl">
          Objetivo
        </h2>
        <p className="text-base leading-relaxed text-brand-lightTextMuted dark:text-brand-darkTextMuted">
          A ideia principal é preparar os alunos para resolver problemas reais,
          incentivando:
        </p>
        <ul className="grid gap-3 text-base font-medium text-brand-lightTextMuted dark:text-brand-darkTextMuted md:grid-cols-2">
          {OBJECTIVE_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span aria-hidden className="mt-1 text-brand-accent">
                •
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6 rounded-3xl border border-black/10 bg-white/80 p-8 shadow-light backdrop-blur-md dark:border-white/10 dark:bg-white/10 md:p-12">
        <h2 className="text-2xl font-semibold text-brand-accent md:text-3xl">
          Como funciona na prática?
        </h2>
        <p className="text-base leading-relaxed text-brand-lightTextMuted dark:text-brand-darkTextMuted">
          Em vez de ensinar cada disciplina isoladamente, a metodologia propõe
          atividades integradas. Por exemplo: Um projeto em que os alunos criam
          um protótipo de casa sustentável envolve:
        </p>
        <ul className="grid gap-3 text-base font-medium text-brand-lightTextMuted dark:text-brand-darkTextMuted md:grid-cols-2">
          {PRACTICE_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span aria-hidden className="mt-1 text-brand-accent">
                •
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6 rounded-3xl border border-black/10 bg-white/80 p-8 shadow-light backdrop-blur-md dark:border-white/10 dark:bg-white/10 md:p-12">
        <h2 className="text-2xl font-semibold text-brand-accent md:text-3xl">
          Benefícios da abordagem STEAM
        </h2>
        <ul className="grid gap-3 text-base font-medium text-brand-lightTextMuted dark:text-brand-darkTextMuted md:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2">
              <span aria-hidden className="mt-1 text-brand-accent">
                •
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

