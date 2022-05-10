import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import phantomApi from '../../api/api';

const token = localStorage.getItem('jwt');
const Authorization = `Bearer ${token}`;

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

export const fetchAsyncCreateRole = createAsyncThunk(
  'roles/fetchAsyncCreateRole',
  async (roleName, thunkAPI) => {
    try {
      const response = await phantomApi.post('api/role', roleName, {
        headers: {
          'Access-Control-Allow-Origin': process.env.REACT_APP_BACKEND_URL,
          'Content-Type': 'application/json',
          Authorization,
        },
      });
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

// remove a permission
export const fetchAsyncRemovePermission = createAsyncThunk(
  'assignedPermRole/fetchAsyncRemovePermission',
  async (url, thunkAPI) => {
    try {
      const response = await phantomApi.delete(url);
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
    message: '',
  },

  reducers: {
    clearAssignedPerm: (state) => {
      state.assignedPermRole = [];
    },
  },

  extraReducers: {
    //create role
    [fetchAsyncCreateRole.pending]: (state, { payload }) => {
      state.isLoading = true;
    },

    [fetchAsyncCreateRole.fulfilled]: (state, { payload }) => {
      state.roles.push = payload;
      state.isSuccess = true;
      state.isLoading = false;
      state.message = payload.message;
    },
    [fetchAsyncCreateRole.rejected]: (state, { payload }) => {
      state.isRejected = true;
      state.isLoading = false;
      state.message = payload;
    },

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
    [fetchAsyncAssignedPerm.fulfilled]: (state, { payload }) => {
      state.assignedPermRole = payload;
    },
    [fetchAsyncSetPermission.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [fetchAsyncSetPermission.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = payload.message;
      state.assignedPermRole.push(payload);
    },

    // assign permissions
    [fetchAsyncPermissions.fulfilled]: (state, { payload }) => {
      state.permissions = payload;
    },

    [fetchAsyncRemovePermission.pending]: (state, { payload }) => {
      state.isLoading = true;
    },

    [fetchAsyncRemovePermission.fulfilled]: (state, { payload }) => {
      state.assignedPermRole = payload.id;
      state.isSuccess = true;
      state.isLoading = false;
      state.message = payload.message;
    },
    [fetchAsyncRemovePermission.rejected]: (state, { payload }) => {
      state.isRejected = true;
      state.isLoading = false;
      state.message = payload;
    },

    // remove permission
  },
});

export const { clearAssignedPerm } = roleSlice.actions;
export const getRoles = (state) => state.rolesPermissions.roles;
export const getAssignedPermRole = (state) =>
  state.rolesPermissions.assignedPermRole;
export const getPermissions = (state) => state.rolesPermissions.permissions;
export const getSuccess = (state) => state.rolesPermissions.isSuccess;
export default roleSlice.reducer;
