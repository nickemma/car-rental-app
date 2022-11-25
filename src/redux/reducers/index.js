import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  userLogin: userReducer,
});

export default rootReducer;
