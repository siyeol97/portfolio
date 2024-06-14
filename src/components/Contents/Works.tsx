import Detail from './Detail';
import styles from './Works.module.scss';
import githubImg from '../../public/Github-Dark.svg';
import mogazoaImg from '../../public/mogazoalogo.png';

export default function Works() {
  return (
    <>
      <Detail backgroundColor='#f1f1f1'>
        <section className={styles.works_intro}>
          <h1>
            <span>My</span>
            <br />
            <span>Works</span>
          </h1>
          <p>My journey</p>
        </section>
        <section className={styles.first_work}>
          <div className={styles.during}>
            <span>2024.04.11</span>
            <br />
            <span>~ 2024.05.17</span>
          </div>
          <div className={styles.first_work_box}>
            <div>
              <div className={styles.project_title}>
                <h4>mogazoa</h4>
                <a
                  href='https://mogazoa4-1.vercel.app/'
                  target='_blank'
                >
                  <img
                    src={mogazoaImg}
                    alt='mogazoa-image'
                  />
                </a>
                <a
                  href='https://github.com/Codeit-FE3-Part4-team1-Final/Mogazoa'
                  target='_blank'
                >
                  <img
                    src={githubImg}
                    alt='github-image'
                  />
                </a>
              </div>
              <span>
                음악, 식당, 영화, 전자기기, 호텔, 옷, 앱 등 다양한 분야의 상품을
                리뷰하는 플랫폼
              </span>
            </div>
            <div className={styles.explain}>
              <div className={styles.first_work_skills}>
                <span>Used skills</span>
                <ul>
                  <li>Next.js 14 (app-router)</li>
                  <li>Typescript</li>
                  <li>Zustand</li>
                  <li>React-query</li>
                  <li>SCSS</li>
                  <li>Eslint/Prettier</li>
                </ul>
              </div>
              <div className={styles.my_role}>
                <span>My role</span>
                <ul>
                  <li>유저 프로필 페이지 담당</li>
                  <li>Zustand를 이용하여 모달창의 전역상태관리</li>
                  <li>재사용 공통 컴포넌트 개발(Button, Modal, ProductCard)</li>
                  <li>
                    팔로우/팔로우 취소 기능 구현 팔로워 목록, 상품 목록
                    무한스크롤 구현
                  </li>
                  <li>유저 프로필 정보 수정, 상품 추가/수정 기능 구현</li>
                  <li>카카오 간편 로그인/회원가입/공유 기능 구현</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Detail>
      <Detail
        color='#f1f1f1'
        backgroundColor='#121212'
      >
        <section className={styles.second_work}>
          <div className={styles.second_work_box}>
            <div>
              <div className={styles.project_title}>
                <a
                  href='https://mogazoa4-1.vercel.app/'
                  target='_blank'
                >
                  <img
                    src={mogazoaImg}
                    alt='mogazoa-image'
                  />
                </a>
                <a
                  href='https://github.com/Codeit-FE3-Part4-team1-Final/Mogazoa'
                  target='_blank'
                >
                  <img
                    src={githubImg}
                    alt='github-image'
                  />
                </a>
                <h4>mogazoa</h4>
              </div>
              <span>
                음악, 식당, 영화, 전자기기, 호텔, 옷, 앱 등 다양한 분야의 상품을
                리뷰하는 플랫폼
              </span>
            </div>
            <div className={styles.explain}>
              <div className={styles.second_work_skills}>
                <ul>
                  <li>Next.js 14 (app-router)</li>
                  <li>Typescript</li>
                  <li>Zustand</li>
                  <li>React-query</li>
                  <li>SCSS</li>
                  <li>Eslint/Prettier</li>
                </ul>
                <span>Used skills</span>
              </div>
              <div className={styles.my_role}>
                <ul>
                  <li>유저 프로필 페이지 담당</li>
                  <li>Zustand를 이용하여 모달창의 전역상태관리</li>
                  <li>재사용 공통 컴포넌트 개발(Button, Modal, ProductCard)</li>
                  <li>
                    팔로우/팔로우 취소 기능 구현 팔로워 목록, 상품 목록
                    무한스크롤 구현
                  </li>
                  <li>유저 프로필 정보 수정, 상품 추가/수정 기능 구현</li>
                  <li>카카오 간편 로그인/회원가입/공유 기능 구현</li>
                </ul>
                <span>My role</span>
              </div>
            </div>
          </div>
          <div className={styles.during}>
            <span>2024.04.11</span>
            <br />
            <span>~ 2024.05.17</span>
          </div>
        </section>
        <section className={styles.third_work}>
          <div className={styles.during}>
            <span>2024.04.11</span>
            <br />
            <span>~ 2024.05.17</span>
          </div>
          <div className={styles.third_work_box}>
            <div>
              <div className={styles.project_title}>
                <h4>mogazoa</h4>
                <a
                  href='https://mogazoa4-1.vercel.app/'
                  target='_blank'
                >
                  <img
                    src={mogazoaImg}
                    alt='mogazoa-image'
                  />
                </a>
                <a
                  href='https://github.com/Codeit-FE3-Part4-team1-Final/Mogazoa'
                  target='_blank'
                >
                  <img
                    src={githubImg}
                    alt='github-image'
                  />
                </a>
              </div>
              <span>
                음악, 식당, 영화, 전자기기, 호텔, 옷, 앱 등 다양한 분야의 상품을
                리뷰하는 플랫폼
              </span>
            </div>
            <div className={styles.explain}>
              <div className={styles.third_work_skills}>
                <span>Used skills</span>
                <ul>
                  <li>Next.js 14 (app-router)</li>
                  <li>Typescript</li>
                  <li>Zustand</li>
                  <li>React-query</li>
                  <li>SCSS</li>
                  <li>Eslint/Prettier</li>
                </ul>
              </div>
              <div className={styles.my_role}>
                <span>My role</span>
                <ul>
                  <li>유저 프로필 페이지 담당</li>
                  <li>Zustand를 이용하여 모달창의 전역상태관리</li>
                  <li>재사용 공통 컴포넌트 개발(Button, Modal, ProductCard)</li>
                  <li>
                    팔로우/팔로우 취소 기능 구현 팔로워 목록, 상품 목록
                    무한스크롤 구현
                  </li>
                  <li>유저 프로필 정보 수정, 상품 추가/수정 기능 구현</li>
                  <li>카카오 간편 로그인/회원가입/공유 기능 구현</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Detail>
      <Detail backgroundColor='#f1f1f1'>내용</Detail>
    </>
  );
}
