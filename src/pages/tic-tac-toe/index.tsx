import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/TicTacToe.module.scss';

const TicTacToe = () => {
  // const colors = ['#D62839', '#6D57EA'];
  const [turn, setTurn] = useState('x');
  const [alrt, setAlrt] = useState(0);
  const [cells, setCells] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState();

  const checkForWinner = (squares) => {
    // Define every possible condition that wins tic-tac-toe
    let combos = {
      across: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
      down: [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
      diagonal: [[0, 4, 8], [2, 4, 6]]
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
    if (cells[num] !== '') {
      setAlrt(1);
      return;
    }
    let squares = [...cells];

    if (turn === 'x') {
      squares[num] = 'x';
      setTurn('o');
    } else {
      squares[num] = 'o';
      setTurn('x');
    }
    checkForWinner(squares);
    setCells(squares);
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(''));
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
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
      {alrt > 0 && (
        <div className='uk-alert-danger uk-width-1-1' uk-alert>
          <a className='uk-alert-close' />
          <p className='uk-text-center uk-margin-top'>You must select an empty cell.</p>
        </div>
      )}
      {winner && (
        <>
          <h2 className='uk-text-lead'>
            {winner} is the winner!
          </h2>
          <button className='uk-button uk-button-primary' onClick={() => handleRestart()}>
            Play again
          </button>
        </>
      )}
      <motion.div className={styles.grid}>
        <table className='uk-table'>
          <caption id={styles.turn}>Current player: <span className={styles.emphasis}>{turn}</span></caption>
          <tbody>
            <tr><Cell num={0} /><Cell num={1} /><Cell num={2} /></tr>
            <tr><Cell num={3} /><Cell num={4} /><Cell num={5} /></tr>
            <tr><Cell num={6} /><Cell num={7} /><Cell num={8} /></tr>
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  )
};

export default TicTacToe;
