import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getGreeting = createAsyncThunk(
  'greeting/getGreeting',
  async () => {
    const greeting = await fetch('/api/greetings');
    return await greeting.json();
  }
);

const initialState = {
  greeting: null,
};

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGreeting.fulfilled, (state, action) => {
      state.greeting = action.payload;
    });
  },
});

export default greetingSlice.reducer;
