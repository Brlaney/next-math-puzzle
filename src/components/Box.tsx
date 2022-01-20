import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/Box.module.scss';

const Box = (color, keyIndex) => {
  return (
    <div
      key={keyIndex}
      className={styles.box}
      style={{
        backgroundColor: color
      }}
    />
  )
};

export default Box;
