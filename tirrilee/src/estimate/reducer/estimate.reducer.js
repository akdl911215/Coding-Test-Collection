import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const estimateSlice = createSlice({
    name: 'estimates',
    initialState: {
        totalPrice: '0',
        defaultChice: '',
    },
    reducer: {
        defaultChoice: (state, action) => {
            state.defaultChice = action.payload.defaultChice;
        },
    },
    extraReducers: {},
});

export const { defaultChoice } = estimateSlice.actions;
export default estimateSlice.reducer;
