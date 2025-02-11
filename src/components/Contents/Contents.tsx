import styles from './Contents.module.scss';
import About from './About';
import { Analytics } from '@vercel/analytics/react';
import Projects from '../Project/Projects';
import Navigation from '../Project/Navigation';

export default function Contents() {
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
