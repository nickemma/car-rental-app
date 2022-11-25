import * as types from '../constants/userConstants';

const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case types.USER_REGISTER_REQUEST:
      return { loading: true };
    case types.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case types.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userRegisterReducer;
