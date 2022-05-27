import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import phantomApi from "../../api/api";

export const fetchAsyncRoles = createAsyncThunk(
  "roles/fetchAsyncRoles",
  async () => {
    const response = await phantomApi.get("api/role");
    return response.data;
  }
);

const roleSlice = createSlice({
  name: "roles",
  initialState: {
    roles: [],
    status: null,
    isLoading: false,
    isSuccess: false,
    isRejected: false,
    message: "",
  },

  extraReducers: {
    [fetchAsyncRoles.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchAsyncRoles.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.roles = payload;
    },
    [fetchAsyncRoles.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const getRoles = (state) => state.roles;
export default roleSlice.reducer;
