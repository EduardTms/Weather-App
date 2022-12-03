import "./current-weather.css";

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="weather ba br4 br--bottom fl w-auto w-40 ph3 ma3 mt4 --yellow">
                <p className="cityStatus pa0 mb0 b--white">Sunny</p>
                <p className="cityName pa0 mt0 fw7 f3 ttu">Belgrade</p>
            </div>
        </div>
    )
}

export default CurrentWeather;