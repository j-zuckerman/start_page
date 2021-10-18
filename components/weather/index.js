import { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import styles from './weather.module.css';

function Weather() {
  const [temp, setTemp] = useState('');
  const [icon, setIcon] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const zipcode = process.env.NEXT_PUBLIC_ZIP_CODE;
    const country_code = process.env.NEXT_PUBLIC_COUNTRY_CODE;
    const api_key = process.env.NEXT_PUBLIC_API_KEY;

    const setData = (data) => {
      const currTemp = parseInt(data.main.temp);
      setTemp(currTemp);

      let weatherConditionCode = data.weather[0].id;
      const weatherDescription = data.weather[0].description;
      setDescription(weatherDescription);

      const weatherIconClass = setWeatherIcon(weatherConditionCode);
      setIcon(weatherIconClass);
    };

    const setWeatherIcon = (code) => {
      switch (true) {
        case code >= 200 && code <= 232: //Thunderstorm
          return 'ri-thunderstorms-line';
        case code >= 300 && code <= 321: //Drizzle
          return 'ri-drizzle-line';
        case code >= 500 && code <= 531: //Rain
          return 'ri-rainy-line';
        case code >= 600 && code <= 622: //Snow
          return 'ri-snowy-line';
        case code >= 701 && code <= 781: //Fog
          return 'ri-foggy-line';
        case code == 800: //Clear
          return 'ri-sun-line';
        case code >= 801 && code <= 804: //Cloudy
          return 'ri-cloudy-line';
        default:
          //Error
          return 'error';
      }
    };

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${country_code}&appid=${api_key}&units=imperial`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className={styles['weather-icon-container']}>
        <i className={icon}></i>
      </div>
      <div>
        <p className={styles['weather-description']}>{description}</p>
        <p className={styles.temperature}>{temp}</p>
      </div>
    </>
  );
}

export default Weather;
