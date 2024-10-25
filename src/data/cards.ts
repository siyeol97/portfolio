import blog_cover_image from '../public/blog_cover.png';
import diary_cover_image from '../public/diary_cover.png';
import mogazoa_cover_image from '../public/mogazoa_cover.png';
import ptj_cover_image from '../public/ptj_cover.png';

const cards = [
  {
    title: 'mogazoa',
    description:
      '음악, 식당, 영화, 전자기기, 호텔, 옷, 앱 등 다양한 분야의 상품을 리뷰하는 플랫폼',
    image: mogazoa_cover_image,
  },
  {
    title: 'party-time-job',
    description: '일자리가 급한 사람들을 위한 구인, 구직 플랫폼',
    image: ptj_cover_image,
  },
  {
    title: `Siyeol's Dev-log`,
    description: '개인 블로그',
    image: blog_cover_image,
  },
  {
    title: '등잔 밑 일기',
    description:
      '사용자가 입력한 음성과 텍스트를 이용한 감정, 우울감 분석 일기 어플리케이션',
    image: diary_cover_image,
  },
];

export default cards;
