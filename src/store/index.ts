import { configureStore } from '@reduxjs/toolkit';
// API
import { apiSlice } from '@/store/api/apiSlice';
import { locationapiSlice } from '@/store/api/locationApi';
// Reducers
import locationReducer from '@/store/slices/setting/locationSlice';
import authReducer from '@/store/slices/authSlice';
// import userReducer from '@/store/slices/userSlice';

const store = configureStore({
  reducer: {
    [locationapiSlice.reducerPath]: locationapiSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    location: locationReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(locationapiSlice.middleware).concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// ✅ Initialize app with essential data
const initializeApp = async () => {
  try {
    await Promise.all([store.dispatch(apiSlice.endpoints.loadUser.initiate({})).unwrap()]);
  } catch (error) {
    // console.error('App initialization failed:', error);
  }
};

// initializeApp();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
