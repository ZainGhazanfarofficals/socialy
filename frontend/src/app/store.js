import { configureStore } from '@reduxjs/toolkit';

// Local imports
import { authReducer } from './reducers/authReducer';
import { authMiddleware } from './middlewares/authMiddleware';

const rootReducer = {
  auth: authReducer,
};

const middleware = [authMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export { store };




