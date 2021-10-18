import Clock from '../clock';
import DateDisplay from '../date';
import Search from '../search';
import Weather from '../weather';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['date-container']}>
        <DateDisplay />
        <Clock />
      </div>
      <div className={styles['search-container']}>
        <Search />
      </div>
      <div className={styles['weather-container']}>
        <Weather />
      </div>
    </header>
  );
}

export default Header;
