import LandingBackground from './LandingBackground';
import styles from './Landing.module.scss';
import { useEffect } from 'react';
import glitch from '../utils/glitch';

export default function Landing() {
  useEffect(() => {
    const text = document.getElementById('glitch');

    if (!text) {
      return;
    }

    glitch(text);
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.greeting}>
        <h1
          data-text='Hello world!'
          id='glitch'
        >
          Hello world!
        </h1>
      </div>
      <LandingBackground />
    </section>
  );
}
