"use client";
import cypress from "@/public/icons/cypress.svg";
import Express from "@/public/icons/express.svg";
import java from "@/public/icons/java.svg";
import JS from "@/public/icons/js.svg";
import junit from "@/public/icons/junit.svg";
import mysql from "@/public/icons/mysql.svg";
import Next from "@/public/icons/next.svg";
import Node from "@/public/icons/node.svg";
import php from "@/public/icons/php.svg";
import postgres from "@/public/icons/postgres.svg";
import Prisma from "@/public/icons/prisma.svg";
import python from "@/public/icons/python.svg";
import ReactIcon from "@/public/icons/react.svg";
import shadcn from "@/public/icons/shadcn.svg";
import sqlite from "@/public/icons/sqlite.svg";
import sqlserver from "@/public/icons/sqlserver.svg";
import symfony from "@/public/icons/symfony.svg";
import Tailwind from "@/public/icons/tailwind.svg";
import TS from "@/public/icons/ts.svg";
import Vite from "@/public/icons/vite.svg";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";
import styles from "./modules/TechnoComponents.module.css";

const icons: TechnoIcon[] = [
  {
    icon: JS,
    title: "JavaScript",
  },
  {
    icon: TS,
    title: "TypeScript",
  },
  {
    icon: Node,
    title: "NodeJS",
  },
  {
    icon: Prisma,
    title: "Prisma ORM",
  },
  {
    icon: ReactIcon,
    title: "React",
  },
  {
    icon: Next,
    title: "Next JS",
  },
  {
    icon: Vite,
    title: "Vite",
  },
  {
    icon: Express,
    title: "Express",
  },
  {
    icon: Tailwind,
    title: "Tailwind",
  },
  {
    icon: shadcn,
    title: "ShadCn",
  },
  {
    icon: postgres,
    title: "PostgreSQL",
  },
  {
    icon: mysql,
    title: "MySQL",
  },
  {
    icon: sqlserver,
    title: "Microsoft SQL Server",
  },
  {
    icon: python,
    title: "Python",
  },
  {
    icon: php,
    title: "PHP",
  },
  {
    icon: symfony,
    title: "Symfony",
  },
  {
    icon: sqlite,
    title: "SQLite",
  },
  {
    icon: java,
    title: "Java",
  },
  {
    icon: junit,
    title: "JUnit",
  },
  {
    icon: cypress,
    title: "Cypress",
  },
];
export const TechnoSection = () => {
  return (
    <div className={`${styles.container}`}>
      <span className={styles.eyebrow}>Ma stack</span>
      <h2>Développement FullStack</h2>
      <div className={`${styles.iconMapper}`}>
        {icons.map((icon, index) => (
          <TechnoIcon
            key={index}
            icon={icon.icon}
            title={icon.title}
            index={index}
          ></TechnoIcon>
        ))}
      </div>
      <div>
        <ul className={`${styles.objectiveList}`}>
          <li>
            Développement d&apos;interfaces interactives en alliant performance
            et utilisabilité en utilisant React et Vite
          </li>
          <li>
            Création d&apos;APIs REST pour gérer les requêtes d&apos;une
            application en assurant la communication avec une base de données
            avec Express et Prisma
          </li>
          <li>Création de scripts de visualisation de données avec Python</li>
        </ul>
      </div>
    </div>
  );
};
export type TechnoIcon = {
  icon: StaticImport;
  title: string;
  index?: number;
};

export const TechnoIcon = ({ icon, title, index = 0 }: TechnoIcon) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className={`${styles.iconContainer}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ animationDelay: `${(index % 12) * 60}ms` }}
    >
      <p className={`${hover ? styles.infoShown : ""}`}>{title}</p>
      <div className={styles.iconTile}>
        <Image src={icon} alt={title + " icon"}></Image>
      </div>
    </div>
  );
};
