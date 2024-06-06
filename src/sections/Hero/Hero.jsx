import styles from "./HeroStyles.module.css";
// import heroImg from '../../assets/Design uten navn.png';
import heroImg from "../../assets/profil.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
//import twitterLight from "../../assets/twitter-light.svg";
import pinterest from "../../assets/social.png";
import pinterestDark from "../../assets/social.png";
import dribbble from "../../assets/dribbble.png";
import dribbbbleDark from "../../assets/dribbble.png";
//import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";


function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const pinterestIcon = theme === "light" ? pinterest : pinterestDark;
  const dribbbleIcon = theme === "light" ? dribbble : dribbbbleDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Yasindu Weerakkody"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Yasindu
          <br />
          Weerakkody
        </h1>
        <h2>Full-Stack Developer</h2>
        <span>
          <a href="https://www.pinterest.com/MrWeera99/" target="_blank">
            <img src={pinterestIcon} alt="Pinterest icon" />
          </a>
          <a href="https://dribbble.com/YasiWeera/likes" target="_blank">
            <img src={dribbbleIcon} alt="Dribbble icon" />
          </a>
          <a href="https://github.com/YasinduWeerakkody" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/yasindu-weerakkody-1708a625b/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        🌐 Aspiring Full-Stack Web Developer | Crafting Dynamic Digital Experiences
        🎨 Passionate about transforming ideas into stunning visual realities. Leveraging tools like Adobe XD, Illustrator,
         and Figma to create seamless and captivating user interfaces.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
