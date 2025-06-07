// src/app/common/state/store.ts
import { configureStore } from '@reduxjs/toolkit';
import workflowReducer from '././workflowSlice';

export const store = configureStore({
  reducer: {
    workflow: workflowReducer,
    // add additional slices if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
