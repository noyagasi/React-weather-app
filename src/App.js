import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "f441f5f7f9cec3ed1fd67e5c22b66396";

class App extends React.Component {
  state = {
    cities: ["london", "manchester", "jerusalem",
      "moscow", "brazilia", "beijing", "mumbai",
      "chicago", "johannesburg", "dubai"],
    temp: ["", "", "", "", "", "", "", "", "", ""],
    error: ""
  }
  getWeather = async (e) => {
    e.preventDefault();
    var i, arr = ["", "", "", "", "", "", "", "", "", ""], isSelect = false;
    for (i = 0; i < 10; i++) {
      if (e.target.elements[i].checked) {
        arr[i] = "true";
        isSelect = true;
      } else {
        arr[i] = "";
      }
    }
    for (i = 0; i < 10; i++) {
      if (arr[i] === "true") {
        try {
          const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.cities[i]}&appid=${API_KEY}&units=metric`);
          const data = await api_call.json();
          arr[i] = data.main.temp;
        } catch (error) {
          arr[i] = "";
          alert(error);
        }

      }
    }
    this.setState({ temp: arr });
    if (isSelect) {
      this.setState({
        error: ""
      });
    } else {
      this.setState({
        error: "Error: No city selected."
      });
    }
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}
          cities={this.state.cities} />
        <Weather cities={this.state.cities}
          temp={this.state.temp}
          error={this.state.error} />
      </div >
    );
  }
}

export default App;