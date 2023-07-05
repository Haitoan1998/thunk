import React from 'react';

export function FileCon({ Chatocon, Chatocon1, valueB }) {
    return (
        <>
            <div>{Chatocon()}</div>
            <p>{valueB}</p>
            <button onClick={Chatocon1}>Call Chatocon1</button>
            <FileCon2 contochau={Chatocon} contochau1={Chatocon1} b={valueB} />
        </>
    );
}
export function FileCon1(props) {
    return (
        <>
            {props.arr.map((item, index) => {
                return <h2 key={index}>{item}</h2>;
            })}
            <p>{props.obj.name}</p>
            <p>{props.obj.age}</p>
            <div>
                {props.fn.map((item, index) => (
                    <h1 key={index}>{item}</h1>
                ))}
            </div>
        </>
    );
}
export function FileCon2({ contochau, contochau1, b }) {
    return (
        <>
            <div>{contochau()}</div>
            <p>{b}</p>
            <button onClick={contochau1}>Call Chatocon1</button>
        </>
    );
}
export function Con({ contocha }) {
    function alo() {
        let b = 5;
        contocha(b);
    }
    return (
        <>
            <div onClick={alo}>dsadsdsadsads</div>
        </>
    );
}
