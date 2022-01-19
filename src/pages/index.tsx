import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IVials } from '@/lib/types';
import { vials } from '@/lib/data/game';
import styles from '@/styles/pages/Math.module.scss';

// import combos from '@/lib/utils/math/combos';
// import permute from '@/lib/utils/math/permute';

const colors = ['#FFFFFF', '#00568D', '#51BA5D'];

const Math = () => {
  const [selected, setSelected] = useState(0);

  const vialVariants = {
    opened: { translateY: -10, scale: 1.15 },
    closed: { translateY: 50, scale: 1.0 }
  };

  /*
  const input1 = ['a', 'b', 'c'];
  const output1 = combos(input1);
  const input2 = [1, 2, 3];
  const output2 = permute(input1);

  console.log("Combinations");
  console.log("Input: ", input1);
  console.log("\n", "Output: ", output1);

  console.log("Permuations");
  console.log("Input: ", input1);
  console.log("\n", "Output: ", output2);
  */

  function Rearrange(vial) {
    var currentVial = vials[vial.id - 1];
    var fullSlots = currentVial.status[0];
    var emptySlots = currentVial.status[1];


  }

  const updateState = (prev, vial) => {
    if (prev != 0 && vials[vial - 1].status[0] == 0) {

      // These are used to match the desired array entrys
      var firstVial = vials[prev - 1];
      var secondVial = vials[vial - 1];

      // The entry slot that will be updated
      var entry = secondVial.status[1] - 1;

      // The entry slot containing the new value
      var newEntry = firstVial.status[1];

      // Update the second clicked vials entry
      vials[vial - 1].slots[entry] == vials[prev - 1].slots[newEntry];

      // Update the first clicked vials entry with a blank block
      vials[prev - 1].slots[newEntry] == newEntry;

      setSelected(0);
    } else {
      setSelected(vial);
    }
    return vials;
  }

  useEffect(() => {
    console.log('Currently selected: ', selected);
    console.log('\n');
    console.log('Current vial values: ', vials);
  }, [selected, vials]);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>

        {vials.map((vial: IVials) => (
          <motion.div
            key={vial.id}
            className={styles.vial}
            initial={false}
            variants={vialVariants}
            animate={vial.id == selected ? 'opened' : 'closed'}
            onClick={() => { updateState(selected, vial.id) }}
          >
            {vial.slots.map((slot, i) => (
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
