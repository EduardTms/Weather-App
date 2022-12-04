import "./current-weather.css";

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="weather pa3 ba br4 br--bottom fl w-auto w-40 ph3 ma3 mt4 --yellow">
                <p className="cityStatus pa0 mb0 b--white">{data.weather[0].description}</p>
                <p className="cityName pa0 mt0 fw7 f3 ttu">{data.city}</p>
                <hr />
            <div>
                <p className="cityTemp pa0 ma0 b--white">{data.main.temp}°C</p>
                <p className="cityFeels pa0 ma0 f4">Feels Like: {data.main.feels_like}°C</p>
                <p className="cityWind pa0 ma0 f4">Wind: {data.wind.speed}m/s</p>
                <p className="cityPressure pa0 ma0 f4">Humidity: {data.main.humidity}%</p>
                <p className="cityHumidity pa0 ma0 f4">Pressure: {data.main.pressure}hPa</p>
            </div>
            </div>
        </div>
    )
}

export default CurrentWeather;