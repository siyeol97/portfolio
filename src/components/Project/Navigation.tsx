import styles from './Navigation.module.scss';
import projects from '../../data/projects';

export default function Navigation() {
  const titles: string[] = [];
  const ids: string[] = [];
  for (const item in projects) {
    ids.push(item);
    titles.push(projects[item].title);
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetElement = document.querySelector(href);
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list_container}>
        <a
          href='#overview'
          onClick={handleClick}
          className={`${styles.title} nav-title`}
        >
          Overview
        </a>
        {titles.map((title, index) => {
          return (
            <a
              href={`#${ids[index]}`}
              onClick={handleClick}
              className={`${styles.title} nav-title`}
              key={title}
            >
              {title}
            </a>
          );
        })}
      </ul>
      <div className={styles.line}>
        <ul className={styles.dot_container}>
          <a
            href='#overview'
            className={`${styles.dot} nav-link`}
            onClick={handleClick}
          ></a>
          {ids.map((id) => {
            return (
              <a
                href={`#${id}`}
                key={id}
                className={`${styles.dot} nav-link`}
                onClick={handleClick}
              ></a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
