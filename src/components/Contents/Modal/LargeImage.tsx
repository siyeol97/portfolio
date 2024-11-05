import styles from './LargeImage.module.scss';
import closeImage from '../../../public/asset/close.svg';

interface Props {
  toggleLargeImage: (image: null | string) => void;
  image: null | string;
}

export default function LargeImage({ toggleLargeImage, image }: Props) {
  if (!image) {
    return;
  }

  return (
    <div className={styles.wrapper}>
      <img
        src={closeImage}
        alt='close-image'
        className={styles.close}
        onClick={() => toggleLargeImage(null)}
      />
      <div className={styles.container}>
        <img
          src={image}
          alt='image'
          className={styles.image}
          onClick={() => toggleLargeImage(null)}
        />
      </div>
    </div>
  );
}
