import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OneUnitInCrease, DecreaseByOneUnit, Custom } from './Redux-slice';
export function UpNum() {
    const count = useSelector((state) => state.UpDate.arr);
    const count1 = useSelector((state) => state.UpDate.number);
    const Gansukien = useDispatch();
    return (
        <>
            <div>
                {count.map((item) => {
                    return <li key={item}>{item}</li>;
                })}
            </div>
            <p>{count1}</p>
            <button onClick={() => Gansukien(OneUnitInCrease())}>Click</button>
            <button onClick={() => Gansukien(DecreaseByOneUnit())}>Click</button>
            <button onClick={() => Gansukien(Custom(30))}>Click</button>
        </>
    );
}
