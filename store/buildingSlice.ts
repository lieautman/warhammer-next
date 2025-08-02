// store/factionsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Building {
  id: string;
  isRuild: boolean;
  x_coord: Float16Array;
  y_coord: Float16Array;
  x_length: Float16Array;
  y_length: Float16Array;
}

interface BuildingState {
  data: Building[];
}

const initialState: BuildingState = {
  data: [],
};

const buildingSlice = createSlice({
  name: 'buidling',
  initialState,
  reducers: {
    setBuilding: (state, action: PayloadAction<Building[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setBuilding } = buildingSlice.actions;
export default buildingSlice.reducer;
