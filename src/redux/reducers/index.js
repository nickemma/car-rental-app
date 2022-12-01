import { combineReducers } from '@reduxjs/toolkit';
import userLoginReducer from './userLoginReducer';
import userRegisterReducer from './userRegisterReducer';
import { carReducer } from './carReducer';
import addbookingReducer from './bookingReducer';
import usersListReducer from './usersListReducer';

export const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  carList: carReducer,
  booking: addbookingReducer,
  usersList: usersListReducer,
});

export default rootReducer;
