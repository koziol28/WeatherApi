const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=01cc692f1cc0f115e9517f0837d16273";
const API_UNITS = "&units=metric";

const getWeather = () => {
	const city = input.value || "London";
	const URL = API_LINK + city + API_KEY + API_UNITS;

	axios.get(URL).then((res) => {
		console.log(res.data);
		const temp = res.data.main.temp;
		const hum = res.data.main.humidity;
		const status = Object.assign({}, ...res.data.weather);

		weather.textContent = status.main;
		cityName.textContent = res.data.name;
		temperature.textContent = Math.floor(res.data.main.temp) + "℃";
		humidity.textContent = res.data.main.humidity + "%";
	});
};

const enterCheck = (e) => {
	if (e.key === "Enter") {
		getWeather();
	}
};

getWeather();
button.addEventListener("click", getWeather);
input.addEventListener("keyup", enterCheck);
