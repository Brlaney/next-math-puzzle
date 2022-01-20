import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IVials } from '@/lib/types';
import { vials } from '@/lib/data/game';
import Box from '@/components/Box';
import styles from '@/styles/pages/Math.module.scss';

const Math = () => {
  const [selected, setSelected] = useState(0);    // Default to nothing selected (0)
  const [columns, setColumns] = useState(vials);  // Initial state should equal vials
  const nslots = vials.length * 5;                // Num vials * 5 = num of total slots
  const colors = ['#FFFFFF', '#00568D', '#51BA5D'];

  const vialVariants = {
    opened: { translateY: -10, scale: 1.15 },
    closed: { translateY: 50, scale: 1.0 }
  };

  let v1 = columns[0];
  let v2 = columns[1];
  let v3 = columns[2];

  const updateState = (prev, vial) => {
    if (prev == 0 && vial.status[0] != 0) {
      setSelected(vial.id);
    } else if (prev != 0 && vial.status[0] == 0) {
      console.log('this is where you should update the \n slots for the vial you selected as your second (move-to) vial.')
    } else if (prev != 0 && vial.status[0] == 0) {

      setSelected(0);
    } else if (prev == vial.id) {
      setSelected(0);
    } else {
      setSelected(vial.id);
    }
    return vials;
  }

  useEffect(() => {
    console.log('\n', 'Currently selected: ', selected);
    console.log('\n', 'Current vial values: ', columns);
  }, [selected, columns]);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>

        {columns.map((column: IVials) => (
          <motion.div
            key={column.id}
            className={styles.vial}
            initial={false}
            variants={vialVariants}
            animate={column.id == selected && column.disabled == undefined ? 'opened' : 'closed'}
            onClick={() => { updateState(selected, column) }}
          >
            {column.slots.map((slot, i) => (
              <motion.div
                key={i}
                className={styles.box}
                style={{
                  backgroundColor: colors[slot]
                }}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
};

export default Math;
