import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCountries from '../components/modules/Countries';

const GET_COUNTRIES = './rockets/fetchCountries/GET_COUNTRIES';

export const fetchCountries = createAsyncThunk(GET_COUNTRIES,
  async () => {
    const response = await getCountries();
    return response;
  });

const slice = createSlice({
  name: 'countries',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export const { fetchedCountries } = slice.actions;
export default slice.reducer;
