import React, { useState } from 'react';
import { FileCon, FileCon1, Con } from './FileCon';

export default function FileCha() {
    const arr = [1, 2, 3, 4];
    const obj = { name: 'Toan', age: 19 };
    const fn = () => {
        arr.push(1);
        return arr;
    };
    let a = 5;
    const [b, setB] = useState(10);

    function ChaToCon() {
        a = a + 5;
        console.log(a);
        return a;
    }

    function ChaToCon1() {
        setB((prevB) => prevB + 10);
    }

    return (
        <div>
            <FileCon Chatocon={ChaToCon} Chatocon1={ChaToCon1} valueB={b} />
            <FileCon1 arr={arr} obj={obj} fn={fn()} />
        </div>
    );
}
export function Cha2() {
    let a = 2;
    function contocha(c) {
        let d = a + c;
        console.log(d);
    }
    return (
        <div>
            <Con contocha={contocha} />
        </div>
    );
}
