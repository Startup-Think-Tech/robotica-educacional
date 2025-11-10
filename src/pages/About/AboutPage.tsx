export function AboutPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 text-brand-lightText md:px-8 dark:text-brand-darkText">
      <header className="space-y-3 text-center md:text-left">
        <h1 className="text-4xl font-bold uppercase tracking-[0.4rem] text-brand-primary md:text-5xl">
          Robótica Educacional
        </h1>
        <p className="text-lg text-brand-lightTextMuted dark:text-brand-darkTextMuted">
          Pensado. Criado. Resolvido.
        </p>
      </header>

      <section className="space-y-8 rounded-3xl bg-white/80 p-8 shadow-light backdrop-blur-md transition dark:bg-white/5 dark:shadow-light md:p-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-accent md:text-3xl">
            Objetivo do Projeto
          </h2>
          <p className="text-base leading-relaxed text-brand-lightTextMuted dark:text-brand-darkTextMuted">
            O objetivo geral do projeto é compreender a lógica envolvida em
            programação e robótica com alunos do Ensino Médio, desenvolvendo a
            criatividade e o pensamento computacional na visualização do
            abstrato.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brand-primary">
            Os objetivos específicos incluem:
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              "Relacionar conceitos da lógica matemática e programação computacional para o desenvolvimento da robótica.",
              "Aplicar conceitos da linguagem de programação em ambiente de desenvolvimento inseridos na cultura maker e princípios STEAM, para elaboração de robôs com funções distintas.",
              "Explanar sobre a relação lógica matemática envolvida com a programação na construção de um carro seguidor de linha.",
            ].map((text) => (
              <article
                key={text}
                className="rounded-2xl bg-brand-lightBgSecondary p-6 shadow-light transition hover:shadow-medium dark:bg-brand-darkBgSecondary/60"
              >
                <span className="text-3xl" aria-hidden>
                  🚀
                </span>
                <p className="mt-4 text-sm text-brand-lightTextMuted dark:text-brand-darkTextMuted">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8 rounded-3xl bg-white/80 p-8 shadow-light backdrop-blur-md transition dark:bg-white/5 dark:shadow-light md:p-12">
        <h2 className="text-2xl font-semibold text-brand-accent md:text-3xl">
          Problema que o Projeto Resolve
        </h2>
        <p className="text-base leading-relaxed text-brand-lightTextMuted dark:text-brand-darkTextMuted">
          Este projeto busca superar as limitações no uso da robótica como
          ferramenta pedagógica no Brasil, que incluem:
        </p>

        <div className="grid gap-6 md:grid-cols-2">
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
              className="rounded-2xl bg-brand-lightBgSecondary p-6 shadow-light transition hover:shadow-medium dark:bg-brand-darkBgSecondary/60"
            >
              <span className="text-3xl" aria-hidden>
                💡
              </span>
              <h3 className="mt-4 text-lg font-semibold text-brand-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-brand-lightTextMuted dark:text-brand-darkTextMuted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white/80 p-8 shadow-light backdrop-blur-md transition dark:bg-white/5 dark:shadow-light md:p-12">
        <h2 className="text-2xl font-semibold text-brand-accent md:text-3xl">
          Público-Alvo
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-lightTextMuted dark:text-brand-darkTextMuted">
          O projeto é direcionado a alunos do Ensino Médio e está focado na área
          da tecnologia e educação, com ênfase em robótica e programação.
        </p>
      </section>
    </div>
  );
}

