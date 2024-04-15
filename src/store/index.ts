import { configureStore } from '@reduxjs/toolkit';

import test from './slices/testSlice';
export * from './slices/testSlice';

const store = configureStore({ reducer: { test } });

export default store;
