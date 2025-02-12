import styles from './Contents.module.scss';
import navigationStyles from '../Project/Navigation.module.scss';
import About from './About';
import { Analytics } from '@vercel/analytics/react';
import Projects from '../Project/Projects';
import Navigation from '../Project/Navigation';
import { useEffect } from 'react';

export default function Contents() {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          document.querySelectorAll('.nav-link').forEach((link) => {
            link.classList.remove(navigationStyles.dot_active);
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add(navigationStyles.dot_active);
            }
          });
          document.querySelectorAll('.nav-title').forEach((title) => {
            title.classList.remove(navigationStyles.title_active);
            if (title.getAttribute('href') === `#${id}`) {
              title.classList.add(navigationStyles.title_active);
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const sections = document.querySelectorAll('section[id]');

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Analytics />
      <main className={styles.wrapper}>
        <Navigation />
        <About />
        <Projects />
      </main>
    </>
  );
}
