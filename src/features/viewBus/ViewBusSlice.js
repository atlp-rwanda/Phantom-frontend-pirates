import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import phantomApi from '../../api/api';

const initialState = {
  viewBus: {},
};

export const fetchAsyncViewBus = createAsyncThunk(
  'buses/fetchAsyncViewBus',
  async (routeData) => {
    const response = await phantomApi.post('api/viewbus', routeData);
    return response.data;
  }
);

const viewBusSlice = createSlice({
  name: 'buses',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncViewBus.fulfilled]: (state, { payload }) => {
<<<<<<< HEAD
      console.log('search bus by source and destination fetched successfully');
=======
<<<<<<< HEAD
=======
      console.log('search bus by source and destination fetched successfully');
>>>>>>> f5bd285... ft: landing-page added
>>>>>>> 1057758... ft: add new change
      return {
        ...state,
        viewBus: payload,
      };
    },
  },
});

export const getViewBus = (state) => state.viewSearchedBuses.viewBus;
export default viewBusSlice.reducer;
