import React from 'react';
import { Box, SvgIcon, Typography } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import ThermostatIcon from '@mui/icons-material/Thermostat';
// import image from "../../assets/icons/1unknownImage.png";
// import { ReactComponent as HumidityIcon } from "../../assets/humidity.svg";
import HumidityIcon from "../../assets/humidity.svg";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
const WeeklyForecastItem = ({ value, type }) => {
  let iconContent;

  if (type === 'temperature')
    iconContent = (
      <ThermostatIcon
        sx={{ fontSize: { xs: '15px', sm: '16px', md: '18px' } }}
      />
    );
  else if (type === 'wind')
    iconContent = (
      <AirIcon sx={{ fontSize: { xs: '15px', sm: '16px', md: '18px' } }} />
    );
  else if (type === 'clouds')
    iconContent = (
      <FilterDramaIcon
        sx={{ fontSize: { xs: '15px', sm: '16px', md: '18px' } }}
      />
    );
  else if (type === 'humidity')
    iconContent = (
     <ReduceCapacityIcon/>
    );
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '31px',
        color: 'rgba(255, 255, 255, .7)',
        gap: { xs: '3px', sm: '4px', md: '6px' },
        width: '100%',
      }}
    >
      {iconContent}
      <Typography
        variant="p"
        component="p"
        sx={{
          fontSize: { xs: '12px', sm: '13px' },
          fontWeight: { xs: '400', sm: '600' },
          color: 'white',
          fontFamily: 'Poppins',
          lineHeight: 1,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default WeeklyForecastItem;
