import React from "react";
import { WiDaySunny, WiRain,  } from "react-icons/wi";
import { BsFillCloudsFill } from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa6";
import { IoThunderstorm } from "react-icons/io5";
import { RiCloudWindyFill } from "react-icons/ri";

const getWeatherIcon = (main) => {
  switch (main.toLowerCase()) {
    case "clear":
      return <WiDaySunny size={100} />;
    case "clouds":
      return <BsFillCloudsFill size={100} />;
    case "rain":
      return <WiRain size ={100} />;
    case "snow":
      return <FaRegSnowflake size={100} />;
    case "thunderstorm":
      return <IoThunderstorm size={100} />;
    case "drizzle":
      return <BsFillCloudsFill size={100}/> ;
    case "atmosphere":
      return <RiCloudWindyFill size={100} />;
    default: 
      return <WiDaySunny size={100} />;
    
      
  }
};

const WeatherDisplay = ({ temperature, city, condition }) => (
  <div className=" rounded-2xl p-6 mt-6 flex flex-col md:flex-row justify-between items-center md:items-center space-y-5 md:space-y-0 md:space-x-10 bg-white/30 backdrop-blur-sm shadow-md hover:shadow-xl transition duration-300 border">
    <div className="space-y-2 text-center md:text-left ">
      <div className="flex items-start justify-center md:justify-start space-x-1 ">
        <h2 className="text-7xl md:text-8xl font-bold text-gray-900">{temperature}</h2>
        <span className="text-3xl font-semibold text-gray-700">°C</span>
      </div>
      <h3 className="text-xl font-medium text-gray-800">{city}</h3>
      <h4 className="text-lg font-semibold text-yellow-500">{condition}</h4>
    </div>
    <div className=" mr-20">{getWeatherIcon(condition)}</div>
  </div>
);

export default WeatherDisplay;
