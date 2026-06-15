import styles from './Button.module.css';

/**
 * Button Component
 *
 * Props:
 *  - variant: 'primary' | 'secondary' | 'danger' | 'ghost'
 *  - size: 'sm' | 'md' | 'lg'
 *  - disabled: boolean
 *  - onClick: function
 *  - children: ReactNode
 */
function Button({ variant = 'primary', size = 'md', disabled = false, onClick, children }) {
  // CSS Modules: combine multiple classes using an array + join
  const className = [
    styles.button,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
