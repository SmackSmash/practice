import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: 'This is just a test',
  reducers: {
    changeState(state, action) {
      state = action.payload;
    }
  }
});

export default testSlice.reducer;
export const { changeState } = testSlice.actions;
