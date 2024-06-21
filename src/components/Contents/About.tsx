import styles from './About.module.scss';
import jsImage from '../../public/JavaScript.svg';
import tsImage from '../../public/TypeScript.svg';
import reactImage from '../../public/React-Dark.svg';
import nextImage from '../../public/NextJS-Dark.svg';
import pythonImage from '../../public/Python-Dark.svg';
import gitImage from '../../public/Git.svg';
import sassImage from '../../public/Sass.svg';
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
        <p>It's about me and my skills</p>
      </section>
      <section className={styles.overview}>
        <article className={styles.overview_text}>
          상상한 무궁무진한 아이디어를 제가 배운 기술로 구현해가는 과정이
          재밌습니다. 항상 새로운 시도를 두려워하지 않는 프론트엔드 개발자가
          되겠습니다. “Try and fail, but don't fail to try” 제가 가장 좋아하는
          영어 격언 입니다. 거칠고 빠르게 지나가는 물보다 잔잔하게 오랫동안 깊이
          있게 흐르는 물처럼 꾸준히 공부하고, 계속 해서 나아갈 자신이 있습니다.
          성실하게 쌓은 지식으로, 회사에 실질적인 도움이 되는 프론트엔드
          개발자로 일하고 싶습니다.
        </article>
        <div>
          <span>Overview</span>
        </div>
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
