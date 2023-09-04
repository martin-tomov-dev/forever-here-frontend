import { combineReducers } from "@reduxjs/toolkit";
import navbar from "./navbarSlice";
import auth from "./authSlice";
import user from "./userSlice";

const foreverReducers = combineReducers({
  navbar,
  auth: auth,
  user: user,
});

export default foreverReducers;
