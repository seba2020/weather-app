import React from 'react';
import WheaterExtraInfo from './WheaterExtraInfo';
import WheaterTemperature from './WheaterTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weathers';
import './styles.css';

const WheaterData = () => (
    <div className="weatherDataCont">
        <WheaterTemperature
            temperature={20}
            weatherState={CLOUDY}
        />
        <WheaterExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
);

export default WheaterData;
