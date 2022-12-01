import * as types from '../constants/userConstants';

const usersListReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
      return { loading: true };
    case types.GET_USERS_SUCCESS:
      return { loading: false, usersList: action.payload };
    case types.GET_USERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default usersListReducer;
