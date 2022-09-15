import React, {useState} from 'react';
import s from './Counter.module.scss'

export const Counter = () => {
    const [value, setValue] = useState(0)

    const inc = () => {
        setValue(value + 1)
    }
    const dec = () => {
        setValue(value - 1)
    }

    return (
        <div className={s.btn}>
            <h1>{value}</h1>
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
        </div>
    );
};
