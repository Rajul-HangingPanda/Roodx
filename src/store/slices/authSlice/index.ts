// features/authSlice.ts
import { IAuth } from '@/interface/Auth.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Partial<IAuth> = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
