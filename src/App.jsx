import React, { useState } from 'react';
import Draggable from './components/Draggable';
import './App.css';

const App = () => {
  const [parents, setParents] = useState([]);

  const addParent = () => {
    setParents([...parents, <Draggable key={parents.length} />]);
  };

  const renderNestedParents = (components) => {
    if (components.length === 0) {
      return <Draggable />;
    }

    const [first, ...rest] = components;
    return React.cloneElement(first, {
      children: renderNestedParents(rest),
    });
  };

  return (
    <div className="app">
      <button onClick={addParent}>Add Parent</button>
      {renderNestedParents(parents)}
    </div>
  );
};

export default App;
