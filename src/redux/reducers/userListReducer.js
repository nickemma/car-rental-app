import * as types from '../constants/userConstants';

const userListReducer = (state = {}, action) => {
  switch (action.type) {
    case types.USER_LIST_REQUEST:
      return { loading: true };
    case types.USER_DELETE_SUCCESS:
      return { loading: false, userLists: action.payload };
    case types.USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userListReducer;
