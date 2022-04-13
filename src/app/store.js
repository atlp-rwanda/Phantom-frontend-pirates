import { configureStore } from '@reduxjs/toolkit';

import { phantomApi } from '../services/phantomApi';

export default configureStore({
    reducer: {
        [phantomApi.reducerPath]: phantomApi.reducer,
    },

})
