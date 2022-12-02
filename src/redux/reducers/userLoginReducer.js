import * as types from '../constants/userConstants';
import * as typess from '../constants/bookingConstants';

const userLoginReducer = (
  state = {
    loading: false,
    userInfo: null,
    error: null,
  },
  action,
) => {
  switch (action.type) {
    case types.USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case types.USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case types.USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.USER_LOGOUT:
      return {};
    case typess.BOOKING_CAR_REQUEST:
      return { ...state, loading: true };
    case typess.BOOKING_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: {
          ...state.userInfo,
          reservations: [...state.userInfo.reservations, action.payload],
        },
      };
    case typess.BOOKING_CAR_FAIL:
      return { ...state, loading: false, error: action.payload };
    case typess.DELETE_BOOKING:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          reservations: state.userInfo.reservations.filter(
            (reservation) => reservation.id !== action.payload,
          ),
        },
      };
    default:
      return state;
  }
};

export default userLoginReducer;
