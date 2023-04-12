import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <h1>
        <Link to="/">iTunes Store</Link>
      </h1>
    </header>
  );
}

export default Header;
