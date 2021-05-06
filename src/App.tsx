import React from 'react';
import { useCounterType } from './CounterState'

function App(props: { useCounter?: useCounterType }) {

  const [count, onClick] = props?.useCounter == undefined;

  return (
    <div>
      <button onClick={onClick.Minus}>-</button> {count} <button onClick={onClick.Plus}>+</button>
    </div>
  );
}

export default App;
