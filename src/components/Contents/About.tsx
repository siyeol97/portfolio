import { useState } from 'react';
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
    </Detail>
  );
}
