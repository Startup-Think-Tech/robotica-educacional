export function AboutPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 text-brand-lightText sm:gap-10 sm:px-6 sm:py-12 md:gap-12 md:px-8 md:py-16 dark:text-brand-darkText">
      <header className="space-y-2 text-center sm:space-y-3 md:text-left">
        <h1 className="text-2xl font-bold uppercase tracking-[0.2rem] text-brand-primary sm:text-3xl sm:tracking-[0.3rem] md:text-4xl md:tracking-[0.4rem] lg:text-5xl">
          Robótica Educacional
        </h1>
        <p className="text-base text-brand-lightTextMuted sm:text-lg dark:text-brand-darkTextMuted">
          Pensado. Criado. Resolvido.
        </p>
      </header>

      <section className="space-y-6 rounded-2xl bg-white/80 p-6 shadow-light backdrop-blur-md transition dark:bg-white/5 dark:shadow-light sm:space-y-8 sm:rounded-3xl sm:p-8 md:p-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-brand-accent sm:text-2xl md:text-3xl">
            Objetivo do Projeto
          </h2>
          <p className="text-sm leading-relaxed text-brand-lightTextMuted sm:text-base dark:text-brand-darkTextMuted">
            O objetivo geral do projeto é compreender a lógica envolvida em
            programação e robótica com alunos do Ensino Médio, desenvolvendo a
            criatividade e o pensamento computacional na visualização do
            abstrato.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-brand-primary sm:text-xl">
            Os objetivos específicos incluem:
          </h3>
          <div className="mt-4 grid gap-4 sm:mt-6 sm:gap-6 md:grid-cols-3">
            {[
              "Relacionar conceitos da lógica matemática e programação computacional para o desenvolvimento da robótica.",
              "Aplicar conceitos da linguagem de programação em ambiente de desenvolvimento inseridos na cultura maker e princípios STEAM, para elaboração de robôs com funções distintas.",
              "Explanar sobre a relação lógica matemática envolvida com a programação na construção de um carro seguidor de linha.",
            ].map((text) => (
              <article
                key={text}
                className="rounded-xl bg-brand-lightBgSecondary p-4 shadow-light transition hover:shadow-medium sm:rounded-2xl sm:p-6 dark:bg-brand-darkBgSecondary/60"
              >
                <span className="text-2xl sm:text-3xl" aria-hidden>
                  🚀
                </span>
                <p className="mt-3 text-xs leading-relaxed text-brand-lightTextMuted sm:mt-4 sm:text-sm dark:text-brand-darkTextMuted">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-2xl bg-white/80 p-6 shadow-light backdrop-blur-md transition dark:bg-white/5 dark:shadow-light sm:space-y-8 sm:rounded-3xl sm:p-8 md:p-12">
        <h2 className="text-xl font-semibold text-brand-accent sm:text-2xl md:text-3xl">
          Problema que o Projeto Resolve
        </h2>
        <p className="text-sm leading-relaxed text-brand-lightTextMuted sm:text-base dark:text-brand-darkTextMuted">
          Este projeto busca superar as limitações no uso da robótica como
          ferramenta pedagógica no Brasil, que incluem:
        </p>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {[
            {
              title: "Carência de Abordagem Prática",
              description:
                "Transforma conceitos abstratos (como lógica matemática e programação) em experiências concretas e tangíveis, facilitando a aprendizagem e o raciocínio.",
            },
            {
              title: "Baixa Motivação e Engajamento",
              description:
                "A robótica educacional atua como uma fonte rica de situações-problema que promovem a autossuperação, o raciocínio lógico e a motivação dos alunos, alinhando-se à teoria da Aprendizagem Significativa e ao Construcionismo.",
            },
            {
              title: "Desalinhamento com as Demandas Curriculares",
              description:
                "Enfatiza a utilização de tecnologias na perspectiva da resolução de problemas, conforme a BNCC, visando o desenvolvimento do letramento matemático e do pensamento computacional.",
            },
            {
              title: "Integração Limitada de Áreas de Conhecimento",
              description:
                "Adota o modelo STEAM, oferecendo uma aprendizagem completa que une teoria e prática, conectando Ciência, Tecnologia, Engenharia, Artes e Matemática.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-xl bg-brand-lightBgSecondary p-4 shadow-light transition hover:shadow-medium sm:rounded-2xl sm:p-6 dark:bg-brand-darkBgSecondary/60"
            >
              <span className="text-2xl sm:text-3xl" aria-hidden>
                💡
              </span>
              <h3 className="mt-3 text-base font-semibold text-brand-primary sm:mt-4 sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-brand-lightTextMuted sm:mt-3 sm:text-sm dark:text-brand-darkTextMuted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white/80 p-6 shadow-light backdrop-blur-md transition dark:bg-white/5 dark:shadow-light sm:rounded-3xl sm:p-8 md:p-12">
        <h2 className="text-xl font-semibold text-brand-accent sm:text-2xl md:text-3xl">
          Público-Alvo
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-brand-lightTextMuted sm:mt-4 sm:text-base dark:text-brand-darkTextMuted">
          O projeto é direcionado a alunos do Ensino Médio e está focado na área
          da tecnologia e educação, com ênfase em robótica e programação.
        </p>
      </section>
    </div>
  );
}

