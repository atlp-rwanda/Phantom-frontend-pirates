import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import phantomApi from '../../api/api';


// Register user
export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (employeeData, thunkAPI) => {
    const { firstname, lastname, email,option} = employeeData;
    try {
      const response = await phantomApi.post(`employees/${option}`, {firstname,lastname,email
      });
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const fetchAsyncEmployees = createAsyncThunk(
  'employees/fetchAsyncEmployees',
  async (dispatch, getState) => {
    const response = await phantomApi.get('employees/list');
    return response.data;
  }
);
export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async(employeeData,thunkAPI) =>{
    const {option,employeeId} = employeeData
    console.log(employeeData.option)
    try {
      const response = await phantomApi.put(`employees/${employeeId}`, {roleId: option
      });
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error)
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)
 const employeeSlice = createSlice({
   name: "employees",
   initialState: {
     employees: [],
     status: null,
   },
   extraReducers: {
     [addEmployee.pending]: (state, action) => {
       state.status = "loading";
     },
     [addEmployee.fulfilled]: (state, action) => {
       state.status = "success";
       state.employees.push(action.payload);
     },
     [addEmployee.rejected]: (state, action) => {
       state.status = "failed";
     },
     [fetchAsyncEmployees.pending]: (state, action) => {
       state.status = "loading";
     },
     [fetchAsyncEmployees.fulfilled]: (state, { payload }) => {
       state.status = "success";
       state.employees = payload;
     },
     [fetchAsyncEmployees.rejected]: (state, action) => {
       state.status = "failed";
     },
     [updateEmployee.pending]: (state, action) => {
       state.status = "loading";
     },
     [updateEmployee.fulfilled]: (state, action) => {
       state.status = "success";
       state.employees.push(action.payload);
     },
     [updateEmployee.rejected]: (state, action) => {
       state.status = "failed";
     },
   },
 });

 export const addEmployees = (state) => state.employees;
 export const getEmployees = (state) => state.employees;
 export const updateEmployees = (state) => state.employees;
 export default employeeSlice.reducer;