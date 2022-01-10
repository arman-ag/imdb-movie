import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Toolbar,
} from "@mui/material";
import * as React from "react";
const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={8}>
              <Paper
                sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
              >
                <InputBase
                  size="medium"
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search ..."
                />
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
