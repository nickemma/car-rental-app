import * as types from '../constants/carConstants';
import axios from 'axios';

const getCars = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    };
    const { data } = await axios.get('http://localhost:5000/products', config);
    dispatch({
      type: types.GET_CARS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteCar = (id) => async (dispatch) => {
  try {
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
    console.log(error);
  }
};

export { getCars, deleteCar };
