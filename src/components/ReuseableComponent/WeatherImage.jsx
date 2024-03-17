import React from "react";
import { Box } from "@mui/material";

import overcastCloudsIcon from "../../assets/icons/cloudy.gif";
import clearIcon from "../../assets/icons/02d.png";
import rainIcon from "../../assets/icons/03d.png";
import brokenClouds from "../../assets/icons/sunrise.gif";
import hazeIcon from "../../assets/icons/hot.gif";
import fewClouds from "../../assets/icons/sunset.gif";
import clearSky from "../../assets/icons/sunrise.gif";
import defaultIcon from "../../assets/icons/unknownImage.png";

const WeatherImage = ({ data, description }) => {
  console.log(description, data);

  let weather_img = "";

  if (data && data.weather) {
    const dsc = data?.weather[0].description || description;

    if (dsc === "overcast clouds") {
      weather_img = overcastCloudsIcon;
    } else if (dsc === "broken clouds") {
      weather_img = brokenClouds;
    } else if (dsc === "Rain") {
      weather_img = rainIcon;
    } else if (dsc === "haze") {
      weather_img = hazeIcon;
    } else if (dsc === "few clouds") {
      weather_img = fewClouds;
    } else if (dsc === "clear sky") {
      weather_img = clearSky;
    } else {
      weather_img = defaultIcon;
    }
  }

  return (
    <Box
      className="bg-transparent"
      component="img"
      sx={{
        width: { xs: "50px", sm: "60px" },
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        margin: "0 auto",
        padding: "0",
        backgroundColor: "transparent",
      }}
      alt="weather"
      src={weather_img}
    />
  );
};

export default WeatherImage;
