import * as React from 'react';
import { motion } from 'framer-motion';
import { IVials } from '@/lib/types';
import styles from '@/styles/pages/Test.module.scss';


export default function Tests() {
  const vialVariants = {
    opened: { translateY: -10, scale: 1.15 },
    closed: { translateY: 50, scale: 1.0 }
  };

  const [currentState, setCurrentState] = React.useState<Number>(3);
  const [selected, setSelected] = React.useState(0);
  const [vialData, setVialData] = React.useState([]);

  const colors = ['#FFFFFF', '#00568D', '#51BA5D'];


  const fetchData = async (state) => {
    var endpoint = `http://localhost:3000/api/vial-state/${state}`;
    const response = await fetch(endpoint);
    const data = await response.json();

    setVialData(data);
  };


  React.useEffect(() => {
    if (currentState != undefined) {
      fetchData(currentState);
      console.log(vialData);
    } else {}
  }, [currentState]);


  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
      {((vial: IVials) => (
          <motion.div
            key={vial.id}
            className={styles.vial}
            initial={false}
            variants={vialVariants}
            animate={vial.id == selected ? 'opened' : 'closed'}
            onClick={() => {}}
          >
            {/* 1st slot */}
            <motion.div
              className={styles.box}
              style={{
                backgroundColor: colors[vial.slots[0]]
              }}
            />
            {/* 2nd slot */}
            <motion.div
              className={styles.box}
              style={{
                backgroundColor: colors[vial.slots[1]]
              }}
            />
            {/* 3rd slot */}
            <motion.div
              className={styles.box}
              style={{
                backgroundColor: colors[vial.slots[2]]
              }}
            />
            {/* 4th slot */}
            <motion.div
              className={styles.box}
              style={{
                backgroundColor: colors[vial.slots[3]]
              }}
            />
            {/* 5th slot */}
            <motion.div
              className={styles.box}
              style={{
                backgroundColor: colors[vial.slots[4]]
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
};
