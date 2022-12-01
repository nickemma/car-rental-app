import { combineReducers } from '@reduxjs/toolkit';
import userLoginReducer from './userLoginReducer';
import userRegisterReducer from './userRegisterReducer';
import { carReducer, getCarReducer } from './carReducer';

export const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  carList: carReducer,
  getCars: getCarReducer,
});

export default rootReducer;
