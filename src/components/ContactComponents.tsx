import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import styles from "./modules/ContactComponents.module.css";

export const ContactSection = () => {
  return (
    <div className={`${styles.container}`}>
      <span className={styles.eyebrow}>Travaillons ensemble</span>
      <h2>Intéressé.e ? Contactez-moi !</h2>
      <div className={`${styles.contactContainer}`}>
        <div className={`${styles.contactWrapper}`}>
          <p>Ajoutez-moi sur Linkedin</p>
          <Link
            href="https://www.linkedin.com/in/gurvan-dumarchat-957434303/"
            className={`${styles.linkIcon}`}
          >
            <Linkedin></Linkedin>
            <p>Mon profil Linkedin</p>
          </Link>
        </div>
        <div className={`${styles.contactWrapper}`}>
          <p>Envoyer un mail</p>
          <Link
            href={"mailto:gurvandumarchat@gmail.com"}
            className={`${styles.linkIcon}`}
          >
            <Mail></Mail>
            <p>gurvandumarchat@gmail.com</p>
          </Link>
        </div>
        <div className={`${styles.contactWrapper}`}>
          <p>Consulter mon GitHub</p>
          <Link
            href={"https://github.com/gurvan-dumarchat"}
            className={`${styles.linkIcon}`}
          >
            <Github></Github>
            <p>Github</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
