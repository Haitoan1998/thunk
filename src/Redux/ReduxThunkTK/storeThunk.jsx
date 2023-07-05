import { configureStore } from '@reduxjs/toolkit';
import { Dataslice } from './sliceThunk';

const storeThunk = configureStore({
    reducer: {
        data: Dataslice,
    },
});

export default storeThunk;
