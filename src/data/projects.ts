// mogazoa
import cover from '../public/mogazoa/cover.png';
import add_product from '../public/mogazoa/add_product.png';
import compare from '../public/mogazoa/compare.png';
import edit_product from '../public/mogazoa/edit_product.png';
import edit_profile from '../public/mogazoa/edit_profile.png';
import follow from '../public/mogazoa/follow.png';
import product from '../public/mogazoa/product.png';
import profile from '../public/mogazoa/profile.png';
import reply from '../public/mogazoa/reply.png';

// blog
import blog_cover from '../public/blog/blog_cover.png';
import blog_login from '../public/blog/blog_login.png';
import blog_main from '../public/blog/blog_main.png';
import blog_reply from '../public/blog/blog_reply.png';
import blog_search from '../public/blog/blog_search.png';
import blog_write from '../public/blog/blog_write.png';

// diary
import diary_cover from '../public/diary/diary_cover.png';
import diary_write from '../public/diary/diary_exam1.png';
import diary_statistics from '../public/diary/diary_exam2.png';
import diary_poster from '../public/diary/diary_poster.png';
import diary_process from '../public/diary/diary_process.png';

// party-time-job
import ptj_cover from '../public/party-time-job/ptj_cover.png';
import apply_table from '../public/party-time-job/apply_table.png';
import ptj_edit_profile from '../public/party-time-job/ptj_edit_profile.png';
import noti_list from '../public/party-time-job/noti_list.png';
import notification from '../public/party-time-job/notification.png';
import outdated_noti from '../public/party-time-job/outdated_noti.png';
import seen_noti from '../public/party-time-job/seen_noti.png';

export interface ProjectType {
  title: string;
  description: string;
  period: string;
  images: string[];
  skills: { name: string; backgroundColor: string; color?: string }[];
  role: string[];
  introduce: string[];
  url: string;
  repository: string;
}

export interface Projects {
  [key: string]: ProjectType;
}

const projects: Projects = {
  mogazoa: {
    title: 'mogazoa',
    description:
      '음악, 식당, 영화, 전자기기, 호텔, 옷, 앱 등 다양한 분야의 상품을 리뷰하는 플랫폼',
    period: '2024.04.11 ~ 2024.05.17',
    images: [
      cover,
      add_product,
      product,
      edit_product,
      reply,
      profile,
      edit_profile,
      follow,
      compare,
    ],
    skills: [
      { name: 'Next.js', backgroundColor: '#000000' },
      { name: 'TypeScript', backgroundColor: '#3178C6' },
      { name: 'Zustand', backgroundColor: '#E34F26' },
      { name: 'Tanstack-query', backgroundColor: '#F26F28' },
      { name: 'SCSS', backgroundColor: '#CD6799' },
      { name: 'EsLint/Prettier', backgroundColor: '#4B32C3' },
    ],
    role: [
      '유저 프로필 페이지 담당, pc, tablet, mobile 반응형 디자인',
      'Zustand를 이용한 모달창의 전역 상태 관리',
      'Button, Modal, ProductCard 재사용 컴포넌트 설계 및 구현',
      '유저 프로필 페이지에 서버 사이드 렌더링 적용으로 초기 로딩 속도 개선',
      'Tanstack-Query의 useMutation, useInfiniteQuery를 사용하여 팔로우/팔로우 취소, 팔로워 목록, 상품목록 무한 스크롤 기능 구현',
      'React-hook-form을 활용하여 유저 프로필 정보 수정 및 상품 추가/수정 기능 구현',
      '인증 및 공유 기능 - 카카오 간편 로그인/회원가입 및 콘텐츠 공유 기능 구현',
    ],
    introduce: [
      '상품을 카테고리 별로 둘러볼 수 있습니다.',
      '다양한 종류의 상품을 직접 등록하고, 리뷰와 별점을 남길 수 있습니다.',
      '리뷰어의 랭킹을 확인할 수 있습니다.',
      '리뷰어의 프로필 페이지에서 다양한 정보를 확인할 수 있습니다.',
      '비교하기 페이지에서 두 가지의 상품을 찜, 리뷰수, 별점 기준으로 비교할 수 있습니다.',
    ],
    url: 'https://mogazoa4-1.vercel.app/',
    repository: 'https://github.com/Codeit-FE3-Part4-team1-Final/Mogazoa',
  },
  party_time_job: {
    title: 'party-time-job',
    description: '일자리가 급한 사람들을 위한 구인, 구직 플랫폼',
    period: '2024.03.07 ~ 2024.03.25',
    images: [
      ptj_cover,
      noti_list,
      notification,
      apply_table,
      ptj_edit_profile,
      outdated_noti,
      seen_noti,
    ],
    skills: [
      { name: 'Next.js', backgroundColor: '#000000' },
      { name: 'TypeScript', backgroundColor: '#3178C6' },
      { name: 'Tailwind', backgroundColor: '#38B2AC' },
      { name: 'Husky', backgroundColor: '#333236' },
      { name: 'EsLint/Prettier', backgroundColor: '#4B32C3' },
    ],
    role: [
      '공고 카드, 공고 리스트, 공고 상세정보 재사용 컴포넌트 설계 및 구현',
      'pc, tablet, mobile 반응형 디자인',
      '공고 목록 화면 페이지네이션 기능 구현',
      '공고 검색, 공고 정렬, 필터링 기능 구현',
      'localStorage를 이용한 최근 본 공고 기능 구현',
      '공고 신청/취소 기능 구현',
    ],
    introduce: [
      '사장님과 알바 유형으로 회원 가입이 가능합니다.',
      '알바 유형은 공고에 지원할 수 있고 지원 결과를 알람으로 확인할 수 있습니다.',
      '사장님 유형은 가게와 공고를 등록할 수 있고, 알바의 지원을 승인/거절할 수 있습니다.',
      '전체 공고와 지난/마감 공고를 확인할 수 있습니다.',
      '공고를 검색할 수 있고, 위치, 시작일, 시급 기준으로 필터링 할 수 있습니다.',
    ],
    url: 'https://party-time-job-deploy.vercel.app/',
    repository: 'https://github.com/Party-Time-Job/Party-Time-Job',
  },
  blog: {
    title: `Siyeol's Dev-log`,
    description: '개인 블로그',
    period: '2024.02.11 ~ in progress',
    images: [
      blog_cover,
      blog_login,
      blog_write,
      blog_main,
      blog_reply,
      blog_search,
    ],
    skills: [
      { name: 'Next.js', backgroundColor: '#000000' },
      { name: 'TypeScript', backgroundColor: '#3178C6' },
      { name: 'React-syntax-highlighter', backgroundColor: '#333236' },
      { name: 'React-markdown', backgroundColor: '#333236' },
      { name: 'Tanstack-query', backgroundColor: '#F26F28' },
      { name: 'rehype-sanitize', backgroundColor: '#333236' },
      { name: 'MongoDB', backgroundColor: '#4DB33D' },
      { name: 'EsLint/Prettier', backgroundColor: '#4B32C3' },
    ],
    role: [
      'Next-auth를 이용한 일반 회원가입/로그인, 구글/깃허브 소셜 로그인 기능 구현',
      'MongoDB를 이용한 글, 댓글, 태그, 사용자 정보 저장 및 관리',
      '글 작성, 수정, 삭제, 검색 기능 구현',
      '댓글 작성, 수정, 삭제, 기능 구현',
      'Tanstack-query를 이용한 글 목록, 댓글 목록, 태그 목록 등 데이터 fetch 및 상태 관리',
      'React-markdown, React-syntax-highlighter를 이용한 markdown 형식 글 작성 및 렌더링',
      'Next.js의 middleware를 이용하여 로그인 여부에 따른 페이지 접근 제어',
      'rehype-sanitize 라이브러리를 이용하여 markdown 내용을 HTML로 변환할 때 발생할 수 있는 XSS 공격 방지 ',
      'React-query의 optimistic update를 이용한 좋아요 버튼 구현',
    ],
    introduce: [
      'Github, Google 계정으로 로그인할 수 있습니다.',
      '댓글을 남길 수 있고, 포스트 좋아요 버튼을 누를 수 있습니다.',
      '포스트를 검색할 수 있습니다.',
      'markdown 형식으로 글을 작성할 수 있습니다.',
    ],
    url: 'https://siyeol-blog.vercel.app/',
    repository: 'https://github.com/siyeol97/siyeol-blog',
  },
  diary: {
    title: '등잔밑일기',
    description:
      '사용자가 입력한 음성과 텍스트를 이용한 감정, 우울감 분석 일기 어플리케이션',
    period: '2023.04.27 ~ 2023.06.22',
    images: [
      diary_cover,
      diary_write,
      diary_statistics,
      diary_poster,
      diary_process,
    ],
    skills: [
      { name: 'JavaScript', backgroundColor: '#F7DF1E', color: '#000000' },
      { name: 'React-Native', backgroundColor: '#61DAFB', color: '#000000' },
      { name: 'Expo', backgroundColor: '#000020' },
      { name: 'Python', backgroundColor: '#3776AB' },
      { name: 'PyTorch', backgroundColor: '#EE4C2C' },
      { name: 'Tensorflow', backgroundColor: '#FF6F00' },
      { name: 'Flask', backgroundColor: '#000000' },
      { name: 'Google Cloud STT', backgroundColor: '#4285F4' },
    ],
    role: [
      'KoBERT 모델을 활용하여 사용자의 일기 내용을 기반으로 감정 분석 및 챗봇 응답 AI 모델 훈련',
      'Flask를 이용한 감정 분석, 챗봇 응답, Google Cloud STT로 변환된 텍스트 등 요청을 처리하고 응답하는 API 설계 및 구현',
      'React-Native, Expo를 이용하여 모바일 앱 UI 설계 및 구현',
      '사용자의 음성을 녹음, 저장하고 재생할 수 있는 기능 구현',
      'React-native-chart-kit 라이브러를 활용한 감정 종류 통계 및 우울감 수치 그래프 시각화',
      '음악 플랫폼 "멜론"의 해시태그를 기준으로 웹 크롤링을 통해 구축된 음악 플레이리스트 데이터를 사용, 사용자의 감정에 따른 음악 및 할 일 추천 기능 구현',
    ],
    introduce: [
      '음성으로 일기를 녹음할 수 있습니다.',
      '음성과 자동으로 변환된 텍스트를 AI 모델로 분석해 유저의 감정을 예측합니다.',
      '유저의 감정에 따라 위로 챗봇이 적절한 문구를 출력합니다.',
      '일간, 주간별 감정과 우울감 양상 통계를 제공합니다.',
      '유저의 감정에 따른 음악을 추천하고 자가관리법을 제공합니다.',
    ],
    url: '',
    repository: 'https://github.com/siyeol97/Diary',
  },
};

export default projects;
