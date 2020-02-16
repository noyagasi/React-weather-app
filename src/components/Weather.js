import React from "react";
import Box from "./Box";

const Weather = props => {
    const upFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const citiesTemps = props.temp.map((t, index) => {
        if (t) {
            return <Box key={index} title={upFirstLetter(props.cities[index])} content={props.temp[index]} />;
        } else {
            return "";
        }
    })

    return (
        <div>
            {citiesTemps}
            {props.error && <p>{props.error}</p>}
        </div>
    )
}

export default Weather;