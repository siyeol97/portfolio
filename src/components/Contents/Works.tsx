import Detail from './Detail';
import styles from './Works.module.scss';
import githubImg from '../../public/Github-Dark.svg';
import partyTimeJobLogo from '../../public/partyTimeJobLogo.png';
import mogazoaImg from '../../public/mogazoa.png';
import SDlogo from '../../public/SDlogo.jpeg';

export default function Works() {
  return (
    <>
      {/* work_1,2 */}
      <Detail backgroundColor='#f1f1f1'>
        <section className={styles.works_intro}>
          <h1>
            <span>My</span>
            <br />
            <span>Works</span>
          </h1>
          <p>My journey</p>
        </section>
        <section className={styles.left_sort}>
          <div className={styles.during}>
            <span>2024.04.11</span>
            <br />
            <span>~ 2024.05.17</span>
          </div>
          <div className={styles.left_sort_box}>
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
              <div className={styles.left_sort_skills}>
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
                  <li>유저 프로필 정보 수정, 상품 추가/수정 기능 구현</li>
                  <li>
                    팔로우/팔로우 취소 기능 구현 팔로워 목록, 상품 목록
                    무한스크롤 구현
                  </li>
                  <li>카카오 간편 로그인/회원가입/공유 기능 구현</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.left_sort}>
          <div className={styles.during}>
            <span>2024.03.07</span>
            <br />
            <span>~ 2024.03.25</span>
          </div>
          <div className={styles.left_sort_box}>
            <div>
              <div className={styles.project_title}>
                <h4>party time job</h4>

                <a
                  href='https://party-time-job-deploy.vercel.app/'
                  target='_blank'
                >
                  <img
                    src={partyTimeJobLogo}
                    alt='partyTimeJob-image'
                  />
                </a>
                <a
                  href='https://github.com/Party-Time-Job/Party-Time-Job'
                  target='_blank'
                >
                  <img
                    src={githubImg}
                    alt='github-image'
                  />
                </a>
              </div>
              <span>일자리가 급한 사람들을 위한 구인구직 플랫폼</span>
            </div>
            <div className={styles.explain}>
              <div className={styles.left_sort_skills}>
                <span>Used skills</span>
                <ul>
                  <li>Next.js 14 (app-router)</li>
                  <li>Typescript</li>
                  <li>Tailwind</li>
                  <li>Husky</li>
                  <li>Eslint/Prettier</li>
                </ul>
              </div>
              <div className={styles.my_role}>
                <span>My role</span>
                <ul>
                  <li>공고 리스트, 상세 페이지 담당</li>
                  <li>공고 검색, 정렬, 필터링 기능 구현</li>
                  <li>로컬 스토리지를 이용한 최근 본 공고 기능 구현</li>
                  <li>공고 신청/취소 기능 구현</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Detail>
      {/* work_3,4 */}
      <Detail
        color='#f1f1f1'
        backgroundColor='#121212'
      >
        <section className={styles.right_sort}>
          <div className={styles.right_sort_box}>
            <div>
              <div className={styles.project_title}>
                <a
                  href='https://github.com/siyeol97/siyeol-blog'
                  target='_blank'
                >
                  <img
                    src={githubImg}
                    alt='github-image'
                  />
                </a>
                <a
                  href='https://siyeol-blog.vercel.app/'
                  target='_blank'
                >
                  <img
                    src={SDlogo}
                    alt='SD-logo'
                  />
                </a>
                <h4 className={styles.eng_font}>Siyeol’s Dev-log</h4>
              </div>
              <span>개인 블로그</span>
            </div>
            <div className={styles.explain}>
              <div className={styles.right_sort_skills}>
                <ul>
                  <li>Next.js 14 (app-router)</li>
                  <li>Typescript</li>
                  <li>Canvas API</li>
                  <li>React-query</li>
                  <li>Mongodb</li>
                  <li>React-markdown</li>
                  <li>React-syntax-highlighter</li>
                  <li>Eslint/Prettier</li>
                </ul>
                <span>Used skills</span>
              </div>
              <div className={styles.my_role}>
                <ul>
                  <li>Github, Google, Credential 로그인 구현</li>
                  <li>포스트 본문, 글쓰기 미리보기 markdown view 구현</li>
                  <li>
                    사용자 정보, 포스트, 댓글 정보 mongoDB 저장을 위한 API 구현
                  </li>
                  <li>
                    글, 댓글 작성, 포스트 좋아요 기능 optimistic update 구현
                  </li>
                </ul>
                <span>My role</span>
              </div>
            </div>
          </div>
          <div className={styles.during}>
            <span>2024.02.11</span>
            <br />
            <span>~ in progress</span>
          </div>
        </section>
        <section className={styles.right_sort}>
          <div className={styles.right_sort_box}>
            <div>
              <div className={styles.project_title}>
                <a
                  href='https://github.com/siyeol97/Diary'
                  target='_blank'
                >
                  <img
                    src={githubImg}
                    alt='github-image'
                  />
                </a>
                <a
                  href='https://party-time-job-deploy.vercel.app/'
                  target='_blank'
                >
                  <img
                    src={partyTimeJobLogo}
                    alt='partyTimeJob-image'
                  />
                </a>
                <h4>등잔 밑 일기</h4>
              </div>
              <span>
                사용자가 입력한 음성과 텍스트를 이용한 감정, 우울감 분석 일기
                어플리케이션
              </span>
            </div>
            <div className={styles.explain}>
              <div className={styles.right_sort_skills}>
                <ul>
                  <li>React-Native, Expo</li>
                  <li>Javascript</li>
                  <li>Python</li>
                  <li>PyTorch</li>
                  <li>Tensorflow</li>
                  <li>Flask</li>
                </ul>
                <span>Used skills</span>
              </div>
              <div className={styles.my_role}>
                <ul>
                  <li>텍스트 감정분석, 챗봇 모델 훈련</li>
                  <li>모바일 앱 UI, 기능 구현 담당</li>
                  <li>음성 일기 녹음, 재생 기능</li>
                  <li>react-native-chart-kit을 이용한 차트 통계 기능</li>
                  <li>음악 추천 기능, 자가 관리법, 할 일 추천 기능</li>
                  <li>AI 모델 결과 반환 API 구현</li>
                </ul>
                <span>My role</span>
              </div>
            </div>
          </div>
          <div className={styles.during}>
            <span>2023.04.27</span>
            <br />
            <span>~ 2023.06.22</span>
          </div>
        </section>
      </Detail>
    </>
  );
}
