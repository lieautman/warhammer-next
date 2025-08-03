import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Board {
  x_length: number;
  y_length: number;
}

interface BoardState {
  data: Board;
}

const initialState: BoardState = {
  data: {x_length:0,y_length:0},
};

const boardSlice = createSlice({
  name: 'Board',
  initialState,
  reducers: {
    setBoard: (state, action: PayloadAction<Board>) => {
      state.data = action.payload;
    },
  },
});

export const { setBoard } = boardSlice.actions;
export default boardSlice.reducer;
