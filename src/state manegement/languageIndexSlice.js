import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const languageIndexSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLanguageIndex: (state, action) => { state.value = action.payload; }
  }
});

export const { setLanguageIndex } = languageIndexSlice.actions;
export default languageIndexSlice.reducer;