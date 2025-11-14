import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { ResultCard } from "../../components/ui/ResultCard";
import planning1 from "../../assets/img/carroussel/img1.jpg";
import planning2 from "../../assets/img/carroussel/img2.jpg";
import planning4 from "../../assets/img/carroussel/img4.jpg";
import planning5 from "../../assets/img/carroussel/img5.jpg";
import planning6 from "../../assets/img/carroussel/img6.jpg";
import planning7 from "../../assets/img/carroussel/img7.jpg";
import presentationImg from "../../assets/img/gabriel-apresentando.jpg";
import assembly1Img from "../../assets/img/alunos-montando-1.jpg";
import assembly2Img from "../../assets/img/alunos-montando-2.jpg";
import finalResultImg from "../../assets/img/resultado-alunos.jpg";
import teamStudentsImg from "../../assets/img/equipe-e-alunos.png";

const CAROUSEL_SLIDES = [
  { src: planning1, alt: "Planejamento - Imagem 1" },
  { src: planning2, alt: "Planejamento - Imagem 2" },
  { src: planning4, alt: "Planejamento - Imagem 4" },
  { src: planning5, alt: "Planejamento - Imagem 5" },
  { src: planning6, alt: "Planejamento - Imagem 6" },
  { src: planning7, alt: "Planejamento - Imagem 7" },
];

interface ResultSection {
  title: string;
  description: string;
  image: string;
  orientation: "text-left" | "text-right";
}

const RESULT_SECTIONS: ResultSection[] = [
  {
    title: "Apresentação do Projeto",
    description:
      "No início da nossa oficina de robótica educacional, realizamos uma apresentação detalhada do projeto para os alunos do Ensino Médio. Durante essa etapa inicial, explicamos os conceitos fundamentais de programação e robótica, demonstrando como a lógica matemática se relaciona com a construção de robôs. Os alunos puderam compreender o objetivo do projeto e visualizar o que seria desenvolvido ao longo das aulas práticas.",
    image: presentationImg,
    orientation: "text-left" as const,
  },
  {
    title: "Processo de Montagem - Etapa 1",
    description:
      "Na primeira etapa, os participantes foram divididos em duas equipes, e cada grupo ficou responsável por se organizar e planejar como daria início à montagem do robô. Com base em um protótipo já montado como exemplo, eles identificaram as peças e componentes necessários para começar o processo. Foi incrível observar o entusiasmo e a forma como se dividiram espontaneamente entre as tarefas, mostrando interesse e colaboração desde o início. Essa fase marcou o ponto de partida de uma experiência prática cheia de aprendizado e trabalho em equipe.",
    image: assembly1Img,
    orientation: "text-right" as const,
  },
  {
    title: "Processo de Montagem - Etapa 2",
    description:
      "Conforme a montagem avançava, o engajamento das equipes só aumentava. A motivação ficou ainda maior quando foi anunciado que a atividade se tornaria uma competição, com direito a uma premiação para o time vencedor. Mesmo sem utilizar programação nessa fase, os alunos exploraram bastante o raciocínio lógico e a criatividade, encontrando soluções próprias e fazendo ajustes que tornaram seus robôs ainda mais eficientes, em alguns casos, até superando o modelo que estava em exibição!",
    image: assembly2Img,
    orientation: "text-left" as const,
  },
  {
    title: "Resultado Final da Montagem",
    description:
      "Após o fim da competição, chegou o momento mais esperado: os testes com o robô carinhosamente apelidado de “Cleitin”. Durante o percurso em linha, Cleitin seguiu fielmente o trajeto, demonstrando o sucesso da montagem e da aplicação dos conceitos trabalhados. Ver o robô em funcionamento foi um momento de grande empolgação para todos, os alunos ficaram encantados e cheios de curiosidade para entender como tudo acontecia “por dentro”. Mesmo sem terem desenvolvido o código, foi feita uma breve explicação sobre a lógica em C++, permitindo que todos compreendessem o funcionamento completo do projeto. No encerramento, o time vencedor foi anunciado, e a comemoração tomou conta do ambiente!",
    image: finalResultImg,
    orientation: "text-right" as const,
  },
  {
    title: "Equipe e Alunos",
    description:
      "A colaboração entre a equipe Think Tech e os alunos foi fundamental para o sucesso do projeto. Durante todo o processo, promovemos um ambiente de aprendizado colaborativo, onde os estudantes puderam contar com o suporte e orientação da equipe. A interação constante permitiu que os alunos desenvolvessem autonomia e confiança, enquanto a equipe acompanhava e auxiliava no desenvolvimento das competências necessárias para a conclusão do projeto de robótica educacional.",
    image: teamStudentsImg,
    orientation: "text-left" as const,
  },
];

function ResultCardList({ sections }: { sections: ResultSection[] }) {
  return (
    <div className="flex flex-col gap-10">
      {sections.map((section) => (
        <ResultCard
          key={section.title}
          title={section.title}
          description={section.description}
          image={section.image}
          orientation={section.orientation}
        />
      ))}
    </div>
  );
}

export function ResultsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollToSlide = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const container = carouselRef.current;
      if (!container) return;
      const width = container.clientWidth;
      container.scrollTo({
        left: width * index,
        behavior,
      });
    },
    [],
  );

  useEffect(() => {
    scrollToSlide(currentSlide);
  }, [currentSlide, scrollToSlide]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 4000);

    return () => {
      window.clearInterval(id);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      scrollToSlide(currentSlide, "auto");
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentSlide, scrollToSlide]);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 text-brand-lightText sm:gap-10 sm:px-6 sm:py-12 md:gap-12 md:px-8 md:py-16 dark:text-brand-darkText">
      <section className="space-y-4 sm:space-y-6">
        <h2 className="text-center text-2xl font-bold uppercase tracking-[0.2rem] text-brand-primary sm:text-3xl sm:tracking-[0.3rem] md:text-left md:text-4xl md:tracking-[0.4rem]">
          Nosso Ponto de Partida
        </h2>

        <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/80 shadow-light backdrop-blur-md sm:rounded-3xl dark:border-white/10 dark:bg-white/10">
          <div className="flex overflow-hidden" ref={carouselRef}>
            {CAROUSEL_SLIDES.map((slide) => (
              <div
                key={slide.src}
                className="relative flex h-64 w-full flex-shrink-0 items-center justify-center sm:p-6 md:h-96 md:p-8"
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-full w-[85%] rounded-lg object-cover object-center"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-8 md:bottom-10">
            {CAROUSEL_SLIDES.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
                className={clsx(
                  "h-2 w-2 rounded-full transition",
                  currentSlide === index
                    ? "bg-brand-primary"
                    : "bg-brand-primary/40 hover:bg-brand-primary/70",
                )}
              />
            ))}
          </div>
        </div>

        <article className="rounded-2xl bg-white/80 p-6 shadow-light backdrop-blur-md dark:bg-white/10 sm:rounded-3xl sm:p-8 md:p-12">
          <h3 className="text-center text-xl font-semibold text-brand-accent sm:text-2xl md:text-left md:text-3xl">
            Planejamento do Projeto
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-brand-lightTextMuted sm:mt-6 sm:text-base dark:text-brand-darkTextMuted">
            Nossa equipe Think Tech escolheu a Escola Estadual Ângelo Ramazzoti
            para a primeira fase do projeto de extensão. O tema? Robótica
            Educacional! A estrutura de ponta da escola foi essencial,
            permitindo-nos focar em um projeto que realmente colocasse os alunos
            para "pôr a mão na massa", estimulando a curiosidade e a criatividade
            desde cedo.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-brand-lightTextMuted sm:text-base dark:text-brand-darkTextMuted">
            O Professor Frank foi um pilar fundamental! Ele não só acompanhou
            todo o planejamento inicial como garantiu a permissão para usarmos o
            coração da inovação da escola: a Sala Maker. Juntos, exploramos o
            ambiente e as possibilidades de protótipos, transformando ideias em
            um plano concreto para o grande dia.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-brand-lightTextMuted sm:text-base dark:text-brand-darkTextMuted">
            Após intensas discussões e pensando no máximo engajamento, chegamos
            à decisão: o projeto prático seria o “Percurso em Linha Reta usando
            um Carrinho Robô”. Acreditamos que a natureza divertida e lúdica
            deste desafio prático é a chave para cativar a atenção dos alunos e
            mostrar que a robótica é acessível e empolgante!
          </p>
        </article>
      </section>

      <section className="space-y-6 sm:space-y-10">
        <header className="text-center md:text-left">
          <h2 className="text-2xl font-bold uppercase tracking-[0.2rem] text-brand-primary sm:text-3xl sm:tracking-[0.3rem] md:text-4xl md:tracking-[0.4rem]">
            Resultados
          </h2>
          <p className="mt-2 text-sm text-brand-lightTextMuted sm:mt-3 sm:text-base md:text-lg dark:text-brand-darkTextMuted">
            Conheça os resultados e conquistas da nossa oficina de robótica
            educacional.
          </p>
        </header>

        <ResultCardList sections={RESULT_SECTIONS} />
      </section>
    </div>
  );
}

