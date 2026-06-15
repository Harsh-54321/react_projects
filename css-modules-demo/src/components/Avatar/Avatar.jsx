import styles from './Avatar.module.css';

/**
 * Avatar Component
 *
 * Props:
 *  - src: string (image URL) — if missing, shows initials
 *  - name: string — used for alt text and initials fallback
 *  - size: 'sm' | 'md' | 'lg'
 *  - status: 'online' | 'offline' | 'busy' | null
 */
function Avatar({ src, name = 'User', size = 'md', status = null }) {
  // Build initials from the name (e.g. "John Doe" → "JD")
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className={`${styles.wrapper} ${styles[size]}`}>
      {src ? (
        <img src={src} alt={name} className={styles.image} />
      ) : (
        <div className={styles.fallback}>{initials}</div>
      )}

      {status && (
        <span className={`${styles.statusDot} ${styles[status]}`} title={status} />
      )}
    </div>
  );
}

export default Avatar;
