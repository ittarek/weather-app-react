import React from 'react';
import LayoutUI from '../ReuseableComponent/LayoutUI';
import CityData from './CityData';
import { Grid } from "@mui/material";
import { getDayMonthFromDate } from "../../utilities/DatetimeUtils";
import TemperatureData from './TemperatureData';
import ErrorElement from './../ReuseableComponent/ErrorElement';
// import WeatherIconDetail from './WeatherIconDetail';
import WeatherImage from './../ReuseableComponent/WeatherImage';

const dayMonth = getDayMonthFromDate();
const DetailsWeather = ({data}) => {
//  console.log(data);


 const noDataProvided =
   !data || Object.keys(data).length === 0 || data.cod === "404";

 let content = <ErrorElement flex="1" type="error" />;

 if (!noDataProvided)
   content = (
     <>
       <Grid
         item
         xs={4}
         sx={{
           height: "80px",
         }}
       >
         <CityData city={data.city} date={dayMonth} />
       </Grid>
       <Grid
         item
         xs={4}
         sx={{
           height: "80px",
         }}
       >
         <TemperatureData
           temperature={data.main.temp}
           description={data.weather[0].description}
         />
       </Grid>
       <Grid
         item
         xs={4}
         sx={{
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           height: "80px",
         }}
       >
     <WeatherImage data={data}/>   

       </Grid>
     </>
   );
    return <LayoutUI title="CURRENT WEATHER" content={content} />;
};

export default DetailsWeather;