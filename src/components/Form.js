import React from "react";

const Form = props => {
    const upFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const citiesIputs = props.cities.map(city => <p key={city}><input type="checkbox" name={city} />{upFirstLetter(city)}</p>)
    return(
        <form onSubmit={props.getWeather}>
            {citiesIputs}
            <button>OK</button>
        </form>
    )
}

export default Form;