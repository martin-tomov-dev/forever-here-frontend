import { combineReducers } from '@reduxjs/toolkit';
import forever from './forever';

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    forever,
    ...asyncReducers,
  });

  return combinedReducer(state, action);
};

export default createReducer;
