import { atom, useRecoilCallback, useRecoilState } from 'recoil';

const counterState = atom({
    key: 'counter',
    default: 0,
})

export const useCounter = () => {

    const [count,] = useRecoilState(counterState);

    const onClickMinus = useRecoilCallback(
        ({ set }) => async () => {
            //      const count = await snapshot.getPromise(counterState);
            set(counterState, (val) => val - 1);
        }, []);

    const onClickPlus = useRecoilCallback(
        ({ set }) => async () => {
            set(counterState, (val) => val + 1)
        }
        , [])

    return [count, { Minus: onClickMinus, Plus: onClickPlus }] as const
}
