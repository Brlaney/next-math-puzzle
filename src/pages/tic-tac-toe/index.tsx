import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/TicTacToe.module.scss';

const TicTacToe = () => {
  // const colors = ['#D62839', '#6D57EA'];
  const [turn, setTurn] = useState('x');
  const [cells, setCells] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState();

  const gameVariants = {
    opened: { translateY: -10, scale: 1.15 },
    closed: { translateY: 50, scale: 1.0 }
  };

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
      alert('You must select an empty cell.');
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
    return (
      <td onClick={() => handleClick(num)}>
        {cells[num]}
      </td>
    );
  };

  return (
    <motion.div className={styles.container}>
      {winner && (
        <>
          <h2 className='uk-text-lead'>
            {winner} is the winner!
          </h2>
          <button
            className='uk-button uk-button-primary'
            onClick={() => handleRestart()}
          >
            Play again
          </button>
        </>
      )}
      <motion.div className={styles.grid}>
        <table className='uk-table'>
          <caption id={styles.turn}>
            Turn: {turn}
          </caption>
          <tbody>
            <tr>
              <Cell num={0} />
              <Cell num={1} />
              <Cell num={2} />
            </tr>
            <tr>
              <Cell num={3} />
              <Cell num={4} />
              <Cell num={5} />
            </tr>
            <tr>
              <Cell num={6} />
              <Cell num={7} />
              <Cell num={8} />
            </tr>
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  )
};

export default TicTacToe;
