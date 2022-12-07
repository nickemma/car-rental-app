/* eslint-disable import/prefer-default-export */
import * as types from '../constants/carConstants';

const initialState = {
  loading: false,
  cars: [],
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CARS_REQUEST:
      return { ...state, loading: true };
    case types.GET_CARS_SUCCESS:
      return { ...state, loading: false, cars: action.payload };
    case types.GET_CARS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
        loading: false,
      };
    case types.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload],
        loading: false,
      };
    case types.UPDATE_CAR:
      return {
        ...state,
        cars: state.cars.map((car) => (car.id === action.payload.id ? action.payload : car)),
        loading: false,
      };
    default:
      return state;
  }
};

export {
  carReducer,
};
