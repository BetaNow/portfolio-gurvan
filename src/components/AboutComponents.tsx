import profilepic from "@/public/img/IMG_4263.png";
import Image from "next/image";
import Reveal from "./Reveal";
import styles from "./modules/AboutComponents.module.css";

export const AboutSection = () => {
  return (
    <div className={styles.container}>
      <Reveal className={styles.content}>
        <span className={styles.eyebrow}>Qui suis-je</span>
        <h2>À propos</h2>
        <p>
          Salut, moi c&apos;est Gurvan, je suis étudiant en deuxième année de
          BUT Informatique à l&apos;IUT de Bordeaux. Passioné de développement
          FullStack, j&apos;ai eu l&apos;occasion de travailler sur des projets
          webs ces deux dernières années en me dépassant pour résoudre tous les
          problèmes que j&apos;ai pu rencontré. Je travaille également en tant
          que développeur freelance pour SecureFlow Initiative, une société
          fondée par des passionés.
        </p>
      </Reveal>
      <Reveal delay={150} className={styles.picWrapper}>
        <div className={styles.picGlow} aria-hidden />
        <Image
          src={profilepic}
          alt="Profile picture"
          className={styles.profilePic}
        />
      </Reveal>
    </div>
  );
};
