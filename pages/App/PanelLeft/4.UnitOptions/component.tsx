import { Button, Box } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface PanelProps {
  setPageOpened: Dispatch<SetStateAction<string>>;
}

export default function Panel({ setPageOpened } :PanelProps ) {
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" gap={2}>
      <Button
        variant="contained" color="primary"
        onClick={() => setPageOpened("")}
      >
        ← Back
      </Button>
      <div>aaaa</div>
    </Box>
  );
}