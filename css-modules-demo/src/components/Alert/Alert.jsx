import { useState } from 'react';
import styles from './Alert.module.css';

/**
 * Alert Component
 *
 * Props:
 *  - type: 'info' | 'success' | 'warning' | 'error'
 *  - title: string
 *  - children: ReactNode (message body)
 *  - dismissible: boolean
 */
const ICONS = {
  info:    'ℹ️',
  success: '✅',
  warning: '⚠️',
  error:   '❌',
};

function Alert({ type = 'info', title, children, dismissible = false }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={`${styles.alert} ${styles[type]}`} role="alert">
      <span className={styles.icon}>{ICONS[type]}</span>

      <div className={styles.content}>
        {title && <strong className={styles.title}>{title}</strong>}
        <p className={styles.message}>{children}</p>
      </div>

      {dismissible && (
        <button
          className={styles.closeBtn}
          onClick={() => setVisible(false)}
          aria-label="Dismiss"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default Alert;

