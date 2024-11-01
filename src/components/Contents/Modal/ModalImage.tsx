import styles from './ModalImage.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
