import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const estimateSlice = createSlice({
    name: 'estimates',
    initialState: {
        totalPrice: '0',
        defaultChice: '',
        name: [],
        value: [],
    },
    reducer: {
        defaultChoice: (state, action) => {
            state = action.payload.initialState;
        },
    },
    extraReducers: {},
});

export const { defaultChoice } = estimateSlice.actions;
export default estimateSlice.reducer;
