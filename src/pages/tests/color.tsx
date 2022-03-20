import * as React from 'react';
import { motion } from 'framer-motion';
import { IVials } from '@/lib/types';
import { vials } from '@/lib/data/vials';
import styles from '@/styles/pages/Math.module.scss';


const Color = () => {
  const [currentState, setCurrentState] = React.useState(1);
  const [selected, setSelected] = React.useState(0); // Default to nothing selected (0)
  const [step, setStep] = React.useState(vials[0]);  // Initial state should equal vials
  const colors = ['#FFFFFF', '#00568D', '#51BA5D'];

  const vialVariants = {
    opened: { translateY: -10, scale: 1.15 },
    closed: { translateY: 50, scale: 1.0 }
  };

  const [bpr, setBpr] = React.useState([]);

  const fetchData = async () => {
    var endpoint = 'http://localhost:3000/api/vial-state/' + {currentState};
    const response = await fetch('http://localhost:3000/api/vial-state/');
    const data = await response.json();

    // Testing response output:
    // console.log(data);
    console.log(data);

    setBpr(data);
  };

  const updateState = (prev, vial) => {
    if (prev == step.next[0] && vial.id == step.next[1]) {
      let nextStep = currentState + 1;
      setStep(vials[nextStep]);
      console.log('Moving onto the next step!')
      setSelected(0);

    } else if (prev == 0 && vial.statuses[0] != 0) {
      setSelected(vial.id);

    } else if (prev != 0 && vial.statuses[0] < 5 ) {
      console.log('this is where you should update the \n slots for the vial you selected as your second (move-to) vial.')

      // var c1 = vial.status[1] - 1;

    } else if (prev != 0 && vial.statuses[0] == 0) {
      setSelected(0);

    } else if (prev == vial.id) {
      setSelected(0);

    } else {
      setSelected(0);
      console.log('You must first select a vial containing at least one colored slot \nthen your second selection must be a vial with at least one empty \nslot and the first filled slot must match the color.');
      return;
    }
    return step;
  }

  React.useEffect(() => {
    console.log('Currently selected: ', selected);
    console.log('Current vial values: ', step);
  }, [selected, step]);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>

        {/*  */}
        {step.vials.map((vial: IVials) => (
          <motion.div
            key={vial.id}
            className={styles.vial}
            initial={false}
            variants={vialVariants}
            animate={vial.id == selected ? 'opened' : 'closed'}
            onClick={() => { updateState(selected, vial) }}
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

export default Color;
