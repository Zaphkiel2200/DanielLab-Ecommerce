import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import animeReducer from '../features/anime/animeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    anime: animeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;