import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setBoard } from '@/store/slices/boardSlice';
import { Button, Box } from '@mui/material';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface PanelProps {
  setPageOpened: Dispatch<SetStateAction<string>>;
}

export default function Panel({ setPageOpened }: PanelProps) {

  const dispatch = useAppDispatch();
  const board = useAppSelector((state) => state.board.data);

  useEffect(() => {
    console.log("buildings", board)
  }, [board])


  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Button
        variant="contained" color="primary"
        onClick={() => setPageOpened("")}
      >
        ← Back
      </Button>
      <Button
        variant="contained" color="primary" onClick={() => { dispatch(setBoard({ x_length: 22, y_length: 33 })) }}
      >
        Kill Team: 22x30 inches.
      </Button>
      <Button
        variant="contained" color="primary" onClick={() => { dispatch(setBoard({ x_length: 44, y_length: 60 })) }}
      >
        Warhammer 40,000 (2000 points): 44x60 inches
      </Button>
      <Button
        variant="contained" color="primary" onClick={() => { dispatch(setBoard({ x_length: 44, y_length: 90 })) }}
      >
        Warhammer 40,000 (3000+ points): 44x90 inches.
      </Button>
      TODO: implement custom size
    </Box>
  );
}