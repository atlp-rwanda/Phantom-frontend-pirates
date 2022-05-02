import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import phantomApi from '../../api/api';
const token = localStorage.getItem('jwt');
const Authorization = `Bearer ${token}`;

// Create new route
export const createRoute = createAsyncThunk(
  'routes/createRoute',
  async (routeData, thunkAPI) => {
    try {
      const response = await phantomApi.post('api/routes', routeData,{
              headers: {'Access-Control-Allow-Origin': process.env.REACT_APP_BACKEND_URL, 'Content-Type': 'application/json',
              Authorization
            }});
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
  async () => {
    const response = await phantomApi.get('api/routes');
    return response.data;
  }
);
//update
export const updateRoute = createAsyncThunk(
  'routes/updateRoute',
  async (routeData, thunkAPI) => {
    const id = routeData.routeId;
    try {
      const response = await phantomApi.put('api/routes/'+id, routeData,{
        headers: {'Access-Control-Allow-Origin': process.env.REACT_APP_BACKEND_URL, 'Content-Type': 'application/json',
        Authorization
      }});
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
//delete
export const deleteRoute = createAsyncThunk(
  'routes/deleteRoute',
  async (routeData, thunkAPI) => {
    const {routeId} = routeData
    try{
    const response = await phantomApi.delete('api/routes/'+routeId,{
      headers: {'Access-Control-Allow-Origin': process.env.REACT_APP_BACKEND_URL, 'Content-Type': 'application/json',
      Authorization
    }});
    return response.data;
  }catch (error) {
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

const routeSlice = createSlice({
  name: 'routes',
  initialState : {
    routes: [],
    status: null,
    isLoading: false,
    isRejected: false,
    isSuccess: false,
    isSuccessDelete: false,
    message: '',
  },
  extraReducers: {
    [createRoute.pending]: (state, action) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    [createRoute.fulfilled]: (state, action) => {
      state.status = 'success';
      state.isSuccess = true
      state.isLoading = false;
      state.message = action.payload;
      state.routes = action.payload;
    },
    [createRoute.rejected]: (state, action) => {
      state.status = 'failed';
      state.isLoading=false;
      state.isRejected = true;
      state.message = action.payload;
    },
    [updateRoute.pending]: (state, action) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    [updateRoute.fulfilled]: (state, action) => {
      state.status = 'success';
      state.isSuccess = true;
      state.isLoading = false;
      state.routes = action.payload;
    },
    [updateRoute.rejected]: (state, action) => {
      state.status = 'failed';
      state.isLoading=false;
      state.isRejected = true;
      state.message = action.payload;
    },
    [fetchAsyncRoutes.pending]: (state, action) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    [fetchAsyncRoutes.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.isLoading = false;
      state.routes = payload;
    },
    [fetchAsyncRoutes.rejected]: (state, action) => {
      state.status = 'failed';
      state.isLoading = false;
    },
    [deleteRoute.pending]: (state) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    [deleteRoute.fulfilled]: (state, action) => {
      state.status = 'success';
      state.isSuccessDelete = true;
      state.isLoading = false;
      state.message = action.payload;
      state.routes = action.payload.id;
    },
    [deleteRoute.rejected]: (state, action) => {
      state.status = 'failed';
      state.isLoading = false;
      state.isSuccessDelete = false;
      state.message = action.payload;
    },
  },
});

export const createRoutes = (state) => state.routes;
export const getRoutes = (state) => state.routes;
export const updateRoutes = (state) => state.routes;
export const deleteRoutes = (state) => state.routes;
export default routeSlice.reducer;