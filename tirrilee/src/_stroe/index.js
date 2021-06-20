import { combineReducers, configureReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import estimates from 'estimate/reducer/estimate.reducer';

const rootReducer = combineReducers({ estimates });

export default configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
});
