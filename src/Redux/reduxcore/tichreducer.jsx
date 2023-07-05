const initState = {
    name: '',
    age: 0,
};
const Tichreducer = (state = initState, action) => {
    switch (action.type) {
        case 'NAM':
            console.log('aaaa');
            console.log(state.age);
            console.log(action.type);
            console.log(action.name);
            return { ...state, age: action.age };
        case 'NU':
            console.log('aaaa');
            console.log(state.age);
            console.log(action.type);
            console.log(action.name);
            return { ...state, age: action.age };
        default:
            return state;
    }
};
export default Tichreducer;
