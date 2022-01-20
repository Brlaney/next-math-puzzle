import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/Box.module.scss';

const Box = (key, value) => {
  const colors = ['#FFFFFF', '#00568D', '#51BA5D'];
  let display = colors[key];

  return (
    <div
      className={styles.box}
      style={{
        backgroundColor: '#00568D'
      }}
    />
  )
};

export default Box;
