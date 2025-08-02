import { setBuilding } from '@/store/buildingSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Box, Input, Typography, Switch } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface PanelProps {
  setPageOpened: Dispatch<SetStateAction<string>>;
}

export default function Panel({ setPageOpened }: PanelProps) {

  const dispatch = useAppDispatch();
  const buildings = useAppSelector((state) => state.building.data);

  const [newBuilding, setNewBuilding] = useState({
    id: buildings.length > 0 ? buildings[0].id + 1 : 0,
    isRuild: false,
    x_coord_left_corner: 0,
    y_coord_left_corner: 0,
    x_length: 10,
    y_length: 10,
    angle: 0,
  });

  const handleAddBuilding = () => {
    if (buildings.some(b => b.id === newBuilding.id)) return alert('ID already exists!');
    dispatch(setBuilding([...buildings, newBuilding]));
    setNewBuilding({
      id: newBuilding.id + 1,
      isRuild: false,
      x_coord_left_corner: 0,
      y_coord_left_corner: 0,
      x_length: 10,
      y_length: 10,
      angle: 0
    });
  };

  useEffect(() => {
    console.log("buildings", buildings)
  }, [buildings, dispatch])

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Button
        variant="contained" color="primary"
        onClick={() => setPageOpened("")}
      >
        ← Back
      </Button>
      
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Typography>Id:</Typography>
        <Input 
          type="number" 
          style={{ width: "100px" }}
          value={newBuilding.id}
          onChange={(e) => setNewBuilding({...newBuilding, id: Number(e.target.value)})}
        />
      </Box>
      
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Typography>isRuild:</Typography>
        <Switch
          checked={newBuilding.isRuild}
          onChange={(e) => setNewBuilding({...newBuilding, isRuild: e.target.checked})}
        />
      </Box>
      
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Typography>x_coord_left_corner:</Typography>
        <Input 
          type="number" 
          style={{ width: "100px" }}
          value={newBuilding.x_coord_left_corner}
          onChange={(e) => setNewBuilding({...newBuilding, x_coord_left_corner: Number(e.target.value)})}
        />
      </Box>
      
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Typography>y_coord_left_corner:</Typography>
        <Input 
          type="number" 
          style={{ width: "100px" }}
          value={newBuilding.y_coord_left_corner}
          onChange={(e) => setNewBuilding({...newBuilding, y_coord_left_corner: Number(e.target.value)})}
        />
      </Box>
      
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Typography>x_length:</Typography>
        <Input 
          type="number" 
          style={{ width: "100px" }}
          value={newBuilding.x_length}
          onChange={(e) => setNewBuilding({...newBuilding, x_length: Number(e.target.value)})}
        />
      </Box>
      
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Typography>y_length:</Typography>
        <Input 
          type="number" 
          style={{ width: "100px" }}
          value={newBuilding.y_length}
          onChange={(e) => setNewBuilding({...newBuilding, y_length: Number(e.target.value)})}
        />
      </Box>
      
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Typography>angle:</Typography>
        <Input 
          type="number" 
          style={{ width: "100px" }}
          value={newBuilding.angle}
          onChange={(e) => setNewBuilding({...newBuilding, angle: Number(e.target.value)})}
        />
      </Box>
      
      <Button
        variant="contained" color="primary" onClick={handleAddBuilding}
      >
        Add building
      </Button>
    </Box>
  );
}
