import { combineReducers } from '@reduxjs/toolkit';
import navbar from './navbarSlice';

const foreverReducers = combineReducers({
  navbar,
});

export default foreverReducers;
