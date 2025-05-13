import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice";
import cartReducer from "./Slices/CartSlices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
