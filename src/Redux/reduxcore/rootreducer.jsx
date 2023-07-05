const initState = {
    value: 0,
};
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log('aaaa');
            console.log(state.value);
            console.log(action.type);
            console.log(action.valuedata);
            return { ...state, value: state.value + action.valuedata };
        case 'DECREMENT':
            console.log('aaaa');
            console.log(state.value);
            console.log(action.type);
            console.log(action.valuedata);
            return { ...state, value: state.value + action.valuedata };
        default:
            return state;
    }
};
export default rootReducer;
