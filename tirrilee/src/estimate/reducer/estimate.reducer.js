import { createSlice } from '@reduxjs/toolkit';

const estimateSlice = createSlice({
    name: 'estimates',
    initialState: {
        totalPrice: '0',
        defaultChice: '',
        name: [],
        value: [],
    },

    reducers: {
        totalPriceResult: (state, action) => {
            console.log('state :: ', state);
            console.log('action.payload :: ', action.payload);
            console.log('state.totalPrice :: ', state.totalPrice);
            state.totalPrice += action.payload;
            window.localStorage.setItem('stateTotalPrice', JSON.stringify(state.totalPrice));
        },
    },
    extraReducers: {},
});

export const { defaultChoice, nameChoice, valueChoice, totalPriceResult } = estimateSlice.actions;
export default estimateSlice.reducer;
