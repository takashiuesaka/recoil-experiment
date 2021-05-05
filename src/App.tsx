import React, { useCallback, useState } from 'react';
import { atom, useRecoilCallback, useRecoilState } from 'recoil';
// import logo from './logo.svg';
// import './App.css';
import { useCounter } from './CounterState'

// const counterState = atom({
//   key: 'counter',
//   default: 0,
// })

// const useCounter = () => {

//   const [count,] = useRecoilState(counterState);

//   const onClickMinus = useRecoilCallback(
//     ({ set }) => async () => {
//       //      const count = await snapshot.getPromise(counterState);
//       set(counterState, (val) => val - 1);
//     }, []);

//   const onClickPlus = useRecoilCallback(
//     ({ set }) => async () => {
//       set(counterState, (val) => val + 1)
//     }
//     , [])

//   return [count, { Minus: onClickMinus, Plus: onClickPlus }] as const
// }


function App() {

  const [count, onClick] = useCounter();

  return (
    <div>
      <button onClick={onClick.Minus}>-</button> {count} <button onClick={onClick.Plus}>+</button>
    </div>
  );
}

export default App;
