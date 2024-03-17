import React from 'react';
import { Box,  Typography } from "@mui/material";
import "./InitialContent.css";
const InitialContent = () => {
    return (
      <Box className="div"
        xs={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100%",
          minHeight: "500px",
        }}
      >
     

        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontSize: { xs: "12px", sm: "14px" },
            color: "rgba(255,255,255, .85)",
            // color: "black",
            fontFamily: "Poppins",
            textAlign: "center",
            margin: "2rem 0",
            maxWidth: "80%",
            lineHeight: "22px",
          }}
        >
          Explore current weather data and 6-day forecast!
        </Typography>
      </Box>
    );
};

export default InitialContent;