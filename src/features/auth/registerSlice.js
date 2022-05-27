import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import phantomApi from "../../api/api";

const initialState = {
  employees: {}
};

export const fetchAsyncRegister = createAsyncThunk(
  "employees/fetchAsyncRegister",
  async (userData, roleId) => {
    const response = await phantomApi.post(`api/employees/${roleId}`, userData);
    return response.data;
  }
);
 const registerSlice = createSlice({
   name: "employees",
   initialState,
   reducers: {},
   extraReducers: {
     [fetchAsyncRegister.fulfilled]: (state, { payload }) => {
       return {
         ...state,
         employees: payload,
       };
     },
   },
 });

 export const getViewBus = (state) => state.viewSearchedBuses.viewBus;
 export default viewBusSlice.reducer;


