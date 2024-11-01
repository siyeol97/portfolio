import styles from './ModalImage.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrowNext from '../../../public/asset/arrow-next.svg';
import arrowPrev from '../../../public/asset/arrow-prev.svg';

interface Props {
  images: string[];
}

export default function ModalImage({ images }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className={styles.wrapper}>
      <Slider {...settings}>
        {images.map((image) => (
          <div
            className={styles.image_box}
            key={image}
          >
            <img
              className={styles.image}
              src={image}
              alt='image'
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function NextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <img
      src={arrowNext}
      alt='arrow-next'
      onClick={onClick}
      style={{ width: '40px', height: '40px', zIndex: 1, ...style }}
      className={`${styles.arrow} ${className}`}
    />
  );
}

function PrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <img
      src={arrowPrev}
      alt='arrow-prev'
      onClick={onClick}
      style={{ ...arrowStyle, ...style }}
      className={`${styles.arrow} ${className}`}
    />
  );
}

const arrowStyle = {
  width: '40px',
  height: '40px',
  zIndex: 1,
};
