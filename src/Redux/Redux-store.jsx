import { configureStore } from '@reduxjs/toolkit';
import { a } from './Redux-slice';

const mystore = configureStore({
    reducer: {
        UpDate: a,
    },
});
export default mystore;
