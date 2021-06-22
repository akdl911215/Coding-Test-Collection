import { combineReducers, configureReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import estimates from 'estimate/reducer/estimate.reducer';
import counter from '_TestCode/counterReducerTest/counter.reducer';

const rootReducer = combineReducers({ estimates, counter });

export default configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
});
