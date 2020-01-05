import React, { Component } from 'react';
import transformWeather from './../../services/transformWeather';
import { api_weather} from './../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
} from './../../constants/weathers';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '11 m/s',
}

// &units=metric
class WeatherLocation extends Component{

    constructor() {
        super();

        this.state = {
            city: 'Buenos Aires',
            data
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather)
        .then((resolve) => {
            console.log('resolve ', resolve);
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log('data nueva ', newWeather);

            this.setState({
                data: newWeather,
            })

        });
    }
    
    render() {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
}

export default WeatherLocation;
