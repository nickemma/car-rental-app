import { combineReducers } from '@reduxjs/toolkit';
import userLoginReducer from './userLoginReducer';
import userRegisterReducer from './userRegisterReducer';

export const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

export default rootReducer;
