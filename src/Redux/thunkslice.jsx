import { createSlice } from '@reduxjs/toolkit';
export function upCount(data) {
    //  upCount là thunk action creator là 1 function trả về ()=>{thunk action}
    //  dữ liệu mà ta truyền vào thunk action creator thì thunk action đều dùng được
    return function thunkupCount(dispatch, getState) {
        //là 1 thunk action là 1 function
        console.log(data);
        console.log(getState());
    };
}
