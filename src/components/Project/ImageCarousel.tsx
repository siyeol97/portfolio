import styles from './ImageCarousel.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrowNext from '../../public/asset/arrow-next.svg';
import arrowPrev from '../../public/asset/arrow-prev.svg';
import { useState } from 'react';
import LargeImage from '../Contents/Modal/LargeImage';

interface Props {
  images: string[];
}

export default function ImageCarousel({ images }: Props) {
  const [isImageOpened, setIsImageOpened] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleLargeImage = (image: null | string) => {
    if (!isImageOpened) {
      setSelectedImage(image);
    } else {
      setSelectedImage(null);
    }

    setIsImageOpened((prev) => !prev);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    draggable: false,
  };

  return (
    <div className={styles.slider_container}>
      {isImageOpened && (
        <LargeImage
          toggleLargeImage={toggleLargeImage}
          image={selectedImage}
        />
      )}
      <Slider
        {...settings}
        dotsClass='dot-style'
      >
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt='project_image'
              className={styles.project_image}
              onClick={() => toggleLargeImage(image)}
            />
          );
        })}
      </Slider>
    </div>
  );
}

// slick-arrow
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
      style={{ ...arrowStyle, ...nextArrowStyle, ...style }}
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
      style={{ ...arrowStyle, ...prevArrowStyle, ...style }}
      className={`${styles.arrow} ${className}`}
    />
  );
}

const prevArrowStyle = {
  left: '-40px',
};

const nextArrowStyle = {
  right: '-40px',
};

const arrowStyle = {
  width: '40px',
  height: '40px',
  zIndex: 1,
};
