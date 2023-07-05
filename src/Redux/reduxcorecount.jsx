import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './reduxcore/counter';
import { nam } from './reduxcore/setname';

export default function Reduxcorecount() {
    const bienx = useSelector((getx) => getx.counter);
    const bienage = useSelector((getage) => getage.age);
    console.log(bienx, bienage);
    const [x, setX] = useState(0);
    const [age, setAge] = useState(1);
    const countdisatch = useDispatch();
    function ClickReduxcoreup() {
        setX((prev) => {
            return prev + 1;
        });
        countdisatch(increment(x));
    }
    function ClickReduxcoredown() {
        setX((prev) => {
            return prev - 1;
        });
        countdisatch(decrement(x));
    }
    function SETAGE() {
        setAge((prev) => {
            return prev + 10;
        });
        countdisatch(nam(age));
    }
    // console.log(x);
    return (
        <div>
            <p>{bienx.value}</p>
            <p>{bienage.age}</p>
            <button onClick={ClickReduxcoreup}>Click up count with reduxcore</button>
            <button onClick={ClickReduxcoredown}>Click down count with reduxcore</button>
            <button onClick={SETAGE}>Click down count with reduxcore</button>
        </div>
    );
}
