import { combineReducers } from '@reduxjs/toolkit';
import userLoginReducer from './userLoginReducer';
import userRegisterReducer from './userRegisterReducer';
import userListReducer from './userListReducer';

export const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
});

export default rootReducer;
