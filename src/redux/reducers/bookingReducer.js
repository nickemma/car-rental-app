import * as types from '../constants/bookingConstants';

// CREATE BOOKING

const addbookingReducer = (state = {}, action) => {
  switch (action.type) {
    case types.BOOKING_CAR_REQUEST:
      return { loading: true };
    case types.BOOKING_CAR_SUCCESS:
      return { loading: false, bookingCar: action.payload };
    case types.BOOKING_CAR_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default addbookingReducer;
