import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "f441f5f7f9cec3ed1fd67e5c22b66396";

class App extends React.Component {
  state = {
    cities: ["london", "newyork", "telaviv",
      "moscow", "saopaulo", "beijing", "mumbai",
      "losangeles", "capetown", "dubai"],
    temp: ["", "", "", "", "", "", "", "", "", ""],
    error: ""
  }
  getWeather = async (e) => {
    e.preventDefault();
    var i, arr = ["", "", "", "", "", "", "", "", "", ""];
    for (i = 0; i < 10; i++) {
      if (e.target.elements[i].checked) {
        arr[i] = "true";
      }else{
        arr[i] = "";
      }
    }
    for (i = 0; i < 10; i++) {
      if (arr[i] === "true") {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.cities[i]}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        arr[i] = data.main.temp;
      }
    }
    this.setState({ temp: arr });
    if (this.state.temp === "") {
      this.setState({
        error: "Error: No city selected."
      });
    }
  };

render() {
  return (
    <div>
      <Titles />
      <Form getWeather={this.getWeather} />
      <Weather
        london={this.state.temp[0]}
        newyork={this.state.temp[1]}
        telaviv={this.state.temp[2]}
        moscow={this.state.temp[3]}
        saopaulo={this.state.temp[4]}
        beijing={this.state.temp[5]}
        mumbai={this.state.temp[6]}
        losangeles={this.state.temp[7]}
        capetown={this.state.temp[8]}
        dubai={this.state.temp[9]}
        error={this.state.error}
      />
    </div >
  );
}
}

export default App;