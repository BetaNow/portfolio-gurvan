import figma from "@/public/icons/devicon--figma.svg";
import vscode from "@/public/icons/devicon--vscode.svg";
import Docker from "@/public/icons/logos--docker-icon.svg";
import gitlab from "@/public/icons/logos--gitlab.svg";
import github from "@/public/icons/mdi--github.svg";
import postman from "@/public/icons/skill-icons--postman.svg";
import { TechnoIcon } from "./TechnoComponents";
import styles from "./modules/TechnoComponents.module.css";
const icons: TechnoIcon[] = [
  {
    icon: Docker,
    title: "Docker",
  },
  {
    icon: vscode,
    title: "Visual Studio Code",
  },
  {
    icon: github,
    title: "GitHub",
  },
  {
    icon: figma,
    title: "Figma",
  },
  {
    icon: gitlab,
    title: "GitLab",
  },
  {
    icon: postman,
    title: "Postman",
  },
];
export const ToolsSection = () => {
  return (
    <div className={`${styles.container}`}>
      <span className={styles.eyebrow}>Mon arsenal</span>
      <h2>Outils et logiciels</h2>
      <div className={`${styles.iconMapper}`}>
        {icons.map((icon, index) => (
          <TechnoIcon
            icon={icon.icon}
            title={icon.title}
            index={index}
            key={index}
          ></TechnoIcon>
        ))}
      </div>
      <div>
        <ul className={`${styles.objectiveList}`}>
          <li>Gestion de version de projet avec Git</li>
          <li>
            Maintenance applicative et installation de services avec Docker
          </li>
        </ul>
      </div>
    </div>
  );
};
