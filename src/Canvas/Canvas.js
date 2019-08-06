import React from 'react';
import useGlobal from '../store';
import styles from './Canvas.module.css';

const DomItem = ({item}) => {
   const [current] = useGlobal('currentElementId');
   const children = item.children;
   if (item.type === 'div') {
      return (
         <div key={item.id} style={{border: current === item.id && '1px solid red'}}>
            {children.length > 0 && children.map(child =>
               <DomItem item={child}/>
            )}
         </div>
      )
   }
   return children;
}

const Canvas = () => {
   const [elements] = useGlobal('elements');
   return (
      <div className={styles.root}>
         <DomItem item={elements}/>
      </div>
   )
};

export default Canvas;