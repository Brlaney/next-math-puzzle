import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Home.module.scss';

const Home = () => {
  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        Games
      </motion.div>
    </motion.div>
  )
};

export default Home;
