import { useEffect } from 'react';
import LandingBackground from './LandingBackground';
import styles from './Landing.module.scss';
import glitch from '../../utils/glitch';

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
        <h2></h2>
      </div>
      <LandingBackground />
    </section>
  );
}
