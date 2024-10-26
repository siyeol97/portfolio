import styles from './ModalImage.module.scss';

interface Props {
  image: string;
}

export default function ModalImage({ image }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.image_box}>
        <img
          className={styles.image}
          src={image}
          alt='image'
        />
      </div>
    </section>
  );
}
