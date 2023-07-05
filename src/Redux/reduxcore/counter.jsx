export const increment = (data) => {
    return {
        type: 'INCREMENT',
        valuedata: data,
    };
};
export const decrement = () => {
    return {
        type: 'DECREMENT',
    };
};
