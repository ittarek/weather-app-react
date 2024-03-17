import React, { useState } from 'react';
import { Grid } from '@mui/material';
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast';
import { Box, Container, Link, SvgIcon, Typography } from "@mui/material";
import { fetchWeatherData } from "../../api/OpenWeatherService";
import { transformDateFormat } from "../../utilities/DatetimeUtils";
import {
  getTodayForecastWeather,
  getWeekForecastWeather,
} from "../../utilities/DataUtils";
import { ALL_DESCRIPTIONS } from "../../utilities/DateConstants";
import GitHubIcon from "@mui/icons-material/GitHub";
import TodayWeather from './../TodayWeather/TodayWeather';
import {Loading} from '../ReuseableComponent/Loading';
import Search from './../Search/Search';
import ErrorElement from '../ReuseableComponent/ErrorElement';
import icon from "../../assets/icons/humidity.png"
const WeatherContent = () => {
 const [todayWeather, setTodayWeather] = useState(null);
 const [todayForecast, setTodayForecast] = useState([]);
 const [weekForecast, setWeekForecast] = useState(null);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(false);
;
 const searchChangeHandler = async enteredData => {
   const [latitude, longitude] = enteredData.value.split(" ");

   setIsLoading(true);

   const currentDate = transformDateFormat();
   const date = new Date();
   let dt_now = Math.floor(date.getTime() / 1000);

   try {
     const [todayWeatherResponse, weekForecastResponse] =
       await fetchWeatherData(latitude, longitude);
     const all_today_forecasts_list = getTodayForecastWeather(
       weekForecastResponse,
       currentDate,
       dt_now
     );

     const all_week_forecasts_list = getWeekForecastWeather(
       weekForecastResponse,
       ALL_DESCRIPTIONS
     );

     setTodayForecast([...all_today_forecasts_list]);
     setTodayWeather({ city: enteredData.label, ...todayWeatherResponse });
     setWeekForecast({
       city: enteredData.label,
       list: all_week_forecasts_list,
     });
   } catch (error) {
     setError(true);
   }

   setIsLoading(false);
 };
 let appContent = (
   <Box
     className="div"
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
     {" "}
     <img
       width={100}
       sx={{ fontSize: { xs: "100px", sm: "120px", md: "140px" } }}
       src={icon}
       alt=""
     />
     <Typography
       variant="h4"
       component="h4"
       sx={{
         fontSize: { xs: "12px", sm: "14px" },
         color: "rgba(255,255,255, .85)",
         // color:"black",
         fontFamily: "Poppins",
         textAlign: "center",
         margin: "2rem 0",
         maxWidth: "80%",
         lineHeight: "22px",
       }}
     >
       {" "}
       Explore current weather data and 6-day forecast!
     </Typography>
   </Box>
 );

 if (todayWeather && todayForecast && weekForecast) {
   appContent = (
     <React.Fragment>
       <Grid item xs={12} md={todayWeather ? 6 : 12}>
         <Grid item xs={12}>
           <TodayWeather data={todayWeather} forecastList={todayForecast} />
         </Grid>
       </Grid>
       <Grid item xs={12} md={6}>
         <WeeklyForecast data={weekForecast} />
       </Grid>
     </React.Fragment>
   );
 }

 if (error) {
   appContent = (
     <ErrorElement
       margin="3rem auto"
       flex="inherit"
       errorMessage="Something went wrong"
     />
   );
 }

 if (isLoading) {
   appContent = (
     <Box
       sx={{
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         width: "100%",
         minHeight: "500px",
       }}
     >
       <Loading value="1" loading={isLoading}>
        
       </Loading>
     </Box>
   );
 }

 return (
   <Container
     sx={{
       maxWidth: { xs: "95%", sm: "80%", md: "1100px" },
       width: "100%",
       height: "100%",
       margin: "0 auto",
       padding: "1rem 0 3rem",
       marginBottom: "1rem",
       borderRadius: {
         xs: "none",
         sm: "0 0 1rem 1rem",
       },
       boxShadow: {
         xs: "none",
         sm: "rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px",
       },
     }}
   >
     <Grid container columnSpacing={2}>
       <Grid item xs={12}>
         <Box
           display="flex"
           justifyContent="space-between"
           alignItems="center"
           sx={{
             width: "100%",
             marginBottom: "1rem",
           }}
         >
           <Typography
             sx={{
               fontSize: { xs: "20px", sm: "30px" },
               color: "rgba(255, 255, 255, .8)",
               lineHeight: 1,
               fontFamily: "Poppins",
               margin: "auto"
             }}
        
           >
             WeatherWise
           </Typography>
         </Box>
         <Search onCharchChange={searchChangeHandler} />
       </Grid>
       {appContent}
     </Grid>
   </Container>
 );

};

export default WeatherContent;