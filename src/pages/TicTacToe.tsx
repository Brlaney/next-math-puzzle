import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/TicTacToe.module.scss';

const TicTacToe = () => {
  const colors = ['#D62839', '#6D57EA'];

  const gameVariants = {
    opened: { translateY: -10, scale: 1.15 },
    closed: { translateY: 50, scale: 1.0 }
  };

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        
      </motion.div>
    </motion.div>
  )
};

export default TicTacToe;
