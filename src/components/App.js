import React, { useState } from "react";
import axios from "axios";
import { weatherForecast } from "./Api";
import Search from "./Search";

const App = () => {
	const [cityName, setCityName] = useState("Tbilisi");
	const [weather, setWeather] = useState("");
	const [weatherDesc, setWeatherDesc] = useState("");
	const [weatherImg, setWeatherImg] = useState("");
	const [temp, setTemp] = useState(0);
	axios
		.get(weatherForecast(cityName))
		.then((res) => {
			const respond = res.data;
			setCityName(respond.name);
			setWeather(respond.weather[0].main);
			setWeatherDesc(respond.weather[0].description);
			setWeatherImg(
				`http://openweathermap.org/img/wn/${respond.weather[0].icon}@4x.png`,
			);
			setTemp(respond.main.temp);
		})
		.catch((error) => console.log("Error", error));
	return (
		<div className="container">
			<Search handleClick={(e) => setCityName(e.target.value)} />
			<img src={weatherImg} alt="Weather" />
			<h1>{cityName}</h1>
			<p>{weather}</p>
			<p>{weatherDesc}</p>
			<p>{temp}&#x2103;</p>
		</div>
	);
};

export default App;
