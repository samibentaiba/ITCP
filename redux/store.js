// Redux/store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";
import createStore from "react-auth-kit/createStore";

// React Auth Kit store setup
const authStore = createStore({
  authName: "_auth", // Name of the cookie for storing authentication data
  authType: "cookie", // Type of storage (cookie)
  cookieDomain: window.location.hostname, // Domain for the cookie
  cookieSecure: window.location.protocol === "https:", // Secure if using HTTPS
});

// Initial state for login
const initialState = {
  email: "",
  password: "",
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// Create the loginSlice for managing login state
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    loginRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state) {
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    loginFailure(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    logout(state) {
      state.email = "";
      state.password = "";
      state.isAuthenticated = false;
    },
  },
});

export const {
  setEmail,
  setPassword,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
} = loginSlice.actions;

// Create Redux store
const store = configureStore({
  reducer: { login: loginSlice.reducer },
});

// Export Redux store and React Auth Kit store
export { store, authStore };
