import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import phantomApi from '../../api/api';
const token = localStorage.getItem('jwt');
const Authorization = `Bearer ${token}`;

// Create new route
export const createCompany = createAsyncThunk(
  'companies/createCompany',
  async (routeData, thunkAPI) => {
    try {
      const response = await phantomApi.post('api/company', routeData,{
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


export const fetchAsyncCompanies = createAsyncThunk(
  'companies/fetchAsyncCompanies',
  async () => {
    const response = await phantomApi.get('api/company');
    return response.data;
  }
);
//update
export const updateCompany = createAsyncThunk(
  'companies/updateCompany',
  async (companyData, thunkAPI) => {
    const id = companyData.id;
    try {
      const response = await phantomApi.put('api/company/'+id, companyData,{
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
export const deleteCompany = createAsyncThunk(
  'companies/deleteCompany',
  async (companyData, thunkAPI) => {
    const {companyId} = companyData
    try{
    const response = await phantomApi.delete('api/company/'+companyId,{
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

const companySlice = createSlice({
  name: 'companies',
  initialState : {
    companies: [],
    status: null,
    isLoading: false,
    isRejected: false,
    isSuccess: false,
    isSuccessCompDelete: false,
    message: '',
  },
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isRejected = false
      state.isSuccessCompDelete = false
      state.message = ''
    },
  },
  extraReducers: {
    [createCompany.pending]: (state, action) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    [createCompany.fulfilled]: (state, action) => {
      state.status = 'success';
      state.isSuccess = true
      state.isLoading = false;
      state.message = action.payload;
      state.routes = action.payload;
    },
    [createCompany.rejected]: (state, action) => {
      state.status = 'failed';
      state.isLoading=false;
      state.isRejected = true;
      state.message = action.payload;
    },
    [updateCompany.pending]: (state, action) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    [updateCompany.fulfilled]: (state, action) => {
      state.status = 'success';
      state.isSuccess = true;
      state.isLoading = false;
      state.message = action.payload;
      state.routes = action.payload;
    },
    [updateCompany.rejected]: (state, action) => {
      state.status = 'failed';
      state.isLoading=false;
      state.isRejected = true;
      state.message = action.payload;
    },
    [fetchAsyncCompanies.pending]: (state, action) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    [fetchAsyncCompanies.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.isLoading = false;
      state.companies = payload;
    },
    [fetchAsyncCompanies.rejected]: (state, action) => {
      state.status = 'failed';
      state.isLoading = false;
    },
    [deleteCompany.pending]: (state) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    [deleteCompany.fulfilled]: (state, action) => {
      state.status = 'success';
      state.isSuccessCompDelete = true;
      state.isLoading = false;
      state.message = action.payload;
      state.routes = action.payload.id;
    },
    [deleteCompany.rejected]: (state, action) => {
      state.status = 'failed';
      state.isLoading = false;
      state.isSuccessCompDelete = false;
      state.message = action.payload;
    },
  },
});

export const { reset } = companySlice.actions;
export const createCompanies = (state) => state.companies;
export const getCompanies = (state) => state.companies;
export const updateCompanies = (state) => state.companies;
export const deleteCompanies = (state) => state.companies;
export default companySlice.reducer;