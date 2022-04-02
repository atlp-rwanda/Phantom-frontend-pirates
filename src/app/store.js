import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
<<<<<<< HEAD
import viewBusReducer from '../features/viewBus/ViewBusSlice';
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    viewSearchedBuses: viewBusReducer,
    auth: authReducer
  },
});

=======
=======
>>>>>>> 494ddc4... multiple-language-support

import { phantomApi } from '../services/phantomApi';

export default configureStore({
    reducer: {
        [phantomApi.reducerPath]: phantomApi.reducer,
    },

})
<<<<<<< HEAD
>>>>>>> d396f5c... multiple-language-support
=======
>>>>>>> 494ddc4... multiple-language-support
