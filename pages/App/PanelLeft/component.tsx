import styles from '../../../styles/PageLeft.module.css';
import { Button, Box } from '@mui/material';
import { useState } from "react";
import Info from "./0.Info/component";
import Board from "./1.BoardType/component";
import Building from "./2.BuildingOptions/component";
import Faction from "./3.FactionOptions/component";
import Unit from "./4.UnitOptions/component";
import Army from "./5.ArmyImport/component";

export default function Panel() {
  const [pageOpened, setPageOpened] = useState<string>("");

  const renderContent = () => {
    switch (pageOpened) {
      case "Info":
        return <Info setPageOpened={setPageOpened} />;
      case "Board":
        return <Board setPageOpened={setPageOpened} />;
      case "Building":
        return <Building setPageOpened={setPageOpened} />;
      case "Faction":
        return <Faction setPageOpened={setPageOpened} />;
      case "Unit":
        return <Unit setPageOpened={setPageOpened} />;
      case "Army":
        return <Army setPageOpened={setPageOpened} />;
      default:
        return (
          <Box display="flex" flexDirection="column" gap={4}>
            <Button variant="contained" color="primary" onClick={() => setPageOpened("Info")}>
              Info
            </Button>
            <Button variant="contained" color="primary" onClick={() => setPageOpened("Board")}>
              Board type
            </Button>
            <Button variant="contained" color="primary" onClick={() => setPageOpened("Building")}>
              Building options
            </Button>
            <Button variant="contained" color="primary" onClick={() => setPageOpened("Faction")}>
              Faction options
            </Button>
            <Button variant="contained" color="primary" onClick={() => setPageOpened("Unit")}>
              Unit options
            </Button>
            <Button variant="contained" color="primary" onClick={() => setPageOpened("Army")}>
              Army import
            </Button>
          </Box>
        );
    }
  };

  return <div className={styles.panel}>{renderContent()}</div>;
}
