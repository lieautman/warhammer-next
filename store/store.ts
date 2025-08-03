// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import buildingReducer from './slices/buildingSlice';
import boardReducer from './slices/boardSlice';

export const store = configureStore({
  reducer: {
    board: boardReducer,
    building: buildingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
