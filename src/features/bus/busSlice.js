import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import phantomApi from '../../api/api';
const token = localStorage.getItem('jwt');
const Authorization = `Bearer ${token}`;

// Create new route
export const createBus = createAsyncThunk(
  'buses/createBus',
  async (busData, thunkAPI) => {
    const cid = busData.company;
    try {
      const response = await phantomApi.post('api/buses/'+cid+'/bus', busData,{
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


export const fetchAsyncBuses = createAsyncThunk(
  'buses/fetchAsyncBuses',
  async () => {
    const response = await phantomApi.get('api/buses');
    console.log(response.data);
    return response.data;
  }
);
//update
export const updateBus = createAsyncThunk(
  'buses/updateBus',
  async (busData, thunkAPI) => {
    const id = busData.busId;
    try {
      const response = await phantomApi.put('api/buses/'+id, busData,{
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
export const deleteBus = createAsyncThunk(
  'companies/deleteBus',
  async (busData, thunkAPI) => {
    const {busId} = busData
    try{
    const response = await phantomApi.delete('api/buses/'+busId,{
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

const busSlice = createSlice({
  name: 'buses',
  initialState : {
    buses: [],
    status: null,
    isLoading: false,
    isRejected: false,
    isSuccess: false,
    isSuccessBusDelete: false,
    message: '',
  },
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isRejected = false
      state.isSuccessBusDelete = false
      state.message = ''
    },
  },
  extraReducers: {
    [createBus.pending]: (state, action) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    [createBus.fulfilled]: (state, action) => {
      state.status = 'success';
      state.isSuccess = true
      state.isLoading = false;
      state.message = action.payload;
      state.buses = action.payload;
    },
    [createBus.rejected]: (state, action) => {
      state.status = 'failed';
      state.isLoading=false;
      state.isRejected = true;
      state.message = action.payload;
    },
    [updateBus.pending]: (state, action) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    [updateBus.fulfilled]: (state, action) => {
      state.status = 'success';
      state.isSuccess = true;
      state.isLoading = false;
      state.message = action.payload;
      state.buses = action.payload;
    },
    [updateBus.rejected]: (state, action) => {
      state.status = 'failed';
      state.isLoading=false;
      state.isRejected = true;
      state.message = action.payload;
    },
    [fetchAsyncBuses.pending]: (state, action) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    [fetchAsyncBuses.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.isLoading = false;
      state.buses = payload;
    },
    [fetchAsyncBuses.rejected]: (state, action) => {
      state.status = 'failed';
      state.isLoading = false;
    },
    [deleteBus.pending]: (state) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    [deleteBus.fulfilled]: (state, action) => {
      state.status = 'success';
      state.isSuccessBusDelete = true;
      state.isLoading = false;
      state.message = action.payload;
      state.buses = action.payload.id;
    },
    [deleteBus.rejected]: (state, action) => {
      state.status = 'failed';
      state.isLoading = false;
      state.isSuccessBusCompDelete = false;
      state.message = action.payload;
    },
  },
});

export const { reset } = busSlice.actions;
export const createBuses = (state) => state.buses;
export const getBuses = (state) => state.buses;
export const updateBuses = (state) => state.buses;
export const deleteBuses = (state) => state.buses;
export default busSlice.reducer;