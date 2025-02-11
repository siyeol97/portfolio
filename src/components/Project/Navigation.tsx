import styles from './Navigation.module.scss';
import projects from '../../data/projects';

export default function Navigation() {
  const titles = [];
  const ids = [];
  for (const item in projects) {
    ids.push(item);
    titles.push(projects[item].title);
  }
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list_container}>
        <li className={styles.title}>Overview</li>
        {titles.map((title) => {
          return (
            <li
              key={title}
              className={styles.title}
              data-to-scrollspy-id={title}
            >
              {title}
            </li>
          );
        })}
      </ul>
      <div className={styles.line}>
        <ul className={styles.dot_container}>
          <li className={styles.dot}></li>
          {ids.map((id) => {
            return (
              <li
                key={id}
                className={styles.dot}
              ></li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
