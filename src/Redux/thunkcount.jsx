import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { upCount } from './thunkslice';

export default function Thunkcount() {
    const [x, setX] = useState(0);
    const countdisatch = useDispatch();
    function ClickThunk() {
        setX((prev) => {
            return prev + 1;
        });
        countdisatch(upCount(x));
    }
    // console.log(x);
    return (
        <div>
            <p>{x}</p>
            <button onClick={ClickThunk}>Click up count with Thunk redux</button>
        </div>
    );
}
