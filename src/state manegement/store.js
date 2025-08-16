import { configureStore } from '@reduxjs/toolkit';
import languageIndexReducer from './languageIndexSlice';

export const store = configureStore({
  reducer: {
    languageIndex: languageIndexReducer
  }
});