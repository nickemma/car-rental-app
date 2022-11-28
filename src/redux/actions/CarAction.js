import * as types from '../constants/carConstants';
import axios from 'axios';

const getCars = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_CARS_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    };

    const { data } = await axios.get('http://localhost:5000/products', config);

    dispatch({
      type: types.GET_CARS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_CARS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

const deleteCar = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_CAR_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    };
    await axios.delete(`http://localhost:5000/products/${id}`, config);

    dispatch({
      type: types.DELETE_CAR_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: types.DELETE_CAR_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

export { getCars, deleteCar };
