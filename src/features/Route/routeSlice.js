// import React from 'react'
// import 'regenerator-runtime/runtime'
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import routeService from './routeService'

// const initialState = {
//   routes: [],
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: '',
// }

// // Create new route
// export const createRoute = createAsyncThunk(
//   'routes/create',
//   async (routeData, thunkAPI) => {
//     try {
//       return await routeService.createRoute(routeData)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// // Get route
// export const getRoutes = createAsyncThunk(
//   'routes/getAll',
//   async () => {
//     try {
//       return await routeService.getRoutes()
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// // Delete user goal
// export const deleteRoute = createAsyncThunk(
//   'routes/delete',
//   async (id, thunkAPI) => {
//     try {
//       return await routeService.deleteRoute(id)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// export const routeSlice = createSlice({
//   name: 'route',
//   initialState,
//   reducers: {
//     reset: (state) => initialState,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createRoute.pending, (state) => {
//         state.isLoading = true
//       })
//       .addCase(createRoute.fulfilled, (state, action) => {
//         state.isLoading = false
//         state.isSuccess = true
//         state.routes.push(action.payload)
//       })
//       .addCase(createRoute.rejected, (state, action) => {
//         state.isLoading = false
//         state.isError = true
//         state.message = action.payload
//       })
//       .addCase(getRoutes.pending, (state) => {
//         state.isLoading = true
//       })
//       .addCase(getRoutes.fulfilled, (state, action) => {
//         state.isLoading = false
//         state.isSuccess = true
//         state.routes = action.payload
//       })
//       .addCase(getRoutes.rejected, (state, action) => {
//         state.isLoading = false
//         state.isError = true
//         state.message = action.payload
//       })
//       .addCase(deleteRoute.pending, (state) => {
//         state.isLoading = true
//       })
//       .addCase(deleteRoute.fulfilled, (state, action) => {
//         state.isLoading = false
//         state.isSuccess = true
//         state.routes = state.routes.filter(
//           (route) => route._id !== action.payload.id
//         )
//       })
//       .addCase(deleteRoute.rejected, (state, action) => {
//         state.isLoading = false
//         state.isError = true
//         state.message = action.payload
//       })
//   },
// })

// export const { reset } = routeSlice.actions
// export default routeSlice.reducer

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import phantomApi from '../../api/api';


// Create new route
export const createRoute = createAsyncThunk(
  'routes/createRoute',
  async (routeData, thunkAPI) => {
    try {
      console.log(routeData);
      const response = await phantomApi.post('api/routes', routeData);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

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
  },
  extraReducers: {
    [createRoute.pending]: (state, action) => {
      state.status = 'loading';
    },
    [createRoute.fulfilled]: (state, action ) => {
      state.status = 'success';
      state.routes.push(action.payload);
    },
    [createRoute.rejected]: (state, action) => {
      state.status = 'failed';
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
