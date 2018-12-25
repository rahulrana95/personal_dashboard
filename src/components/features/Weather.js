import React, { Component } from "react";
import { Card } from "antd";
import cloudy from "../../assets/images/sunny-cloudy.jpeg";
import { forecastWeather } from "../../domless/services/weather";

class Weather extends Component {
  state = {
    forecast: [],
    city: "",
    dataIsLoading: true
  };
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${cloudy})`
          }}>
          <div>
            <div>{this.state.city}</div>
            <div>28&#8451;</div>
          </div>
          <div>27 september 2018</div>
        </div>
        <div style={{ display: "flex", overflowX: "auto" }}>
          {this._renderWeatherCards()}
        </div>
      </div>
    );
  }

  _renderWeatherCards() {
    if (this.state.dataIsLoading) {
      return <div>Data is loading</div>;
    }

    return this.state.forecast.map((day, index) => {
      return (
        <Card
          title={
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{day.weather[0].description}</span>
              <span>{day.dt}</span>
            </div>
          }
          key={index}
          style={{ width: "270px" }}
          cover={
            <img src="https://cdn3.iconfinder.com/data/icons/weather-16/256/Rainy_Day-512.png" />
          }>
          <div>
            <span>
              {Math.round((day.main.temp - 273.15) * 100) / 100}&#8451;
            </span>
          </div>
        </Card>
      );
    });
  }

  async componentDidMount() {
    try {
      let response = await forecastWeather();
      this.setState({
        forecast: response.data.list,
        city: response.data.city.name,
        dataIsLoading: false
      });
    } catch {}
  }
}

export default Weather;
