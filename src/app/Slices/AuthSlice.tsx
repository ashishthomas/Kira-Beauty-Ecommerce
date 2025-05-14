import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  isLoggedIn: boolean;
  userName: string | null;
};

const initialState: AuthState = {
  isLoggedIn: false,
  userName: localStorage.getItem("userName"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userName = action.payload;
      localStorage.setItem("userName", action.payload);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userName = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
