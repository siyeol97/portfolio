import styles from './Contents.module.scss';
import About from './About';
// import WorkList from './WorkList';
import { Analytics } from '@vercel/analytics/react';
import Projects from '../Project/Projects';

export default function Contents() {
  return (
    <>
      <Analytics />
      <main className={styles.wrapper}>
        <About />
        <Projects />
        {/* <WorkList /> */}
      </main>
    </>
  );
}
