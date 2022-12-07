/* eslint-disable */

import * as types from '../constants/userConstants';

const usersListReducer = (
  state = {
    loading: false,
    users: [],
  },
  action
) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
      return { loading: true };
    case types.GET_USERS_SUCCESS:
      return { ...state, loading: false, usersList: action.payload };
    case types.GET_USERS_FAIL:
      return { loading: false, error: action.payload };
    case types.TOGGLE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        usersList: state.usersList.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case types.TOGGLE_USER_FAIL:
      return { error: action.payload };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        usersList: state.usersList.filter((user) => user.id !== action.payload),
      };

    case types.DELETE_USER_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export default usersListReducer;
