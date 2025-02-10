import styles from './Projects.module.scss';
import Detail from '../Contents/Detail';
import Project from './Project';
import projects from '../../data/projects';

export default function Projects() {
  return (
    <Detail
      backgroundColor='#121212'
      color='#f1f1f1'
    >
      <h1 className={styles.main_header}>Projects</h1>
      <Project project={projects.mogazoa} />
      <Project project={projects.party_time_job} />
      <Project project={projects.blog} />
      <Project project={projects.diary} />
    </Detail>
  );
}
