import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Building {
  id: number;
  isRuild: boolean;
  x_coord_left_corner: number;
  y_coord_left_corner: number;
  x_length: number;
  y_length: number;
  angle: number;
  hilight: boolean;
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
