import Image from "next/image";
import utilStyles from '../../styles/utils.module.scss';
import styles from './menu.module.scss';

const name = 'Your Name'

export default function Menu() {
  return (
    <div id='sidebar' className={styles.menu}>
      <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={80}
        width={80}
        alt={name}
      />
    </div>
  );
}
