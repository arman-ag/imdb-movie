import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

const Footer = () => {
  return (
    <Box
      display="felx"
      justifyContent="center"
      // style={{ backgroundColor: "#f7b731" }}
    >
      <Typography variant="body1" color="inherit" align="center">
        © 2022 Arman-Ag
      </Typography>
    </Box>
  );
};

export default Footer;
