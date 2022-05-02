import React from 'react'
import 'regenerator-runtime/runtime'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
import Cookies from 'universal-cookie'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))
const cookies = new Cookies();

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
      let message;
      if (error?.response?.data) {
      message = error?.response?.data?.error
      } else {
      message = error.message
      }
    return thunkAPI.rejectWithValue(message)
  }
})

//logout 
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
});


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
        console.log(action.payload)
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
      
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer