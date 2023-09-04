import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../../services/userService";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isLogoutSuccess: false,
  isError: false,
  message: "",
};

const errorMessageHandler = (error) => {
  const message = error.response.data.error || error.message;
  return message;
};

// Forever Message
export const foreverMessage = createAsyncThunk(
  "user/foreverMessage",
  async (data, thunkAPI) => {
    try {
      console.log("data----slice", data);
      return await userService.foreverMessage(data);
    } catch (error) {
      const message = errorMessageHandler(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(foreverMessage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(foreverMessage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(foreverMessage.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const selectUserState = ({ forever }) => forever.user;

export default userSlice.reducer;
