import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"

const ForecastSlider = ({ data }) => {
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "30px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000
      }

      const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; 

      const getDays = () => {
        const dayInAWeek = new Date().getDay();
        const x = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
        return x;
      }

      return (
        <div className="slider bt bb mt5">
          <h2 className="f2 tc">7-Day Forecast</h2>
          <Slider {...settings}>
            <div className="forecast-days-container pa1 ma1">
              <h3 className="f3 ma0 pa0">Tomorrow</h3>
              <div className="forecast-description pa0 ma0">
                <p className="f4">{data.list[0].weather[0].description} </p>
                <img src={`icons/${data.list[0].weather[0].icon}.png`} alt="weather-icon" />
              </div>
              <div className="forecast-temp ">
                <p className="pa0 ma0">{data.list[0].main.temp_min.toFixed(0)}°C / {data.list[0].main.temp_max.toFixed(0)}°C</p>
              </div>
                <p className="pa0 ma0">Wind: <span>{data.list[0].wind.speed}m/s</span></p>
                <p className="pa0 ma0">Humidity: <span>{data.list[0].main.humidity}%</span></p>
                <p className="pa0 ma0">Precipitation: <span>{data.list[0].pop.toFixed(2)}%</span></p>
            </div>
            <div className="forecast-days-container pa1 ma1">
              <h3 className="f3 ma0 pa0">{getDays()[1]}</h3>
              <div className="forecast-description pa0 ma0">
                <p className="f4">{data.list[1].weather[0].description} </p>
                <img src={`icons/${data.list[1].weather[0].icon}.png`} alt="weather-icon" />
              </div>
              <div className="forecast-temp ">
                <p className="pa0 ma0">{data.list[1].main.temp_min.toFixed(0)}°C / {data.list[1].main.temp_max.toFixed(0)}°C</p>
              </div>
                <p className="pa0 ma0">Wind: <span>{data.list[1].wind.speed}m/s</span></p>
                <p className="pa0 ma0">Humidity: <span>{data.list[1].main.humidity}%</span></p>
                <p className="pa0 ma0">Precipitation: <span>{data.list[1].pop.toFixed(2)}%</span></p>
            </div>
            <div className="forecast-days-container pa1 ma1">
              <h3 className="f3 ma0 pa0">{getDays()[2]}</h3>
              <div className="forecast-description pa0 ma0">
                <p className="f4">{data.list[2].weather[0].description} </p>
                <img src={`icons/${data.list[2].weather[0].icon}.png`} alt="weather-icon" />
              </div>
              <div className="forecast-temp ">
                <p className="pa0 ma0">{data.list[2].main.temp_min.toFixed(0)}°C / {data.list[2].main.temp_max.toFixed(0)}°C</p>
              </div>
                <p className="pa0 ma0">Wind: <span>{data.list[2].wind.speed}m/s</span></p>
                <p className="pa0 ma0">Humidity: <span>{data.list[2].main.humidity}%</span></p>
                <p className="pa0 ma0">Precipitation: <span>{data.list[2].pop.toFixed(2)}%</span></p>
            </div>
            <div className="forecast-days-container pa1 ma1">
              <h3 className="f3 ma0 pa0">{getDays()[3]}</h3>
              <div className="forecast-description pa0 ma0">
                <p className="f4">{data.list[3].weather[0].description} </p>
                <img src={`icons/${data.list[3].weather[0].icon}.png`} alt="weather-icon" />
              </div>
              <div className="forecast-temp ">
                <p className="pa0 ma0">{data.list[3].main.temp_min.toFixed(0)}°C / {data.list[3].main.temp_max.toFixed(0)}°C</p>
              </div>
                <p className="pa0 ma0">Wind: <span>{data.list[3].wind.speed}m/s</span></p>
                <p className="pa0 ma0">Humidity: <span>{data.list[3].main.humidity}%</span></p>
                <p className="pa0 ma0">Precipitation: <span>{data.list[3].pop.toFixed(2)}%</span></p>
            </div>
            <div className="forecast-days-container pa1 ma1">
              <h3 className="f3 ma0 pa0">{getDays()[4]}</h3>
              <div className="forecast-description pa0 ma0">
                <p className="f4">{data.list[4].weather[0].description} </p>
                <img src={`icons/${data.list[4].weather[0].icon}.png`} alt="weather-icon" />
              </div>
              <div className="forecast-temp ">
                <p className="pa0 ma0">{data.list[4].main.temp_min.toFixed(0)}°C / {data.list[4].main.temp_max.toFixed(0)}°C</p>
              </div>
                <p className="pa0 ma0">Wind: <span>{data.list[4].wind.speed}m/s</span></p>
                <p className="pa0 ma0">Humidity: <span>{data.list[4].main.humidity}%</span></p>
                <p className="pa0 ma0">Precipitation: <span>{data.list[4].pop.toFixed(2)}%</span></p>
            </div>
            <div className="forecast-days-container pa1 ma1">
              <h3 className="f3 ma0 pa0">{getDays()[5]}</h3>
              <div className="forecast-description pa0 ma0">
                <p className="f4">{data.list[5].weather[0].description} </p>
                <img src={`icons/${data.list[5].weather[0].icon}.png`} alt="weather-icon" />
              </div>
              <div className="forecast-temp ">
                <p className="pa0 ma0">{data.list[5].main.temp_min.toFixed(0)}°C / {data.list[5].main.temp_max.toFixed(0)}°C</p>
              </div>
                <p className="pa0 ma0">Wind: <span>{data.list[5].wind.speed}m/s</span></p>
                <p className="pa0 ma0">Humidity: <span>{data.list[5].main.humidity}%</span></p>
                <p className="pa0 ma0">Precipitation: <span>{data.list[5].pop.toFixed(2)}%</span></p>
            </div>
            <div className="forecast-days-container pa1 ma1">
              <h3 className="f3 ma0 pa0">{getDays()[6]}</h3>
              <div className="forecast-description pa0 ma0">
                <p className="f4">{data.list[6].weather[0].description} </p>
                <img src={`icons/${data.list[6].weather[0].icon}.png`} alt="weather-icon" />
              </div>
              <div className="forecast-temp ">
                <p className="pa0 ma0">{data.list[6].main.temp_min.toFixed(0)}°C / {data.list[6].main.temp_max.toFixed(0)}°C</p>
              </div>
                <p className="pa0 ma0">Wind: <span>{data.list[6].wind.speed}m/s</span></p>
                <p className="pa0 ma0">Humidity: <span>{data.list[6].main.humidity}%</span></p>
                <p className="pa0 ma0">Precipitation: <span>{data.list[6].pop.toFixed(2)}%</span></p>
            </div>
          </Slider>
        </div>
      );
    }

export default ForecastSlider;