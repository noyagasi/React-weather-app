import React from "react";

const Weather = props => {
    const upFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const citiesTemps = props.temp.map((t, index) => {
        if (t) {
            return (<p key={index}>{upFirstLetter(props.cities[index])} temperature: {props.temp[index]}</p>);
        }else{
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