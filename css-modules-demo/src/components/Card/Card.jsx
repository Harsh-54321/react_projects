import styles from './Card.module.css';

/**
 * Card Component
 *
 * Props:
 *  - title: string
 *  - description: string
 *  - image: string (URL)
 *  - footer: ReactNode
 *  - elevated: boolean  — extra shadow on hover
 *  - horizontal: boolean — side-by-side layout
 */
function Card({ title, description, image, footer, elevated = false, horizontal = false }) {
  const cardClass = [
    styles.card,
    elevated   ? styles.elevated   : '',
    horizontal ? styles.horizontal : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={cardClass}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}

      <div className={styles.body}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {description && <p className={styles.description}>{description}</p>}
      </div>

      {footer && <div className={styles.footer}>{footer}</div>}
    </article>
  );
}

export default Card;
