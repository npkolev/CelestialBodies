import { FC } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

const Header: FC = () => {
  return (
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Celestial bodies in the Solar system</Typography>
        </Toolbar>
      </AppBar>
  );
}

export default Header;
