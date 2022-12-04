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
        speed: 500
      }

      const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; 

      const getDays = () => {
        const dayInAWeek = new Date().getDay();
        const x = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
        return x;
      }

      return (
        <div className="slider bt bb mt5">
          <h2 className="f3 tc">7-Day Forecast</h2>
          <Slider {...settings}>
            <div className="bg-red tc">
              <h3>Today</h3>
              <img src={`icons/${data.list[0].weather[0].icon}.png`} alt="weather-icon" />
            </div>
            <div className="bg-red tc">
              <h3>{getDays()[1]}</h3>
              <img src={`icons/${data.list[1].weather[0].icon}.png`} alt="weather-icon" />
            </div>
            <div className="bg-red tc">
              <h3>{getDays()[2]}</h3>
              <img src={`icons/${data.list[2].weather[0].icon}.png`} alt="weather-icon" />
            </div>
            <div className="bg-red tc">
              <h3>{getDays()[3]}</h3>
              <img src={`icons/${data.list[3].weather[0].icon}.png`} alt="weather-icon" />
            </div>
            <div className="bg-red tc">
              <h3>{getDays()[4]}</h3>
              <img src={`icons/${data.list[4].weather[0].icon}.png`} alt="weather-icon" />
            </div>
            <div className="bg-red tc">
              <h3>{getDays()[5]}</h3>
              <img src={`icons/${data.list[5].weather[0].icon}.png`} alt="weather-icon" />
            </div>
            <div className="bg-red tc">
              <h3>{getDays()[6]}</h3>
              <img src={`icons/${data.list[6].weather[0].icon}.png`} alt="weather-icon" />
            </div>
          </Slider>
        </div>
      );
    }

export default ForecastSlider;