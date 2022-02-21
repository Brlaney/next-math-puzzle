import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Test.module.scss';


export default function Reynolds() {
  const [params, setParams] = React.useState({
    d: 0.0,     // density
    v: 0.0,     // velocity
    L: 0.0,     // char. length
    mu: 0.0,    // dyn viscosity
    rou: 0.0,   // kin viscosity
  });

  const updateState = (p, value) => {
    let newParams = params[p]
    newParams[p] = value;
    params[p] = newParams;
    setParams([...params])
  };

  React.useEffect(() => {

  }, []);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        <form className={styles.form}>
          <input
            className='uk-input uk-width-1-3'
            type='number'
            placeholder='Density'
            value={params.d}
          />
          <input
            className='uk-input uk-width-1-3'
            type='number'
            placeholder='Velocity'
            name='velocity'
            value={params.v}
          />
          <input
            className='uk-input uk-width-1-3'
            type='number'
            placeholder='Characteristic linear dimension'
            name='characteristic length'
            value={params.L}
          />
          <input
            className='uk-input uk-width-1-3'
            type='number'
            placeholder='Dynamic viscosity of the fluid'
            name='dynamic viscosity'
            value={params.mu}
          />
          <input
            className='uk-input uk-width-1-3'
            type='number'
            placeholder='Kinematic viscosity of the fluid'
            name='kinematic viscosity'
            value={params.rou}
          />
          <button
            className='uk-button uk-button-secondary'
            onClick={() => updateState()}
          >
            Calculate Reynolds Number
          </button>
        </form>
      </motion.div>
    </motion.div>
  )
};
