import styles from './About.module.scss';
import jsImage from '../../public/asset/JavaScript.svg';
import tsImage from '../../public/asset/TypeScript.svg';
import reactImage from '../../public/asset/React-Dark.svg';
import nextImage from '../../public/asset/NextJS-Dark.svg';
import pythonImage from '../../public/asset/Python-Dark.svg';
import gitImage from '../../public/asset/Git.svg';
import sassImage from '../../public/asset/Sass.svg';
import Detail from './Detail';

export default function About() {
  return (
    <Detail
      color='#f1f1f1'
      backgroundColor='#121212'
    >
      <section className={styles.intro_text}>
        <h1>
          <span>About</span>
          <br />
          <span>Me</span>
        </h1>
        <p>It's about me and skills</p>
      </section>
      <section className={styles.overview}>
        <div>
          <span>Overview</span>
        </div>
        <article className={styles.overview_text}>
          안녕하세요! 주니어 프론트엔드 개발자 이시열 입니다.
          <br />
          새로운 기술로 아이디어를 구현하는 과정이 저에게는 큰 즐거움입니다.
          <br /> 늘 배우고 도전하며 성장하는, 그리고 실패를 두려워하지 않는
          프론트엔드 개발자가 되고자 합니다.
          <br /> ‘시도조차 하지 않으면 아무것도 얻을 수 없다’는 마음가짐으로,
          차분하고 꾸준하게 실력을 쌓아왔습니다.
          <br /> 이제는 그 성실함을 바탕으로 실질적인 가치를 더할 수 있는
          개발자가 될 것입니다.
        </article>
      </section>
      <section className={styles.skills}>
        <div>
          <span>Skills &</span>
          <br />
          <span>Tools</span>
        </div>
        <div className={styles.skills_img}>
          <ul>
            <li>
              <img
                src={jsImage}
                alt='javascript-image'
              />
            </li>
            <li>
              <img
                src={tsImage}
                alt='typescript-image'
              />
            </li>
            <li>
              <img
                src={reactImage}
                alt='react-image'
              />
            </li>
            <li>
              <img
                src={nextImage}
                alt='next-image'
              />
            </li>
            <li>
              <img
                src={pythonImage}
                alt='python-image'
              />
            </li>
            <li>
              <img
                src={sassImage}
                alt='sass-image'
              />
            </li>
            <li>
              <img
                src={gitImage}
                alt='git-image'
              />
            </li>
          </ul>
        </div>
      </section>
    </Detail>
  );
}
