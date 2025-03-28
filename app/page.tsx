import './globals.css'; // or wherever your global styles live
import styles from './page.module.css';

export default function HomePage() {
  return (
    <>
      <div className={`grid-8 ${styles.section}`}>
        <div className={styles.sidebarLeft}>Filters go here</div>
        <div className={styles.sidebarRight}>Manufacturers list</div>
        <div className={styles.products}>
          <div className={styles.productCard}>
            <img src="/sample.jpg" alt="Product" />
            <p>$1000</p>
          </div>
        </div>
      </div>

      <hr className="divider" />
      <div style={{ height: '2000px' }} />
    </>
  );
}
