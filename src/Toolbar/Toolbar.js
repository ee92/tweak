import React, {useState} from 'react';
import styles from './Toolbar.module.css'

const Adjust = ({property, value}) => {
   const [val, setVal] = useState(value);
   return (
      <div>
         <div>{property}</div>
         <button onClick={() => setVal(val - 1)}>-</button>
         <button onClick={() => setVal(val + 1)}>+</button>
         <span>{val}</span>
      </div>
   )
}

const Toolbar = () => {
   return (
      <div className={styles.root}>
         <h3>tools</h3>
         <Adjust property="width" value={100}/>
      </div>
   )
};

export default Toolbar;