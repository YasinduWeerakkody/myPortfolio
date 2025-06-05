import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/media.png';
import freshBurger from '../../assets/viberr.png';
import hipsster from '../../assets/user.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
       
        <ProjectCard
          src={freshBurger}
          link="https://github.com/YasinduWeerakkody/Fullstack_crud"
          h3="Fullstack Crud Appication"
          p=".Net & React "
        />
         <ProjectCard
          src={viberr}
          link="https://github.com/YasinduWeerakkody/media-unit-UOV"
          h3="Media Unit "
          p="Laravel & VueJs"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/YasinduWeerakkody/Demo_AI_Detector"
          h3="Fitness Ai Detector"
          p="Python ML JupyterNotebook"
        />
        
        <ProjectCard
          src={hipsster}
          link="https://github.com/YasinduWeerakkody/user-management-system-breeze-blade-main"
          h3="User Management System"
          p="Laravel-blade"
        />
      </div>
    </section>
  );
}

export default Projects;
