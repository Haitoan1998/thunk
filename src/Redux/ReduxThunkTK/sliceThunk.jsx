import CallApi from './createAsyncThunk';
import { createSlice } from '@reduxjs/toolkit';
const kho = { loading: false, data: null, error: null };
const Slicedata = createSlice({
    name: 'data',
    initialState: kho,
    extraReducers: (builder) => {
        builder.addCase(CallApi.pending, (state) => {
            console.log(CallApi.pending);
            console.log(state);
            state.loading = true;
        });
        builder.addCase(CallApi.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            const data1 = action.payload;
            console.log(data1);
            console.log(state.data);
        });
        builder.addCase(CallApi.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            console.log(state.error);
        });
    },
});
export const Dataslice = Slicedata.reducer;
