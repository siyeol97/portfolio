import { useEffect, useState } from 'react';
import styles from './About.module.scss';
import Detail from './Detail';
import skills from '../../data/skills';
import mailIcon from '../../public/asset/mail.svg';
import callIcon from '../../public/asset/call.svg';
import githubIcon from '../../public/asset/Github-Light.svg';
import openIcon from '../../public/asset/open.svg';
import copyIcon from '../../public/asset/copy.svg';
import checkIcon from '../../public/asset/check.svg';

export default function About() {
  const [copyID, setCopyId] = useState<null | string>(null);

  const handleCopy = (id: string) => {
    const text = document.getElementById(id)?.innerText;

    if (!text) {
      return;
    }

    navigator.clipboard.writeText(text).then(() => {
      setCopyId(id);
      setTimeout(() => {
        setCopyId(null);
      }, 1500);
    });
  };

  useEffect(() => {
    const path1 = document.querySelector(`.${styles.path1}`) as SVGPathElement;
    if (path1) {
      const pathLength = path1.getTotalLength();
      path1.style.strokeDasharray = `${pathLength} ${pathLength}`;
      path1.style.strokeDashoffset = `${pathLength}`;
      path1.getBoundingClientRect();
      path1.style.transition = 'stroke-dashoffset 6s ease-in';
      path1.style.strokeDashoffset = '0';
    }
  }, []);

  return (
    <Detail
      color='#f1f1f1'
      backgroundColor='#121212'
    >
      <section className={styles.title}>
        <h1>ALWAYS TRYING</h1>
        <h2>Better than yesterday.</h2>
        <h3>
          <span>도전</span>하고 <span>실패</span>하며 <span>성장</span>하는
        </h3>
        <h3>
          프론트엔드 개발자 <span>이시열</span> 입니다.
        </h3>
      </section>
      <section className={styles.overview}>
        <div className={styles.sub_header}>
          <span>Overview</span>
        </div>
        <article className={styles.overview_text}>
          늘 배우고 도전하며 성장하는, 그리고 실패를 두려워하지 않는 개발자가
          되고자 합니다.
          <br /> ‘시도조차 하지 않으면 아무것도 얻을 수 없다’는 마음가짐으로,
          차분하고 꾸준하게 실력을 쌓아왔습니다.
          <br /> 그 성실함을 바탕으로 실질적인 가치를 더할 수 있는 개발자가
          되겠습니다.
        </article>
      </section>
      <section className={styles.contact}>
        <div className={styles.sub_header}>
          <span className={styles.contact_subHead}>Contact</span>
        </div>
        <article className={styles.contact_container}>
          <div className={styles.contact_box}>
            <img
              src={mailIcon}
              alt='mail-icon'
            />
            <span
              className={styles.contact_text}
              id='email'
            >
              leesi2830@gmail.com
            </span>
            <img
              src={copyIcon}
              alt='copy-icon'
              className={styles.sub_icon}
              onClick={() => handleCopy('email')}
            />
            <div
              className={`${styles.copy_success} ${copyID === 'email' ? styles.show : ''}`}
            >
              복사 완료
              <img
                src={checkIcon}
                alt='check-icon'
                className={styles.check_icon}
              />
            </div>
          </div>
          <div className={styles.contact_box}>
            <img
              src={callIcon}
              alt='call-icon'
            />
            <span
              className={styles.contact_text}
              id='phone'
            >
              010-5443-2830
            </span>
            <img
              src={copyIcon}
              alt='copy-icon'
              className={styles.sub_icon}
              onClick={() => handleCopy('phone')}
            />
            <div
              className={`${styles.copy_success} ${copyID === 'phone' ? styles.show : ''}`}
            >
              복사 완료
              <img
                src={checkIcon}
                alt='check-icon'
                className={styles.check_icon}
              />
            </div>
          </div>
          <a
            href='https://github.com/siyeol97'
            target='_blank'
          >
            <div className={styles.contact_box}>
              <img
                src={githubIcon}
                alt='github-icon'
              />
              <span className={styles.contact_text}>github - siyeol97</span>
              <img
                src={openIcon}
                alt='open-icon'
                className={styles.sub_icon}
              />
            </div>
          </a>
        </article>
      </section>
      <section className={styles.skills}>
        <div className={styles.sub_header}>
          <span>Skills & Tools</span>
        </div>
        <div className={styles.skills_img}>
          <ul>
            {skills.map((skill) => (
              <li key={skill.name}>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={styles.blur_img}
                />
                <img
                  src={skill.icon}
                  alt={skill.name}
                />
                <div className={styles.skill_name}>{skill.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        width='1920px'
        height='1080px'
        viewBox='0 0 1920 1080'
        className={styles.svg1}
      >
        <path
          className={styles.path1}
          d='M1325.15,276.65c-8.62-5.78-17.58-11.13-27.13-15.19c-21.23-9.03-45.25-11.38-67.82-6.64
		c-22.58,4.74-43.62,16.55-59.43,33.36c-8.32,8.85-15.37,19.43-18.37,29.2c0.2,8.65,9.87,14.97,18.42,13.65
		c8.55-1.32,15.3-8.41,18.65-16.39c3.35-7.98,3.89-16.81,4.38-25.44c-8.89-1.45-16.24,6.51-21.72,13.66
		c-5.92,7.73-12.11,16.22-12.18,25.96c-0.07,10.08,6.4,18.84,11.92,27.27c18.71,28.56,27.88,68.52,30.32,96.48
		c0.46,5.3,50.77-11.97,72.92-25.47c22.01-13.41,41.65-32.23,51.12-56.21c9.47-23.98,7.12-53.52-10.02-72.78
		c-13.95-15.68-36.13-22.79-57.02-20.71c-20.89,2.08-40.38,12.6-55.6,27.06c-12.47,11.83-22.87,28.5-19.47,45.35
		c1.26,6.22,4.3,11.91,7.1,17.62c11.16,22.78,18.77,47.29,22.49,72.38c27.21-4.73,54.94-12.06,76.57-29.22
		c22.15-17.56,36.15-45,37.38-73.25c1.23-28.24-10.34-56.79-30.88-76.21c-30.96-29.27-78.62-35.52-119.89-24.93
		c-16.93,4.35-33.63,11.52-45.96,23.91c-10.83,10.89-17.78,25.57-19.33,40.86c-0.39,3.88-0.17,8.42,2.94,10.77
		c3.52,2.67,8.94,0.76,11.54-2.81s3.12-8.19,3.55-12.58c-2.89,0.33-5.78,0.66-8.67,0.99c3.63-18.71,16.74-35.33,34.09-43.24
		c6.57-2.99,14.31-4.75,20.95-1.89c6.63,2.86,10.77,11.84,6.57,17.72c-1.77,2.47-4.56,3.94-7.17,5.51
		c-11.29,6.77-20.61,16.79-26.56,28.54c-4.89-5.03-14.02-3.79-18.72,1.42c-4.7,5.21-5.5,13.05-3.78,19.86
		c1.72,6.8,5.59,12.83,9.4,18.73c-9.52-4-18.39-9.52-26.19-16.29c-1.88-1.63-3.83-4.3-2.4-6.32c1.39-1.97,4.46-1.15,6.6-0.05
		c33.01,16.86,53.99,50.43,69.44,84.13c7.95,17.35,14.97,35.55,15.99,54.6c0.26,4.83-1.02,11.09-5.79,11.83
		c-2.52,0.39-4.91-1.06-7.14-2.31c-8.56-4.79-18.42-7.23-28.23-6.99c-5.1,0.13-11.47,2.27-11.77,7.36
		c-0.17,2.83,1.75,5.34,2.38,8.11c1.13,4.95-2.11,10.01-6.29,12.89c-4.18,2.89-9.21,4.2-13.92,6.09
		c-11.86,4.75-21.81,13.2-31.53,21.5c-21.28,18.19-42.56,36.37-63.83,54.56c-7.15,6.11-14.58,12.38-23.59,15.1
		c-9.01,2.71-34.84-5.26-25.55-6.75c10.01-1.6,16.39-2.54,23.39-7.4c7-4.86,16.33-9.45,23.58-4.96c5.87,3.63,7.28,11.57,6.89,18.46
		s-5.6,16.17-0.27,20.56c9.26,7.64,29.25-11.07,27.42-10.26c-3.17,1.4,18.34-7.88,23.2-9.83c9.44-3.79,17.2-3.31,21.79-2.52
		c3.65,0.63,4.35,5.91,2.98,9.35c-1.36,3.45-4.05,6.33-4.94,9.93c-0.98,3.99,0.4,8.12,1.41,12.1c1,3.96,1.64,8,2.28,12.03
		c1.6,10.12,3.2,20.24,4.8,30.36c0.35,2.23,0.62,4.76-0.82,6.49c-1.78,2.13-5.35,1.76-7.51,0.02c-2.16-1.74-3.31-4.41-4.51-6.91
		c-1.99-4.15-4.33-8.13-7-11.89c-0.05,8.96,4.27,18.17,1.24,26.61c-0.37,1.02-1.14,2.18-2.21,2.01c-0.44-0.07-0.8-0.36-1.13-0.66
		c-2.87-2.6-4.26-6.42-5.55-10.07c-2.53-7.15-5.06-14.31-7.59-21.46c0.36,7.53,0.71,15.07,1.07,22.6c0.12,2.58,0.67,9.99-2.52,6.81
		c-7.27-7.27-5.08-20.43-11.83-28.18c0.99,7.54,4.49,16.59,2.21,24.47c-0.25,0.85-2.33-1.01-2.9-1.69
		c-10.86-12.9-10.58-27.4-11.45-42.21c-0.24-4.1-0.41-8.51,1.77-11.99c1.83-2.92,5.07-4.7,8.38-5.64c3.42-0.97,7.31-1.12,10.34,0.74
		c2.27,1.4,3.78,3.73,5.2,5.99c4.41,6.98,8.9,14.17,10.54,22.27c0.34,1.68,0.58,3.46,1.58,4.86s3.08,2.21,4.48,1.22
		c0.45-0.32,0.78-0.79,1.08-1.26c8.06-12.73-0.35-30.26,5.2-44.27c1.63-4.12,4.4-8.91,1.86-12.54c-0.89-1.27-2.29-2.07-3.72-2.67
		c-5.56-2.32-11.88-1.95-17.79-0.74c-9.53,1.95-18.62,6-26.45,11.77c-5.57,4.1-10.9,10.11-10.16,16.99c0.05,0.49,0.17,1.03,0.57,1.3
		c0.53,0.36,1.25,0.08,1.82-0.21c12.96-6.47,25.91-12.94,38.87-19.42c7.59-3.79,15.95-8.5,18.12-16.7c0.75-2.84,0.65-5.84,0.54-8.78
		c-0.29-7.89-0.58-15.79-0.87-23.68c-0.19-5.29-0.39-10.62,0.43-15.85c2.49-16.01,13.9-28.97,24.82-40.94
		c2.33-2.56,4.8-5.2,8.7-7.26c5.53-0.88,11.06-1.77,16.59-2.65c1.36-0.22,2.76-0.45,3.95-1.16c2.38-1.43,3.29-4.43,3.59-7.19
		c0.62-5.63-0.48-11.33-2.16-16.74c-2.46-7.89-6.21-15.39-11.05-22.09c-1.41-1.96-4-4.03-5.92-2.57c-1.46,1.12-1.12,3.38-0.6,5.14
		c4.27,14.27,11.38,27.68,20.8,39.22c1.16,1.42,2.48,2.89,4.27,3.27c2.12,0.45,4.31-0.82,5.54-2.6s1.7-3.97,2.05-6.1
		c2.59-15.6,0.72-31.92-3.55-47.2c-13.83-32.66-35.59-61.93-62.88-84.59c-5.48-4.55-12.86-9.06-19.27-5.95
		c-1.04,0.51-2.05,1.27-2.42,2.37c-0.8,2.4,1.7,4.52,3.84,5.87c20.93,13.14,39.42,30.15,54.25,49.91c2.97,3.97,5.83,8.08,7.75,12.65
		c2.93,6.96,4.23,15.61,10.79,19.36c2.83-2.18,1.44-6.65-0.24-9.8c-16.29-30.57-36.94-58.8-61.14-83.58
		c-2.66-2.72-5.81-5.59-9.61-5.47c-1.28,0.04-2.57,0.43-3.83,0.18c-2.98-0.58-4.14-4.08-5.54-6.76
		c-4.42-8.44-16.85-11.32-24.53-5.68c-3.13,2.3-5.35,5.6-7.82,8.6c-10.58,12.83-26.13,20.32-41.17,27.41
		c-8.41,3.97-16.99,7.99-26.21,9.23c-4.32,0.58-8.8,0.56-12.84,2.18c-4.04,1.62-7.63,5.54-7.08,9.86c0.35,2.72,2.21,4.96,3.92,7.1
		c6.47,8.14,11.73,17.25,15.53,26.93c1,2.53,1.76,5.77-0.19,7.68c-1.86,1.82-5.17,1.05-6.96-0.84c-1.79-1.89-2.51-4.52-3.36-6.98
		c-3.52-10.17-10.37-19.16-19.26-25.23c-1.55-1.06-3.27-2.07-5.14-2.07c-3.35-0.01-5.81,3.03-7.74,5.76
		c-11.55,16.31-23.71,32.19-36.43,47.61c-1.4,1.69-2.91,3.45-4.98,4.16s-4.85-0.14-5.41-2.26c-0.57-2.14,1.24-4.11,2.88-5.59
		c13.52-12.18,27.42-25.46,32.56-42.92c1.05-3.58,1.83-7.47,4.44-10.13c2.3-2.35,5.63-3.3,8.82-4.11
		c24.79-6.3,50.33-9.04,75.76-11.76c18.62-1.99,37.23-3.98,55.85-5.97c5.48-0.59,10.97-1.17,16.48-1.09
		c4.92,0.07,9.82,0.68,14.68,1.47c5.46,0.88,11.03,2.05,15.63,5.1c10.01,6.65,12.6,19.96,14.34,31.86
		c1.45,9.95,2.9,19.91,4.36,29.86c0.44,3.02,0.87,6.17-0.04,9.09c-1.23,3.93-4.66,6.71-7.91,9.24
		c-7.26,5.66-14.51,11.31-21.77,16.97c-4.35,3.39-8.75,6.81-13.77,9.07c-4.16,1.87-8.64,2.9-13.09,3.92
		c-18.58,4.24-38.2,8.46-56.39,2.81c-2.88-0.89-8.78-3.47-6.55-5.5c4.73-4.32,12.75,0.75,19.1-0.06c10.5-1.33,20.99-2.66,31.49-3.99
		c7.32-0.93,14.74-1.88,21.58-4.65c7.04-2.85,13.19-7.5,19.03-12.37c5.95-4.96,11.8-10.37,15.21-17.32
		c4.21-8.56,4.27-18.5,3.87-28.03c-0.09-2.19-0.91-5.07-3.09-5.01c-1.1,0.03-1.99,0.89-2.71,1.72c-4.17,4.84-6.81,10.96-7.47,17.31
		c-0.41,3.91-0.09,7.94-1.26,11.69c-1.89,6.06-7.26,10.29-12.54,13.82c-8.27,5.53-17.17,10.35-26.84,12.7s-20.22,2.05-29.46-2.94
		c0.38-5.48,5.06-9.49,8.77-13.54c8.68-9.44,13.51-22.33,13.17-35.15c-0.05-1.97-0.95-4.58-2.9-4.31c-1.26,0.17-1.95,1.51-2.43,2.68
		c-4.22,10.28-8.27,20.62-12.15,31.02c-1.56,4.19-3.2,8.53-6.42,11.64c-3.75,3.61-9.19,5.01-14.39,4.88
		c-5.2-0.12-10.26-1.61-15.25-3.08c-1.94-0.57-4.11-1.34-5.16-2.47c-0.76-12.5-1.6-25.32-6.83-36.7c-2.07-4.5-5.19-9.01-9.93-10.45
		c-2.24-0.68-5.57,0.29-5.31,2.62c0.07,0.63,0.41,1.19,0.75,1.72c5.4,8.37,13.69,15.46,15.37,25.28
		c1.74,10.25-4.31,20.04-10.1,28.67c-5.38,8.03-11.28,16.49-20.21,20.17c-1.21,0.5-2.54,0.91-3.83,0.65
		c-1.49-0.3-2.65-1.42-3.73-2.48c-5.3-5.27-10.6-10.54-15.89-15.81c-2.09-2.08-4.23-4.19-6.91-5.43c-3.96-1.82-8.51-1.48-12.85-1.78
		c-7.39-0.51-14.49-2.96-21.69-4.7c-7.2-1.74-14.89-2.76-21.93-0.43c-7.03,2.33-13.14,8.81-13.03,15.52
		c0.32,2.88,4.01,3.77,6.9,3.95c3.7,0.23,7.39,0.46,11.09,0.7c4.88,0.31,9.85,0.63,14.43,2.34c8.55,3.18,14.59,10.66,21,17.15
		c6.41,6.49,14.62,12.6,23.69,11.74c1.29-0.12,2.69-0.46,3.49-1.48c0.56-0.72,0.74-1.65,0.9-2.55c1.02-5.7,2-11.75-0.14-17.12
		c-2.97-7.44-10.98-11.4-18.46-14.27c-10.09-3.87-21.33-6.98-31.54-3.46c-6.47,2.23-11.78,6.92-16.52,11.86
		c-6.39,6.67-12.04,14-17.65,21.33c-3.86,5.05-7.74,10.16-10.39,15.94c-2.66,5.77-4.04,12.34-2.65,18.54
		c0.26,1.17,0.84,3.45,1.9,2.88c6.73-3.64,5.37-27.49,9.24-20.89c4.09,6.98-2.17,21.54,3.04,27.81c1.4,1.69,3.2-2.72,3.68-4.86
		c1.69-7.61-0.63-17.62,5.06-22.82c3.43-3.13-0.63,33.18,4.94,30.48c5.72-2.77,5.8-12.19,8.47-19.5c3-8.23,5.82-14.19,11.35-20.98
		c1.14-1.4,3.5-2.63,4.48-1.12c-2.05,5.26-3.08,11.07-3.36,16.71c-0.29,5.64,1.92,11.83,7.56,11.5c1.32-0.08,2.43-1.07,3.23-2.13
		c0.88-1.16,0.91-2.73,1-4.19c0.3-5.15,1.71-10.24,4.11-14.81c2.29-4.37,5.46-8.24,7.62-12.67c2.14-4.39,3.25-9.27,3.21-14.15
		c-0.01-1.33-0.12-2.71-0.81-3.85c-1.01-1.66-3-2.41-4.86-2.97c-24.23-7.3-51.8-1.83-71.75,13.74c-6.8,5.3-12.86,11.88-16.07,19.88
		c-4.54,11.33-3.21,25-10.53,34.77c-3.64,4.86-8.99,8.08-13.86,11.71c-7.26,5.4-13.65,11.86-20.07,18.24
		c-3.79,3.77-7.99,7.71-13.28,8.45c-1.3,0.18-2.95-0.06-3.37-1.3c-0.18-0.55-0.06-1.14,0.09-1.7c2.32-8.35,11.5-13.98,12.19-22.61
		c0.39-4.86-2.16-9.58-5.68-12.96c-3.52-3.37-7.94-5.62-11.88-8.68c-13.94-1.02-28.66-2.31-40.07-10.39
		c-9.25-6.55-15.18-16.81-23.68-24.31c-1.61-1.42-3.37-2.77-5.43-3.37c-2.46-0.71-5.11-0.28-7.55,0.5
		c-7.05,2.24-12.93,7.18-19.77,9.98c-1.81,0.74-3.79,1.34-5.7,0.92c-3.13-0.68-5.15-3.99-5.35-7.19c-0.2-3.2,1.02-6.31,2.33-9.24
		c11.9-26.53,33.64-48.51,60.04-60.71c7.51-3.47,16.71-6.06,23.69-1.62c3.46,2.2,5.75,5.79,7.92,9.26
		c5.49,8.77,10.98,17.53,16.47,26.3c0.94,1.49,1.91,3.13,1.75,4.89c-0.13,1.39-0.95,2.61-1.76,3.74
		c-12.67,17.72-29.13,32.72-47.96,43.69c-1.41,0.82-3.05,1.65-4.61,1.17c-1.88-0.58-2.74-2.92-2.33-4.84
		c0.41-1.92,1.73-3.51,3.05-4.96c6.49-7.18,13.85-13.51,21.19-19.82c9.28-7.98,19.18-16.27,31.23-18.45
		c13.82-2.5,27.78,3.59,39.53,11.27c5.48,3.58,11.14,8.23,12.06,14.71c0.57,4-0.8,8-2.15,11.82c-3.82,10.77-8.19,22.28-17.68,28.65
		c-5.6,3.76-12.44,5.31-18.13,8.93c-3.8,2.42-6.99,5.71-10.78,8.16c-7.66,4.95-17.84,6.58-23.24,13.93
		c-1.93,2.63-3.1,5.84-5.45,8.09c-2.36,2.26-6.7,3.03-8.63,0.4c-1.22-1.67-0.96-4.01-0.19-5.93c2.35-5.89,8.37-9.27,13.56-12.93
		c5.18-3.66,10.32-9.14,9.37-15.41c-1.15-7.64-10.45-11.04-18.17-10.83c-10.46,0.28-20.41,4.24-30.42,7.3s-20.87,5.27-30.82,2.05
		c-6.68-2.16-12.36-6.57-17.78-11.02c-9-7.39-18.1-15.68-21.11-26.04c-7.77-6.41-17.7-11.67-27.56-9.6c-5.09,1.07-9.58,4-13.79,7.07
		c-31.71,23.15-54.64,58.03-63.33,96.32c-1.47,6.5-1.98,14.62,3.45,18.49c2.16,1.54,4.9,2.05,7.55,2.06
		c18.05,0.05,30.38-20.26,48.26-22.76c6.58-0.92,13.22,0.71,19.71,2.18c11.44,2.59,23.62,4.7,34.7,0.84
		c3.13-1.09,6.6-3.56,6.02-6.82c-0.73-4.08-6.41-4.34-10.52-3.82c-6.75,0.85-13.6,0.97-20.37,0.36c-2.26-0.2-4.76-0.62-6.15-2.42
		c-2.58-3.35,0.7-7.98,3.87-10.78c18.99-16.78,41.15-29.61,60.63-45.83c2.15-1.79,4.48-4.28,3.73-6.97
		c-0.55-1.99-2.63-3.15-4.64-3.65c-7.67-1.89-15.25,2.91-21.56,7.67c-25.61,19.31-49.72,43.31-58.74,74.09
		c-0.82,2.81-1.52,5.75-1.08,8.64s2.25,5.75,5.05,6.62c2.1,0.66,4.36,0.12,6.51-0.38c9.85-2.32,20.25-3.94,29.99-1.2
		c17.5,4.92,29.73,23,47.76,25.31c10.4,1.33,21.58-2.86,30.22,2.16c16.12,3.92,26.41,19.56,40.84,27.73
		c3.44,1.95,7.7,3.46,11.23,1.7c2.24-1.12,3.71-3.37,4.58-5.72c4.19-11.3-5.19-24.59-17.03-26.8c-11.85-2.21-24.08,4.75-30.79,14.76
		c-1.06,1.59-2.08,3.31-3.7,4.32c-1.62,1.01-4.1,0.97-5.13-0.64c-0.47-0.74-0.56-1.65-0.58-2.53c-0.26-11.75,9.39-21.7,20.15-26.45
		c8.66-3.82,18.53-5.18,27.74-2.98c9.21,2.2,17.63,8.14,22.07,16.5c5.55,10.46,5.25,24.57,14.62,31.82
		c6.42,4.97,15.65,4.85,23.2,1.87c7.55-2.98,13.84-8.38,20.1-13.55c26.32-21.74,55.93-41.46,89.61-47.04
		c5.17-0.86,11.25-1.94,13.55-6.65c0.81-1.66,1-3.57,0.94-5.42c-0.43-12.85-11.66-22.25-18.68-33.01c-1.35-2.07-2.6-4.39-2.45-6.85
		c0.18-2.9,2.23-5.3,4.18-7.46c3.28-3.63,6.61-7.32,10.79-9.88s9.37-3.87,14.03-2.37c6.27,2.02,9.97,8.44,12.29,14.61
		c2.02,5.37,3.46,11.24,2.16,16.83c-1.29,5.59-6.01,10.72-11.75,10.84c-3.44,0.07-6.7-1.62-9.36-3.79
		c-5.74-4.7-9.33-12.16-8.65-19.55c0.68-7.39,5.95-14.34,13.1-16.31c11.24-3.1,22.93,7.02,24.94,18.5
		c2.01,11.48-3.3,23.09-10.36,32.36c-4.17,5.48-9,10.47-12.69,16.28c-3.21,5.05-5.5,10.62-7.71,16.19
		c-2.9,7.32-5.74,15.23-3.99,22.91c2.61,11.49,14.23,18.22,22.16,23.85c32.44,14.67,60.22,39.46,78.48,70.03
		c2.92,4.88,5.72,10.06,10.24,13.51c4.97,3.79,11.39,5.02,17.54,6.13c14.19,2.57,28.72,5.14,42.95,2.82
		c22.75-3.72,42.06-19.49,64.72-23.74c33.37-6.26,65.57,13.27,93.92,31.95c4.87,3.21,9.88,6.56,13.09,11.43
		c4.04,6.13,4.69,13.89,4.2,21.21c-1.41,21.17-15.29,44.05-36.46,45.39c-9.16,0.58-18.02-2.94-26.51-6.4
		c-20.11-8.18-40.21-16.36-60.32-24.54c-18.34-7.46-38.37-15.05-57.45-9.75c-18.57,5.16-32.23,21.58-50.55,27.57
		c-26.12,8.54-54.65-6.48-73.18-26.78c-21.54-23.6-36.38-55.86-65.89-68.11c-19.51-8.09-41.61-5.56-62.51-2.53
		c-12.16,1.77-24.55,3.73-35.47,9.37c-10.92,5.64-20.3,15.66-21.99,27.83c-2.02,14.62,7.01,28.17,14.58,40.84
		c15.47,25.87,26.38,54.47,32.08,84.07c3.06,15.88,4.71,32.34,11.65,46.95s20.8,27.38,36.98,27.27
		c16.18-0.11,47.11-15.56,32.16-21.76c-7.67-3.18-19.57,0.47-22.27,8.32c-3.56,10.33-6.88,21.87-2.54,31.9
		c4.34,10.02,16.6,15.83,27.1,12.84c10.5-2.98,60.71-11.06,33.29-15.18c-34.38-5.17-29.02,32.79-18.62,51.68
		c6.42,11.67,16.49,20.96,23.32,32.39c6.83,11.43,9.84,27.02,1.65,37.53'
        />
      </svg>
    </Detail>
  );
}
