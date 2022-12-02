import axios from 'axios';
import * as types from '../constants/bookingConstants';

// Add booking car

const addBooking = (FormData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: types.BOOKING_CAR_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const { data } = await axios({
      method: 'POST',
      url: 'http://localhost:3000/reservations',
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
      data: FormData,
    });
    console.log(data);
    dispatch({
      type: types.BOOKING_CAR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.BOOKING_CAR_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

export default addBooking;
