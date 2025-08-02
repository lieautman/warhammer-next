import { setBuilding } from '@/store/buildingSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Box, Input, Typography, Switch } from '@mui/material';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface PanelProps {
  setPageOpened: Dispatch<SetStateAction<string>>;
}

export default function Panel({ setPageOpened }: PanelProps) {

  const dispatch = useAppDispatch();
  const buliding = useAppSelector((state) => state.building.data);

  useEffect(() => {
    console.log("buildings", buliding)
    // dispatch(setBuilding([{
    //   id: 10, isRuild: false, x_coord_left_corner: 0.0, y_coord_left_cornerd: 0.0, x_length: 1, y_length: 2, angle:45
    // }]))
  }, [buliding, dispatch])

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Button
        variant="contained" color="primary"
        onClick={() => setPageOpened("")}
      >
        ← Back
      </Button>
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Typography>Id:</Typography><Input type="number" style={{ width: "100px" }} />
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Typography>isRuild:</Typography><Switch/>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Typography>x_coord_left_corner:</Typography><Input type="number" style={{ width: "100px" }} />
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Typography>y_coord_left_corner:</Typography><Input type="number" style={{ width: "100px" }} />
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Typography>x_length:</Typography><Input type="number" style={{ width: "100px" }} />
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Typography>y_length:</Typography><Input type="number" style={{ width: "100px" }} />
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Typography>angle:</Typography><Input type="number" style={{ width: "100px" }} />
      </Box>
      <Button
        variant="contained" color="primary"
      >Add building</Button>
    </Box>
  );
}