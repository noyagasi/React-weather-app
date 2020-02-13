import React from "react";

const Weather = props => (
    <div>
        {props.london && <p>London temperature: {props.london}</p>}
        {props.newyork && <p>New York temperature: {props.newyork}</p>}
        {props.telaviv && <p>Tel Aviv temperature: {props.telaviv}</p>}
        {props.moscow && <p>Moscow temperature: {props.moscow}</p>}
        {props.saopaulo && <p>Sao Paulo temperature: {props.saopaulo}</p>}
        {props.beijing && <p>Beijing temperature: {props.beijing}</p>}
        {props.mumbai && <p>Mumbai temperature: {props.mumbai}</p>}
        {props.losangeles && <p>Los Angeles temperature: {props.losangeles}</p>}
        {props.capetown && <p>Cape Town temperature: {props.capetown}</p>}
        {props.dubai && <p>Dubai temperature: {props.dubai}</p>}
        {props.error && <p>{props.error}</p>}
    </div>
);


export default Weather;