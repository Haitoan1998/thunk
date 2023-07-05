import { createSlice } from '@reduxjs/toolkit';
const StoreOfSclice = {
    number: 0,
    arr: [1, 2, 4],
};
export const UpDateNumber = createSlice({
    name: 'updates',
    initialState: StoreOfSclice,
    reducers: {
        OneUnitInCrease: (UpOne) => {
            UpOne.number += 1;
        },
        DecreaseByOneUnit: (DownOne) => {
            DownOne.number -= 1;
        },
        Custom: (Custom, Value) => {
            Custom.number -= Value.payload;
        },
    },
});
export const { OneUnitInCrease, DecreaseByOneUnit, Custom } = UpDateNumber.actions;
export const a = UpDateNumber.reducer;
