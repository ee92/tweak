import React from 'react';
import TreeView from '../TreeView';
import Canvas from '../Canvas';
import Toolbar from '../Toolbar';
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.root}>
      <TreeView/>
      <Canvas/>
      <Toolbar/>
    </div>
  );
}

export default App;
