import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";
// import { Jwt } from "jsonwebtoken";

const initialState = {
  authToken: null,
  both: false,
  isLoading: false,
  isSuccess: false,
  isLogoutSuccess: false,
  isError: false,
  message: "",
  email: "",
};

const errorMessageHandler = (error) => {
  const message = error.response.data.error || error.message;
  return message;
};

// authRegister User
export const authLogin = createAsyncThunk(
  "auth/authLogin",
  async (userData, thunkAPI) => {
    try {
      console.log(userData);
      return await authService.login(userData);
    } catch (error) {
      const message = errorMessageHandler(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// authRegister User
export const authRegister = createAsyncThunk(
  "auth/authRegister",
  async (userData, thunkAPI) => {
    try {
      return await authService.createAccount(userData);
    } catch (error) {
      const message = errorMessageHandler(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Logout User
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (thunkAPI) => {
    try {
      return await authService.logout();
    } catch (error) {
      const message = errorMessageHandler(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authRegister.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(authRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.authToken = action.payload.access_token;
      state.both = action.payload.both;
    });

    builder.addCase(authRegister.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.authToken = null;
      state.both = false;
    });
    builder.addCase(authLogin.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.authToken = action.payload.access_token;
      state.email = action.payload.email;

      state.both = action.payload.both;
    });

    builder.addCase(authLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.authToken = null;
      state.both = false;
    });

    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.authToken = null;
      state.both = false;
      state.isLogoutSuccess = true;
      state.message = action.payload;
    });

    builder.addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isLogoutSuccess = false;
      state.message = action.payload;
    });
  },
});

export const selectAuthState = ({ forever }) => forever.auth;

export default authSlice.reducer;
