// import * as types from '../constants/carConstants';

// const initialState = {
//   cars: [],
//   car: {},
//   loading: false,
// };

// const carReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.GET_CARS_REQUEST:
//       return { ...state, loading: true };
//     case types.GET_CARS_SUCCESS:
//       return { ...state, cars: action.payload, loading: false };
//     case types.GET_CARS_FAIL:
//       return { ...state, loading: false };
//     case types.DELETE_CAR_REQUEST:
//       return { ...state, loading: true };
//     case types.DELETE_CAR_SUCCESS:
//       return {
//         ...state,
//         cars: state.cars.filter((car) => car.id !== action.payload),
//         loading: false,
//       };
//     case types.DELETE_CAR_FAIL:
//       return { ...state, loading: false };
//     default:
//       return state;
//   }
// };

// export default carReducer;
