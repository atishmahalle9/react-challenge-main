/* eslint-disable */
// store.ts
import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countrySlice';

const store = configureStore({
    reducer: {
        countries: countryReducer,
    },
});

// TypeScript-specific: define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
