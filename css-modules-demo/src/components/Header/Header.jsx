import styles from './Header.module.css';

/**
 * Header Component
 *
 * Props:
 *  - title: string
 *  - subtitle: string
 *  - sticky: boolean  — makes the header stick to the top on scroll
 */
function Header({ title = 'CSS Modules', subtitle = 'Scoped styles in React', sticky = false }) {
  return (
    <header className={`${styles.header} ${sticky ? styles.sticky : ''}`}>
      <div className={styles.inner}>
        {/* Logo mark */}
        <div className={styles.logo}>
          <span className={styles.logoIcon}>◈</span>
          <span className={styles.logoText}>ModuleKit</span>
        </div>

        {/* Center text */}
        <div className={styles.center}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {/* Nav links */}
        <nav className={styles.nav}>
          <a href="#components" className={styles.navLink}>Components</a>
          <a href="#docs" className={styles.navLink}>Docs</a>
          <a href="#github" className={styles.navLinkAccent}>GitHub ↗</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
