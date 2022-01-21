import Link from 'next/link';
import styles from '@/styles/components/Card.module.scss';

const: Card = (name) {
  return (
    <div className={styles.card}>
      <h1>
        {name}
      </h1>
    </div>
  )
};
