import { combineReducers } from '@reduxjs/toolkit';
import CountriesReducer from './countries';

const reducers = combineReducers({
  countries: CountriesReducer,
});

export default reducers;
