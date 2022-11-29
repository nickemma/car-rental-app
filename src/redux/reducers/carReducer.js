import * as types from '../constants/carConstants';

const initialState = {
  cars: [],
  car: {},
  loading: true,
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CARS:
      return { ...state, cars: action.payload, loading: false };
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
        car: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default carReducer;
