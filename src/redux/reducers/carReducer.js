import * as types from '../constants/carConstants';

const initialState = {
  loading: false,
  cars: [],
  car: {},
};

const getCarReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_CARS_REQUEST:
      return { loading: true };
    case types.GET_CARS_SUCCESS:
      return { loading: false, car: action.payload };
    case types.GET_CARS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
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
  getCarReducer,
};
