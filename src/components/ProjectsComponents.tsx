'use client';

import clang from '@/public/icons/arcticons--clanguage.svg';
import java from '@/public/icons/java.svg';
import js from '@/public/icons/js.svg';
import nextjs from '@/public/icons/next.svg';
import prisma from '@/public/icons/prisma.svg';
import python from '@/public/icons/python.svg';
import react from '@/public/icons/react.svg';
import algo from '@/public/img/algo.png';
import graph from '@/public/img/graph.png';
import graphS2 from '@/public/img/graphS2.png';
import lts from '@/public/img/letrucensucre.png';
import pixelwar from '@/public/img/pixelwar.png';
import stockfast from '@/public/img/stockfast.png';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { TechnoIcon } from './TechnoComponents';
import styles from './modules/ProjectsComponents.module.css';

const projects: Project[] = [
  {
    title: 'StockFast',
    preview: stockfast,
    description: 'Application de gestion logistique pour les TPE et PME',
    link: '/pdf/stockfast.pdf',
    tags: [
      {
        icon: react,
        title: 'React',
      },
      {
        icon: nextjs,
        title: 'Next',
      },
      {
        icon: prisma,
        title: 'Prisma',
      },
    ],
  },
  {
    title: 'Le Truc en Sucre',
    preview: lts,
    description: 'Site vitrine pour une boutique locale',
    link: 'https://letrucensucre.com',
    tags: [
      {
        icon: react,
        title: 'React',
      },
      {
        icon: nextjs,
        title: 'Next',
      },
      {
        icon: prisma,
        title: 'Prisma',
      },
    ],
  },
  {
    title: 'IUT Pixel War',
    preview: pixelwar,
    description: "Développement d'une application front-end pour une compétition universitaire dans le style de la Reddit pixel war",
    link: '/pdf/pixelwar.pdf',
    tags: [
      {
        icon: js,
        title: 'JavaScript',
      },
    ],
  },
  {
    title: 'Visualisation de graphes',
    preview: graph,
    description: 'Implémentation de la structure de graphes avec les algorithmes associés',
    link: '/pdf/Graphes.pdf',
    tags: [
      {
        icon: java,
        title: 'Java',
      },
    ],
  },
  {
    title: 'Performance algorithmique',
    preview: algo,
    description: "Implémentation d'une structure de données et mesures de ses performances",
    link: '/pdf/performanceAlgo.pdf',
    tags: [
      {
        icon: clang,
        title: 'C',
      },
      {
        icon: python,
        title: 'Python',
      },
    ],
  },
  {
    title: 'Générateur de graphique dynamique',
    preview: graphS2,
    description: "Générateur de graphique à partir de n'importe quelle donnée implémentée de la base et sous 4 formes différentes",
    link: '/pdf/GenerateurStats.pdf',
    tags: [
      {
        icon: python,
        title: 'Python',
      },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <div className={`${styles.container}`}>
      <span className={styles.eyebrow}>Réalisations</span>
      <h2>Projets</h2>
      <div className={`${styles.projectMapper}`}>
        {projects.map((project, index) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            preview={project.preview}
            tags={project.tags}
            key={index}
            link={project.link}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
type Project = {
  title: string;
  preview: StaticImport;
  description: string;
  tags: TechnoIcon[];
  link: string;
  index?: number;
};

export const ProjectCard = ({ title, preview, description, tags, link, index = 0 }: Project) => {
  const handleLink = () => {
    const url = link;
    window.open(url, '_blank');
  };
  return (
    <div
      className={`${styles.projectCard}`}
      onClick={handleLink}
      role="button"
      tabIndex={0}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={styles.imageWrap}>
        <Image src={preview} alt={`${title} preview`} className={`${styles.previewImage}`} />
        <div className={styles.imageOverlay}>
          <span className={styles.viewCta}>Voir le projet →</span>
        </div>
      </div>
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={`${styles.tagContainer}`}>
        {tags.map((tag, idx) => (
          <TagIcon icon={tag.icon} title={tag.title} key={idx}></TagIcon>
        ))}
      </div>
    </div>
  );
};

export const TagIcon = ({ icon, title }: TechnoIcon) => {
  return (
    <div className={`${styles.tag}`}>
      <Image src={icon} alt={`${title} icon`} />
      <p>{title}</p>
    </div>
  );
};
