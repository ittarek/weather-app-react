import { Grid } from "@mui/material";

import DailyForecast from "../DailyForecast/DailyForecast";
import DetailsWeather from "../DetailsWeather/DetailsWeather";
// import AirConditionsItem from "../AirConditions/AirConditionsItem";
import AirConditions from "../AirConditions/AirConditions";


const TodayWeather = ({ data, forecastList }) => {
  return (
    <Grid container sx={{ padding: "3rem 0rem 0rem" }}>
      <DetailsWeather data={data} />
      <AirConditions data={data} />
      <DailyForecast data={data} forecastList={forecastList} />
    </Grid>
  );
};

export default TodayWeather;
