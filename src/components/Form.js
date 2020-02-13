import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather}>
        <p><input type="checkbox" name="london" />London</p>
        <p><input type="checkbox" name="newyork" />New York</p>
        <p><input type="checkbox" name="telaviv" />Tel Aviv</p>
        <p><input type="checkbox" name="moscow" />Moscow</p>  
        <p><input type="checkbox" name="saopaulo" />Sao Paulo</p>  
        <p><input type="checkbox" name="beijing" />Beijing</p>  
        <p><input type="checkbox" name="mumbai" />Mumbai</p>  
        <p><input type="checkbox" name="losangeles" />Los Angeles</p>  
        <p><input type="checkbox" name="capetown" />Cape Town</p>  
        <p><input type="checkbox" name="dubai" />Dubai</p>  
        <button>OK</button>
    </form>
);

export default Form;