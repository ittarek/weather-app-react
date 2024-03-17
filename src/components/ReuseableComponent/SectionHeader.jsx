import React from 'react';
import { Typography } from "@mui/material";
const SectionHeader = ({ title, mb }) => {
  return (
    <Typography
      variant="h5"
      component="h5"
      sx={{
        fontSize: { xs: "12px", sm: "16px", md: "18px" },
        color: "rgba(255,255,255,.7)",
        // color: "black",
        fontWeight: "600",
        lineHeight: 1,
        textAlign: "center",
        fontFamily: "Roboto Condensed",
        marginBottom: mb ? mb : "1rem",
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionHeader;