import blog_cover_image from '../public/blog_cover.png';
import diary_cover_image from '../public/diary_cover.png';
import mogazoa_cover_image from '../public/mogazoa_cover.png';
import ptj_cover_image from '../public/ptj_cover.png';

export interface Card {
  info: {
    title: string;
    description: string;
    period: string;
  };
  image: string;
  skills: string[];
  role: string[];
  impression: string[];
}

const cards: Card[] = [
  {
    info: {
      title: 'mogazoa',
      description:
        '음악, 식당, 영화, 전자기기, 호텔, 옷, 앱 등 다양한 분야의 상품을 리뷰하는 플랫폼',
      period: '2024.04.11 ~ 2024.05.17',
    },
    image: mogazoa_cover_image,
    skills: [
      'Next.js',
      'TypeScript',
      'Zustand',
      'React-query',
      'SCSS',
      'EsLint/Prettier',
    ],
    role: [
      '유저 프로필 페이지 담당',
      'Zustand를 이용한 모달창의 전역 상태 관리',
      '재사용 가능항 공통 컴포넌트 : Button, Modal, ProductCard 컴포넌트 설계 및 구현',
      'SSR 적용 : 유저 프로필 페이지에 서버 사이드 렌더링 적용으로 초기 로딩 속도 개선',
      'React-Query의 useMutation과 useInfiniteQuery를 사용하여 팔로우/팔로우 취소, 팔로워 목록, 상품목록 무한 스크롤 기능 구현',
      '유저 프로필 수정 기능 : React-hook-form을 활용하여 유저 프로필 정보 수정 및 상품 추가/수정 기능 구현',
      '인증 및 공유 기능 : 카카오 간편 로그인/회원가입 및 콘텐츠 공유 기능 구현',
    ],
    impression: ['으아아아'],
  },
  {
    info: {
      title: 'party-time-job',
      description: '일자리가 급한 사람들을 위한 구인, 구직 플랫폼',
      period: '2024.03.07 ~ 2024.03.25',
    },
    image: ptj_cover_image,
    skills: ['Next.js', 'TypeScript', 'Tailwind', 'Husky', 'EsLint/Prettier'],
    role: [
      '재사용 가능한 공통 컴포넌트 : 공고 카드, 공고 리스트, 공고 상세정보 컴포넌트 설계 및 구현',
      '공고 목록 화면 페이지네이션 기능 구현',
      '공고 검색, 공고 정렬, 필터링 기능 구현',
      'localStorage를 이용한 최근 본 공고 기능 구현',
      '공고 신청/취소 기능 구현',
    ],
    impression: ['으아아아'],
  },
  {
    info: {
      title: `Siyeol's Dev-log`,
      description: '개인 블로그',
      period: '2024.02.11 ~ in progress',
    },
    image: blog_cover_image,
    skills: [
      'Next.js',
      'TypeScript',
      'React-markdown',
      'React-syntax-highlighter',
      'React-query',
      'MongoDB',
      'EsLint/Prettier',
    ],
    role: [
      'Next-auth를 이용한 일반 회원가입/로그인, 구글/깃허브 소셜 로그인 기능 구현',
      '글 작성, 댓글 작성, 글 검색 기능 구현',
      'React-markdown, React-syntax-highlighter를 이용한 글 본문, 작성 중 미리보기 기능 구현',
      'React-query의 optimistic update를 이용한 글 좋아요 버튼 구현',
    ],
    impression: ['으아아아'],
  },
  {
    info: {
      title: '등잔 밑 일기',
      description:
        '사용자가 입력한 음성과 텍스트를 이용한 감정, 우울감 분석 일기 어플리케이션',
      period: '2023.04.27 ~ 2023.06.22',
    },
    image: diary_cover_image,
    skills: [
      'React-Native, Expo',
      'JavaScript',
      'Python',
      'PyTorch',
      'Tensorflow',
      'Flask',
    ],
    role: [
      '텍스트 감정 분석 및 AI 모델 훈련 : KoBERT 모델을 활용하여 사용자의 일기 내용을 기반으로 감정 분석 및 챗봇 응답 AI 모델 훈련',
      'API 구현 : Flask를 이용한 감정 분석, 챗봇 응답, Google Cloud STT로 변환된 텍스트 등 요청을 처리하고 응답하는 API 설계 및 구현',
      '모바일 앱 UI 구현 : React-Native, Expo를 이용하여 모바일 앱 UI 설계 및 구현',
      '음성 일기 기능 : 사용자의 음성을 녹음, 저장하고 재생할 수 있는 기능 구현',
      '감정 통계 및 시각화 : React-native-chart-kit 라이브러를 활용한 감정 종류 통계 및 우울감 수치 그래프 시각화',
      '음악 및 할 일 추천 기능 : 음악 플랫폼 "멜론"의 해시태그를 기준으로 웹 크롤링을 통해 구축된 음악 플레이리스트 데이터를 사용, 사용자의 감정에 따른 음악 및 할 일 추천 기능 구현',
    ],
    impression: ['으아아아'],
  },
];

export default cards;
