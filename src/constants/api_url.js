const api_key = '26f44601359ce5d9fee6963dc5d85811';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';
const location = 'Buenos Aires,ar';

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
