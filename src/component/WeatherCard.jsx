import React from "react";

const WeatherCard = ({ icon, title, value }) => (
  <div className="shadow-xl p-5 rounded-xl flex flex-col items-center space-y-2 w-full md:w-auto bg-white/30 backdrop-blur-sm hover:scale-105 hover:shadow-xl transition transform duration-300">
    <div>{icon}</div>
    <div className="text-lg font-semibold">{title}</div>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

export default WeatherCard;
