import { combineReducers } from "@reduxjs/toolkit";
import navbar from "./navbarSlice";
import auth from "./authSlice";

const foreverReducers = combineReducers({
  navbar,
  auth:auth,
});

export default foreverReducers;
