import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import WeatherImage from "../ReuseableComponent/WeatherImage";

const DayWeatherDetails = props => {

let {day,description} = props;
console.log("wee",description);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingLeft: { xs: "12px", sm: "20px", md: "32px" },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: { xs: "400", sm: "600" },
          fontSize: { xs: "12px", sm: "13px", md: "14px" },
          color: "white",
          lineHeight: 1,
          height: "31px",
          alignItems: "center",
          display: "flex",
        }}
      >
        {day}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "31px",
        }}
      >
        {<WeatherImage data={props.data} description={description} /> && (
          <>
            <img className="w-[50px]"
              src="https://plus.unsplash.com/premium_photo-1675827055668-2dae1b8ac181?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </>
        )}
        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontSize: { xs: "12px", md: "14px" },
            color: "rgba(255,255,255, .8)",
            lineHeight: 1,
            fontFamily: "Roboto Condensed",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Grid>
  );
};

export default DayWeatherDetails;
