import styles from './Projects.module.scss';
import Detail from '../Contents/Detail';
import Project from './Project';
import projects from '../../data/projects';

export default function Projects() {
  const titles = [];
  for (const title in projects) {
    titles.push(title);
  }

  return (
    <Detail
      backgroundColor='#121212'
      color='#f1f1f1'
    >
      <h1 className={styles.main_header}>Projects</h1>
      {titles.map((title) => {
        return (
          <Project
            key={title}
            project={projects[title]}
            id={title}
          />
        );
      })}
    </Detail>
  );
}
