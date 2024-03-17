import React, { useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import { fetchCities } from "../../api/OpenWeatherService";
const Search = ({onCharchChange}) => {

 const [searchValue, setSearchValue] = useState(null);

 const loadOptions = async inputValue => {
   const citiesList = await fetchCities(inputValue);

   return {
     options: citiesList.data.map(city => {
       return {
         value: `${city.latitude} ${city.longitude}`,
         label: `${city.name}, ${city.countryCode}`,
       };
     }),
   };
 };

 const onChangeHandler = enteredData => {
   setSearchValue(enteredData);
   onCharchChange(enteredData);
 };

    return (
      <AsyncPaginate
        placeholder="Search By City"
        debounceTimeout={600}
        value={searchValue}
        onChange={onChangeHandler}
        loadOptions={loadOptions}
      />
    );
};

export default Search;