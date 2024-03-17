import React from 'react';
import LayoutUI from '../ReuseableComponent/LayoutUI';
import { Grid } from "@mui/material";
import { getWeekDays } from "../../utilities/DatetimeUtils";
// import { weatherIcon } from "../../utilities/IconsUtils";
import WeeklyForecastItem from "./WeeklyForecastItem";
import UnfedForecastItem from "./UnfedForecastItem";
import DayWeatherDetails from "./DayWeatherDetails";
import ErrorElement from '../ReuseableComponent/ErrorElement';
import WeatherImage from '../ReuseableComponent/WeatherImage';
// import image from "../../assets/icons/1unknownImage.png"
const WeeklyForecast = ({data}) => {
    const forecastDays = getWeekDays();

    const noDataProvided =
      !data ||
      Object.keys(data).length === 0 ||
      !data.list ||
      data.list.length === 0;

    let content = (
      <div style={{ width: "100%" }}>
        <ErrorElement type="error" />
      </div>
    );

    if (!noDataProvided)
      content = (
        <Grid
          item
          container
          display="flex"
          flexDirection="column"
          xs={12}
          gap="4px"
        >
          {data.list.map((item, idx) => {
            return (
              <Grid
                item
                key={idx}
                xs={12}
                display="flex"
                alignItems="center"
                sx={{
                  padding: "2px 0 2px",
                  background:
                    "linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%",
                  boxShadow:
                    "rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                  borderRadius: "8px",
                }}
              >
                <DayWeatherDetails
                  day={forecastDays[idx]}
                
     
                  description={item.description}
                ></DayWeatherDetails>

                <Grid
                  container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <WeeklyForecastItem
                    type="temperature"
                    value={Math.round(item.temp) + " °C"}
                    color="black"
                  />
                  <WeeklyForecastItem
                    type="clouds"
                    value={item.clouds + " %"}
                    color="black"
                  />
                </Grid>

                <Grid
                  container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <WeeklyForecastItem
                    type="wind"
                    value={item.wind + " m/s"}
                    color="green"
                  />
                  <WeeklyForecastItem
                    type="humidity"
                    value={item.humidity + " %"}
                    color="green"
                  />
                </Grid>
              </Grid>
            );
          })}
          {data.list.length === 5 && (
            <Grid
              item
              xs={12}
              display="flex"
              alignItems="center"
              sx={{
                padding: "2px 0 2px",
                background:
                  "linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%",
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                borderRadius: "8px",
              }}
            >
              <UnfedForecastItem
                day={forecastDays[5]}
                value="NaN"
                src="https://plus.unsplash.com/premium_photo-1677593850639-9f1e14e4524b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                // src={weatherIcon("../../assets/icons/unknown.png")}
              />
            </Grid>
          )}
        </Grid>
      );
    return (
        <LayoutUI
      title="WEEKLY FORECAST"
      content={content}
      mb=".8rem"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '3rem 0 0',
      }}
    />
  );

};

export default WeeklyForecast;