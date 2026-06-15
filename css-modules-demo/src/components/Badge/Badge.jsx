import styles from './Badge.module.css';

/**
 * Badge Component — small label pill
 *
 * Props:
 *  - color: 'purple' | 'green' | 'red' | 'yellow' | 'blue' | 'gray'
 *  - dot: boolean — show a pulsing dot (useful for "live" status)
 *  - children: string
 */
function Badge({ color = 'purple', dot = false, children }) {
  return (
    <span className={`${styles.badge} ${styles[color]}`}>
      {dot && <span className={styles.dot} />}
      {children}
    </span>
  );
}

export default Badge;
