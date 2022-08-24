import styles from './Header.module.css';

import todoLogo from '../assets/img/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="To-do Logo" />

      <div className={styles.title}>
        <span className={styles.firstLetters}>to</span>
        <span className={styles.lastLetters}>do</span>
      </div>
    </header>
  );
}
