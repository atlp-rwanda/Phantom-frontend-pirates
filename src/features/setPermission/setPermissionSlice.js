import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import phantomApi from '../../api/api';

export const fetchAsyncRoles = createAsyncThunk(
  'roles/fetchAsyncRoles',
  async (dispatch, getState) => {
    const response = await phantomApi.get('api/role');
    return response.data;
  }
);

export const fetchAsyncAssignedPerm = createAsyncThunk(
  'assignedPermRole/fetchAsyncAssignedPerm',
  async (roleId) => {
    const response = await phantomApi.get('api/permission/role/' + roleId);
    return response.data;
  }
);

export const fetchAsyncPermissions = createAsyncThunk(
  'permissions/fetchAsyncPermissions',
  async () => {
    const response = await phantomApi.get('api/permission');
    return response.data;
  }
);

export const fetchAsyncSetPermission = createAsyncThunk(
  'assignedPermRole/fetchAsyncSetPermission',
  async (url, thunkAPI) => {
    try {
      const response = await phantomApi.post(url);
      return response.data;
    } catch (error) {
      console.log(error);
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

const roleSlice = createSlice({
  name: 'roles',
  initialState: {
    roles: [],
    permissions: [],
    assignedPermRole: [],
    status: null,
    isLoading: false,
    isSuccess: false,
    isRejected: false,
  },
  extraReducers: {
    [fetchAsyncRoles.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchAsyncRoles.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.roles = payload;
    },
    [fetchAsyncRoles.rejected]: (state, action) => {
      state.status = 'failed';
    },

    // assigned perm to role
    // [fetchAsyncAssignedPerm.fulfilled]: (state, { payload }) => {
    //   state.status = 'success';
    //   state.assignedPermRole = payload;
    // },

    // permissions
    [fetchAsyncPermissions.fulfilled]: (state, { payload }) => {
      state.permissions = payload;
    },

    [fetchAsyncSetPermission.pending]: (state, { payload }) => {
      state.isLoading = true;
    },

    [fetchAsyncSetPermission.fulfilled]: (state, { payload }) => {
      state.assignedPermRole.push(payload);
      state.isSuccess = true;
      state.isLoading = false;
    },
  },
});

export const getRoles = (state) => state.rolesPermissions.roles;
export const getAssignedPermRole = (state) =>
  state.rolesPermissions.assignedPermRole;
export const getPermissions = (state) => state.rolesPermissions.permissions;
export default roleSlice.reducer;
