import Image from 'next/image';
import styles from './RevolvingImage.module.css';

export default function RevolvingImage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/assests/agent.png"
          alt="Revolving Image"
          width={80}
          height={80}
          className={styles.movingImage}
          priority
        />
      </div>
    </div>
  );
}