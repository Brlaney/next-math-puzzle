import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IVials } from '@/lib/types';
import { vials } from '@/lib/data/game';
import Box from '@/components/Box';
import styles from '@/styles/pages/Math.module.scss';

const colors = ['#FFFFFF', '#00568D', '#51BA5D'];

const Math = () => {
  const [selected, setSelected] = useState(0);    // Default to nothing selected (0)
  const [columns, setColumns] = useState(vials);  // Initial state should equal vials
  const nslots = vials.length * 5;                // Num vials * 5 = num of total slots

  const vialVariants = {
    opened: { translateY: -10, scale: 1.15 },
    closed: { translateY: 50, scale: 1.0 }
  };

  // This function will take in the id of 
  // the first and second selected vials.
  const updateVials = (first, second) => {
    const vial1 = columns[first];
    const vial2 = columns[second];
  }
  
  const getTopEntry = (matrix) => {
    let done = false;

    matrix.forEach(v => {
      if (done) {
        return;
      }
      if (v != 0) {
        done = true;
        return;
      }
      console.log(v)
    })
  }

  const test1 = vials[0];
  const slots1 = test1.slots;
  console.log(slots1);
  // const testValue = getTopEntry(slots1);

  const updateState = (prev, vial) => {
    if (prev != 0 && vials[vial - 1].status[0] == 0) {
      var firstVial = vials[prev - 1];
      var secondVial = vials[vial - 1];
      var entry = secondVial.status[1] - 1;
      var newEntry = firstVial.status[1];

      vials[vial - 1].slots[entry] == vials[prev - 1].slots[newEntry];
      vials[prev - 1].slots[newEntry] == newEntry;

      setSelected(0);
    } else {
      setSelected(vial);
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

        {columns.map((vial: IVials) => (
          <motion.div
            key={vial.id}
            className={styles.vial}
            initial={false}
            variants={vialVariants}
            animate={vial.id == selected ? 'opened' : 'closed'}
            onClick={() => { updateState(selected, vial.id) }}
          >
            {vial.slots.map((slot, i) => (
              <Box
                key={i}
                color=colors[i]
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
};

export default Math;
