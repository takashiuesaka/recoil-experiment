import { useCallback, useState } from 'react';
import { atom, useRecoilCallback, useRecoilState } from 'recoil';

const counterState = atom({
    key: 'counter',
    default: 0,
})

export const useCounter = (isGlobal: boolean) => {

    const [globalCount,] = useRecoilState(counterState);
    const [localCount, setLocalCount] = useState(0);

    const onClickGlobalMinus = useRecoilCallback(
        ({ set }) => async () => {
            //      const count = await snapshot.getPromise(counterState);
            set(counterState, (val) => val - 1);
        }, []);

    const onClickGlobalPlus = useRecoilCallback(
        ({ set }) => async () => {
            set(counterState, (val) => val + 1)
        }
        , [])

    const onClickLocalMinus = useCallback(() => {
        setLocalCount(val => val - 1);
    }, []);

    const onClickLocalPlus = useCallback(() => {
        setLocalCount(val => val - 1);
    }, []);

    return [isGlobal ? globalCount : localCount, { Minus: isGlobal ? onClickGlobalMinus : onClickLocalMinus, Plus: isGlobal ? onClickGlobalPlus : onClickLocalPlus }] as const
}
