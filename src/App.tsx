import React from 'react';
import { useLocalCounter, useGlobalCounter } from './CounterState'

function App(props: { isGlobal?: boolean }) {

  const [globalCount, onGlobalClick] = useGlobalCounter();
  const [localCount, onLocalClick] = useLocalCounter();

  return (
    <div>
      <button onClick={props.isGlobal ? onGlobalClick.Minus : onLocalClick.Minus}>-</button> {props.isGlobal ? globalCount : localCount} <button onClick={props.isGlobal ? onGlobalClick.Plus : onLocalClick.Plus}>+</button>
    </div>
  );
}

export default App;
