import styles from './Header.module.css';
import TextButton from '@/components/TextButton/TextButton';


export default function Header() {
  return (
    <header className={styles.header}>
      <div className="grid-8">
        <div className={`${styles.logo}`} style={{ gridColumn: '1 / span 4' }}>
          Jagaimo International
        </div>
        <nav className={styles.nav} style={{ gridColumn: '5 / span 4' }}>
            <div className={styles.navCol}><TextButton href="#">ENGLISH</TextButton></div>
            <div className={styles.navCol}><TextButton href="#">LOGIN</TextButton></div>
            <div className={styles.navCol}><TextButton href="#">WISHLIST</TextButton></div>
            <div className={styles.navCol}><TextButton href="#">CART</TextButton></div>
        </nav>
      </div>
    </header>
  );
}
