import { configureStore } from '@reduxjs/toolkit';
import viewBusReducer from '../features/viewBus/ViewBusSlice';
import { phantomApi } from '../services/phantomApi';

export const store = configureStore({
  reducer: {
    viewSearchedBuses: viewBusReducer,
  },
});

import { phantomApi } from '../services/phantomApi';

export default configureStore({
    reducer: {
        [phantomApi.reducerPath]: phantomApi.reducer,
    },

})
