import { ReactNode } from "react";
import styles from "./modules/HeroComponents.module.css";

export const HeroTitle = () => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.blob} aria-hidden />
      <div className={styles.blob2} aria-hidden />
      <span className={styles.badge}>
        <span className={styles.badgeDot} />
        Disponible pour de nouveaux projets
      </span>
      <p className={styles.intro}>Bonjour, je m&apos;appelle</p>
      <h1 className={styles.title}>
        <span className={styles.name}>Gurvan</span> Dumarchat
      </h1>
      <p className={styles.subtitle}>
        Donner vie à vos applications, de l&apos;ergonomie du front-end à la
        puissance du back-end.
      </p>
    </div>
  );
};

type ContactContainerProps = { children: ReactNode };
export const ContactContainer = ({ children }: ContactContainerProps) => {
  return <div className={styles.contactContainer}>{children}</div>;
};

type ContactInformationProps = { children: ReactNode };
export const ContactInformation = ({ children }: ContactInformationProps) => {
  return <div className={styles.contactInfo}>{children}</div>;
};
