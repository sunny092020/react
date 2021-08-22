import {configureStore} from '@reduxjs/toolkit';
import searchReducer from './features/search/searchSlice';
import authReducer from './features/auth/authSlice';

export default configureStore({
  reducer: {
    search: searchReducer,
    auth: authReducer,
  },
});
