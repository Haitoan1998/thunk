import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CallApi from './createAsyncThunk';
import { unwrapResult } from '@reduxjs/toolkit';

export default function ComponentsThunk() {
    const dispatch = useDispatch();
    const dulieu = useSelector((alo) => alo.data.loading);
    console.log(dulieu);
    useEffect(() => {
        dispatch(CallApi());
    }, [dispatch]);
    const StartCallApi = () => {
        console.log('đã ấn');
        dispatch(CallApi(2))
            .then(unwrapResult)
            .then((action) => {
                // console.log(action); // Loại action: 'user/fetchUserData/fulfilled'
                // console.log(action.payload); // Dữ liệu kết quả của tác vụ
            })
            .catch((error) => {
                // console.error('Fetch user data failed:', error);
            });
    };

    return (
        <div>
            <div>
                <button onClick={StartCallApi}>Click call api with thunk</button>
            </div>
        </div>
    );
}
