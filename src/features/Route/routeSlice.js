import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import phantomApi from '../../api/api';

// Create new route
export const createRoute = createAsyncThunk(
  'routes/createRoute',
  async (routeData, thunkAPI) => {
    try {
      console.log(routeData);
      const response = await phantomApi.post('api/routes', routeData,{
      withCredentials: true,
      headers: {'Access-Control-Allow-Origin': process.env.REACT_APP_BACKEND_URL, 'Content-Type': 'application/json'}
    });
      return response.data;
    } catch (error) {
      let message;
      if (error?.response?.data) {
        message = error?.response?.data?.message;
      } else {
        message = error.message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const fetchAsyncRoutes = createAsyncThunk(
  'routes/fetchAsyncRoutes',
  async (dispatch, getState) => {
    const response = await phantomApi.get('api/routes');
    return response.data;
  }
);

const routeSlice = createSlice({
  name: 'routes',
  initialState: {
    routes: [],
    status: null,
    message: '',
  },
  extraReducers: {
    [createRoute.pending]: (state, action) => {
      state.status = 'loading';
    },
    [createRoute.fulfilled]: (state, action) => {
      state.status = 'success';
      state.routes = action.payload;
    },
    [createRoute.rejected]: (state, action) => {
      state.status = 'failed';
      state.message = action.payload;
      console.log(action);
    },
    [fetchAsyncRoutes.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchAsyncRoutes.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.routes = payload;
    },
    [fetchAsyncRoutes.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const createRoutes = (state) => state.routes;
export const getRoutes = (state) => state.routes;
export default routeSlice.reducer;