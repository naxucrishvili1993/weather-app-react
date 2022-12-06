const API_KEY = `5178824c16275b0ed0392a576b8291a1`;
const URL = "https://api.openweathermap.org/data/2.5/weather";

export const weatherForecast = (location) =>
	`${URL}?q=${location}&units=metric&appid=${API_KEY}`;
