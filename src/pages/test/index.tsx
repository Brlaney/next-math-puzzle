import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/ColorSort.module.scss';


const Test = () => {
  // Constants
  const colors = ['#FFFFFF', '#6D57EA', '#D62839'];
  const initial = [[1, 2, 1, 1, 2], [2, 1, 2, 1, 2], [0, 0, 0, 0, 0]];

  // State variables
  const [turn, setTurn] = useState('x');
  const [alrt, setAlrt] = useState(0);

  // const [entries, setEntries] = useState(initial);
  const [entries, setEntries] = useState([
    initial[0], initial[1], initial[2]
  ]);

  const [col1, setCol1] = useState(initial[0]);
  const [col2, setCol2] = useState(initial[1]);
  const [col3, setCol3] = useState(initial[2]);

  const [winner, setWinner] = useState();

  // Define winning conditions
  const checkForWinner = (squares) => {
    // If all entries in col1, col2, and col3 are equal, i.e.:
    // [[1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [0, 0, 0, 0, 0]]
    let combos = {
      c1: [[1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [0, 0, 0, 0, 0]],
      c2: [[1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [2, 2, 2, 2, 2]],
      c3: [[2, 2, 2, 2, 2], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0]],
      c4: [[2, 2, 2, 2, 2], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1]],
      c5: [[0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [2, 2, 2, 2, 2]],
      c6: [[0, 0, 0, 0, 0], [2, 2, 2, 2, 2], [1, 1, 1, 1, 1]],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === '' ||
          squares[pattern[1]] === '' ||
          squares[pattern[2]] === ''
        ) {
          // Do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num) => {
    if (entries[num] !== '') {
      setAlrt(1);
      return;
    }
    let squares = [...entries];

    if (turn === 'x') {
      squares[num] = 'x';
      setTurn('o');
    } else {
      squares[num] = 'o';
      setTurn('x');
    }
    checkForWinner(squares);
    setEntries(squares);
  };

  const handleRestart = () => {
    setWinner(null);
    setEntries(Array(15).fill(initial));
  };

  const Entry = ({ num }) => {
    return (
      <div
        className={styles.box}
        style={{
          backgroundColor: colors[num]
        }}
        onClick={() => handleClick(num)}
      />
    )
  };

  useEffect(() => {
    if (alrt == 1) {
      setTimeout(() => {
        setAlrt(0);
      }, 5000);
    } else {
      // Do nothing
    }
  }, [alrt])

  return (
    <motion.div className={styles.container}>

      {/* Display alert */}
      {alrt > 0 && (
        <div className='uk-alert-danger uk-width-1-1' uk-alert>
          <a className='uk-alert-close' />
          <p className='uk-text-center uk-margin-top'>You cannot select an empty or full vial</p>
        </div>
      )}

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
        <motion.div className={styles.vial1}>
          {col1.map((entry, i) => (
            <><Entry key={i} num={entry} /></>
          ))}
        </motion.div>

        {/* Vial 2 */}
        <motion.div className={styles.vial2}>
          {col2.map((entry, i) => (
            <><Entry key={i} num={entry} /></>
          ))}
        </motion.div>

        {/* Vial 3 */}
        <motion.div className={styles.vial3}>
          {col3.map((entry, i) => (
            <><Entry key={i} num={entry} /></>
          ))}
        </motion.div>

      </motion.div>
    </motion.div>
  )
};

export default Test;
