import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/ColorSort.module.scss';

const Test = () => {
  const colors = ['#FFFFFF', '#6D57EA', '#D62839'];
  const initial = [[1, 2, 1, 1, 2], [2, 1, 2, 1, 2], [0, 0, 0, 0, 0]];

  const vialVariants = {
    opened: { translateY: -10, scale: 1.15 },
    closed: { translateY: 50, scale: 1.0 }
  };

  const [selectedF, setSelectedF] = useState(0);    // Default to nothing selected 
  const [selectedS, setSelectedS] = useState(0);    // 
  const [selectable, setSelectable] = useState([0, 1]);
  // const [alrt, setAlrt] = useState(0);

  const [entries, setEntries] = useState([
    initial[0], initial[1], initial[2]
  ]);

  const [col1, setCol1] = useState(initial[0]);
  const [col2, setCol2] = useState(initial[1]);
  const [col3, setCol3] = useState(initial[2]);

  const [winner, setWinner] = useState();


  // Define winning conditions
  const checkForWinner = (squares) => {
    let combos = {
      combo1: [[2, 2, 2, 2, 2], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1]],
    };

    if (squares[0] == combos[0] && squares[1] == combos[1] && squares[2] == combos[2]) {

    }

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === '' &&
          squares[pattern[1]] === '' &&
          squares[pattern[2]] === ''
        ) {
          // Do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          // setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  /*
    Need to monitor for each column vector:
  - (nz) What is the first entry in the vial &
  - (lv) What entry away from the top is it? 
  */
  const handleClick = (prev, current) => {
    if (prev == current) {
      // alert('alert!');
      setSelectedF(0);
      return;
    }

    if (prev != current && prev == 0) {
      setSelectedF(current);
    } else {
      return
    }
    // let top1 = entries[num][]
    let squares = [...entries];

    checkForWinner(squares);
    setEntries(squares);
  };

  const handleRestart = () => {
    setWinner(null);
    setEntries(Array(15).fill(initial));
  };

  useEffect(() => {
    console.log('\n', 'Currently selected: ', selectedF);
    console.log('\n', 'Current vial values: ', entries);
    console.log('\n')
    console.log(entries[0][3])

  }, [selectedF, entries])

  return (
    <motion.div className={styles.container} layout>

      {/* Display that the user won */}
      {winner && (
        <>
          <h2 className='uk-text-lead'>
            Congrats! You completed this level!
          </h2>
          <button className='uk-button uk-button-primary' onClick={() => handleRestart()}>
            Next level
          </button>
        </>
      )}

      <motion.div className={styles.grid}>

        {/* Vial 1 */}
        <motion.div
          id='vial1'
          className={styles.vial1}
          variants={vialVariants}
          initial={false}
          animate={selectedF == 1 ? 'opened' : 'closed'}
          onClick={() => handleClick(selectedF, 1)}
        >
          {col1.map((entry, i) => (
            <div key={i} className={styles.box} style={{ backgroundColor: colors[entry] }} />
          ))}
        </motion.div>

        {/* Vial 2 */}
        <motion.div
          id='vial2'
          className={styles.vial2}
          variants={vialVariants}
          initial={false}
          animate={selectedF == 2 ? 'opened' : 'closed'}
          onClick={() => handleClick(selectedF, 2)}
        >
          {col2.map((entry, i) => (
            <div key={i + 5} className={styles.box} style={{ backgroundColor: colors[entry] }} />
          ))}
        </motion.div>

        {/* Vial 3 */}
        <motion.div
          id='vial3'
          className={styles.vial3}
          variants={vialVariants}
          initial={false}
          animate={selectedF == 3 ? 'opened' : 'closed'}
          onClick={() => handleClick(selectedF, 3)}
        >
          {col3.map((entry, i) => (
            <div key={i + 10} className={styles.box} style={{ backgroundColor: colors[entry] }} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export default Test;
