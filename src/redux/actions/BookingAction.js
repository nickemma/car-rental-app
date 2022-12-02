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
        Authorization: `Barear ${userInfo.token}`,
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

// delete booking
const deleteBooking = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const { data } = await axios({
      method: 'DELETE',
      url: `http://localhost:3000/reservations/${id}`,
      headers: {
        Authorization: `Barear ${userInfo.token}`,
      },
    });
    console.log(data);

    dispatch({
      type: types.DELETE_BOOKING,
      payload: data.id,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  addBooking,
  deleteBooking,
};
