import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';


const pending = state => {
  state.isLoading = true;
  state.error = null;
}

const rejected = (state, {payload}) => {
  state.isLoading = false;
  state.error = payload;
}

const initialState = {
user: {
      name: null,
      email: null,
    },
    token: null,
  isLoggedIn: false,
    isRefreshing: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, pending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, rejected)
      .addCase(login.pending, pending)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, rejected)
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      }

      )
      .addCase(refreshUser.rejected, rejected)
    
  }
});

export const authReducer = authSlice.reducer;
