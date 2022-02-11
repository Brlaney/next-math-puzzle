import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Test.module.scss';

const Two = () => {
  // const colors = ['#FFFFFF', '#6D57EA', '#D62839'];
  // const initial = [[1, 2, 1, 1, 2], [2, 1, 2, 1, 2], [0, 0, 0, 0, 0]];
  const [emps, setEmps] = useState([
    { name: 'Raja', experience: '10+ Years' },
    { name: 'Mano', experience: '2 Years' },
    { name: 'Tom', experience: '5+ Years' },
  ]);

  const updateRow = (index) => {
    let newEmp = emps[index]
    newEmp['name'] = 'Modfied User';
    emps[index] = newEmp
    setEmps([...emps])
  };

  return (
    <motion.div className={styles.container} layout>
      <motion.div className={styles.grid}>

        {emps.map((emp, index) => (
          <motion.div className={styles.entry} key={index}>
            <h3 className='uk-text-lead uk-header-small'>
              {emp.name}
            </h3>
            <p className={styles.paragraph}>{emp.experience}</p>
            <button
              className='uk-button uk-button-primary uk-width-1-1'
              onClick={() => updateRow(index)}
            >
              Update
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
};

export default Two;
