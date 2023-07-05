import { createAsyncThunk } from '@reduxjs/toolkit';
const CallApi = createAsyncThunk('data/CallApi', async (param1, thunkApi) => {
    const result = await fetch(
        'https://backoffice.nodemy.vn/api/tasks?pagination[page]=1&pagination[pageSize]=2&sort[0]=id:asc&populate=*',
    );
    const data = await result.json();
    console.log(param1); // dữ liệu khi dispatch thunk
    console.log(thunkApi);
    console.log(thunkApi.getState()); // truy cập kho hiện tại ở slice
    console.log(thunkApi.requestId); // giá trị duy nhất của rq hiện tại
    thunkApi.dispatch({ type: 'data/fetchDataSuccess', payload: data });
    console.log(data);
    // return thunkApi.rejectWithValue('Request failed');//từ chối 1 createassyncthunk và sẽ đc xử lý builder.adđcase(reject)
    return data;
});

export default CallApi;
