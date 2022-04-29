import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import phantomApi from '../../api/api';

const initialState = {
  roles: {},
};

export const fetchAsyncRoles = createAsyncThunk(
  'roles/fetchAsyncRoles',
  async () => {
    const response = await phantomApi.get('api/role');
    return response.data;
  }
);

const RoleSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncRoles.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        roles: payload,
      };
    },
  },
});

export const getRoles = (state) => state.rolesData.roles;
export default RoleSlice.reducer;
