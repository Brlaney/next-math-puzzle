import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IVialState, IVials } from '@/lib/types';
import { steps } from '@/lib/data/tests';
import styles from '@/styles/pages/Math.module.scss';


const ColorTest = () => {
  const [selected, setSelected] = useState(0);    // Default to nothing selected (0)
  const [step, setStep] = useState(steps[0]);  // Initial state should equal vials
  const colors = ['#FFFFFF', '#00568D', '#51BA5D'];

  const vialVariants = {
    opened: { translateY: -10, scale: 1.15 },
    closed: { translateY: 50, scale: 1.0 }
  };

  const updateState = (prev, vial) => {
    if (prev == step.next[0] && vial.id == step.next[1]) {
      setStep(steps[+1])
    
    } else if (prev == 0 && vial.status[0] != 0) {
      setSelected(vial.id);

    } else if (prev != 0 && vial.status[0] == 0) {
      console.log('this is where you should update the \n slots for the vial you selected as your second (move-to) vial.')

      // var c1 = vial.status[1] - 1;
    
    } else if (prev != 0 && vial.status[0] == 0) {
      setSelected(0);
    
    } else if (prev == vial.id) {
      setSelected(0);
    
    } else {
      // setSelected(vial.id);
      return;
    }
    return step;
  }

  useEffect(() => {
    console.log('\n', 'Currently selected: ', selected);
    console.log('\n', 'Current vial values: ', step);
  }, [selected, step]);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>

        {step.vials.map((vial: IVials) => (
          <motion.div
            key={vial.id}
            className={styles.vial}
            initial={false}
            variants={vialVariants}
            animate={vial.id == selected ? 'opened' : 'closed'}
            onClick={() => { updateState(selected, vial) }}
          >
            {vial.slots.map((slot, i) => (
              <motion.div
                key={i}
                className={styles.box}
                style={{
                  backgroundColor: colors[slot[i]]
                }}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
};

export default ColorTest;
