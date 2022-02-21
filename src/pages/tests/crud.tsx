import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Test.module.scss';


const Crud = () => {
  const newName = useRef<HTMLInputElement>(null);

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
  const deleteRow = (name) => {
    setEmps(emps.filter(emp => emp.name !== name))
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
            <motion.h3 className='uk-text-lead uk-header-small'>
              {emp.name}
            </motion.h3>
            <p className={styles.paragraph}>
              Experience: <span className={styles.span}>{emp.experience}</span>
            </p>
            <motion.div className={styles.buttons}>
              <button
                className='uk-button uk-button-primary uk-width-1-1'
                onClick={() => updateRow(index)}
              >
                Update
              </button>
              <button
                className='uk-button uk-button-danger uk-width-1-1'
                onClick={() => deleteRow({ emp })}
              >
                Delete
              </button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className={styles.below}>
        <div className={styles.row1}>
          <input
            className='uk-range'
            type='range'
            value='2'
            min='0'
            max='10'
            step='0.1'
          />
        </div>
        <div className={styles.row2}>
          <input
            className='uk-input uk-width-1-3'
            type='text'
            placeholder='Name'
            ref={newName}
          />
          <button
            className='uk-button uk-button-secondary'
            onClick={() => addRow()}
          >
            Add entry
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
};

export default Crud;
