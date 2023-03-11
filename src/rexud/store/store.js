import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter';
import itemsReducer from '../features/item';
import modalReducer from '../features/modal';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    items: itemsReducer,
    startModal: modalReducer,
  },
});