import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';

const store = configureStore({
  reducer: rootReducer,
  composeWithDevTools: composeWithDevTools(applyMiddleware(thunk)),
});

export default store;
