import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Test.module.scss';


const Two = () => {
  const [emps, setEmps] = useState([
    { id: 1, name: 'Raja', experience: '10+ Years' },
    { id: 2, name: 'Mano', experience: '2 Years' },
    { id: 3, name: 'Tom', experience: '5+ Years' },
  ]);

  // Create
  const addRow = () => {
    let newEmp = {
      id: 4,
      name: 'Random User1',
      experience: '6 Years'
    }
    setEmps([...emps, newEmp])
  };

  // Update
  const updateRow = (index) => {
    let newEmp = emps[index]
    newEmp['name'] = 'Modfied User';
    emps[index] = newEmp
    setEmps([...emps])
  };

  // Delete
  const deleteRow = () => {
    //let name='Mano'
    //setEmps(emps.filter(emp => emp.name !== name))
    let copy_emp = [...emps]
    copy_emp.splice(0, 1)
    setEmps(copy_emp)
  };

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>

        {/* Read & display the data */}
        {emps.map((emp, index) => (
          <motion.div className={styles.entry} key={index}>
            <h3 className='uk-text-lead uk-header-small'>
              {emp.name}
            </h3>
            <p className={styles.paragraph}>{emp.experience}</p>
            <button
              className='uk-button uk-button-primary uk-width-1-1'
              onClick={() => updateRow(index)}
            >
              Update
            </button>
            <button
              className='uk-button uk-button-danger uk-width-1-1'
              onClick={() => updateRow(index)}
            >
              Delete
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
};

export default Two;
