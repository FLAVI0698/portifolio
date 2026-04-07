import { useState  } from "react";
import styles from "./StylesProjects.module.css";

const projects = [
  { id: 1, title: "Nome do Projeto", skills: ["React", "Node.js", "MongoDB", "CSS"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur error ut impedit cumque illum maiores quidem unde labore deleniti harum minus doloribus facere dicta perferendis quae, officiis cupiditate molestias nulla." },
  { id: 2, title: "Nome do Projeto", skills: ["Vue", "Firebase", "Tailwind", "TypeScript"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur error ut impedit cumque illum maiores quidem unde labore deleniti harum minus doloribus facere dicta perferendis quae, officiis cupiditate molestias nulla." },
  { id: 3, title: "Nome do Projeto", skills: ["Next.js", "PostgreSQL", "Docker", "AWS"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur error ut impedit cumque illum maiores quidem unde labore deleniti harum minus doloribus facere dicta perferendis quae, officiis cupiditate molestias nulla." },
  { id: 4, title: "Nome do Projeto", skills: ["Python", "Django", "Redis", "GraphQL"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur error ut impedit cumque illum maiores quidem unde labore deleniti harum minus doloribus facere dicta perferendis quae, officiis cupiditate molestias nulla." },
  { id: 5, title: "Nome do Projeto", skills: ["React Native", "Expo", "Redux", "API REST"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur error ut impedit cumque illum maiores quidem unde labore deleniti harum minus doloribus facere dicta perferendis quae, officiis cupiditate molestias nulla." },
  { id: 6, title: "Nome do Projeto", skills: ["Angular", "Spring Boot", "MySQL", "JWT"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur error ut impedit cumque illum maiores quidem unde labore deleniti harum minus doloribus facere dicta perferendis quae, officiis cupiditate molestias nulla." },
];

const CARDS_PER_PAGE = 3;

export const Projects = () => {
  const [page, setPage] = useState(0);
  const [animClass, setAnimClass] = useState("");

  const totalPages = Math.ceil(projects.length / CARDS_PER_PAGE);
  
  const visibleProjects = projects.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  const navigate = (direction) => {
    const nextPage = direction === "next" ? page + 1 : page - 1;

    if (nextPage < 0 || nextPage >= totalPages) return;

    // Define a classe de animação conforme a direção
    setAnimClass(direction === "next" ? styles.slide_out_left : styles.slide_out_right);

    setTimeout(() => {
      setPage(nextPage);
      setAnimClass(direction === "next" ? styles.slide_in_right : styles.slide_in_left);

      // Remove a classe após a animação terminar
      setTimeout(() => setAnimClass(""), 400);
    }, 300);
  };

  return (
    <section className={styles.container_projects}>
      <h2 className={styles.projects_title}>Projetos</h2>
      <div className={styles.title_line} />

      <div className={styles.carousel_wrapper}>
        <div className={`${styles.carousel} ${animClass}`}>
          {visibleProjects.map((project) => (
            <div className={styles.card_carousel} key={project.id}>
              <img src="https://placehold.co/500x250" alt="Imagem do projeto" />
              <div className={styles.card_content}>
                <h3 className={styles.title_card}>{project.title}</h3>
                <ul className={styles.card_list}>
                  {project.skills.map((skill, i) => (
                    <li className={styles.list_items} key={i}>{skill}</li>
                  ))}
                </ul>
                <p className={styles.description}>{project.description}</p>
                <a href="#" className={styles.btn}>Ver repositório</a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.nav_buttons}>
          <button
            className={styles.nav_btn}
            onClick={() => navigate("prev")}
            disabled={page === 0}
            aria-label="Anterior"
          >
            &#8249;
          </button>

          <button
            className={styles.nav_btn}
            onClick={() => navigate("next")}
            disabled={page === totalPages - 1}
            aria-label="Próximo"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}

