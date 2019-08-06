import React from 'react';
import useGlobal from '../store';
import styles from './TreeView.module.css';

const TreeItem = ({item}) => {
   const [, setCurrent] = useGlobal('currentElementId');
   const children = item.children;
   if (item.type === 'div') {
      const handleClick = (event, id) => {
         event.stopPropagation();
         setCurrent(id);
      }
      return (
         <div className={styles.domItem} key={item.id} onClick={(e) => handleClick(e, item.id)}>
            <div>view</div>
            {children.length > 0 && children.map(child =>
               <TreeItem item={child}/>
            )}
         </div>
      )
   }
   return (
      <div className={styles.domItem} key={item.id}>
         {children}
      </div>
   )
}

const TreeView = () => {
   const [elements] = useGlobal('elements');
   return (
      <div className={styles.root}>
         <h3>DOM tree:</h3>
         <TreeItem item={elements}/>
      </div>
   )
};

export default TreeView;