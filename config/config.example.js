/**
 * Weather Map Configuration Example
 * 
 * This file demonstrates how to configure the weather map application.
 * Copy this file to config.js and replace the placeholder with your actual API key.
 * 
 * IMPORTANT: Never commit your actual API key to version control!
 */

// OpenWeatherMap API Configuration
const WEATHER_CONFIG = {
    // Replace with your OpenWeatherMap API key
    // Get your free API key from: https://openweathermap.org/api
    API_KEY: 'your_openweathermap_api_key_here',
    
    // API endpoints
    BASE_URL: 'https://api.openweathermap.org/data/3.0/onecall',
    
    // Default units (metric for Celsius, imperial for Fahrenheit)
    UNITS: 'metric',
    
    // Exclude certain data types to reduce response size
    EXCLUDE: 'minutely',
    
    // Default map center coordinates (London)
    DEFAULT_LAT: 51.505,
    DEFAULT_LNG: -0.09,
    DEFAULT_ZOOM: 13
};

// Local Storage Keys
const STORAGE_KEYS = {
    API_KEY: 'weatherApiKey',
    LAST_LOCATION: 'lastWeatherLocation'
};

// Weather Icons Mapping
const WEATHER_ICONS = {
    '01d': '☀️',  // clear sky day
    '01n': '🌙',  // clear sky night
    '02d': '⛅',  // few clouds day
    '02n': '⛅',  // few clouds night
    '03d': '☁️',  // scattered clouds
    '03n': '☁️',  // scattered clouds
    '04d': '☁️',  // broken clouds
    '04n': '☁️',  // broken clouds
    '09d': '🌧️',  // shower rain
    '09n': '🌧️',  // shower rain
    '10d': '🌦️',  // rain day
    '10n': '🌦️',  // rain night
    '11d': '⛈️',  // thunderstorm
    '11n': '⛈️',  // thunderstorm
    '13d': '❄️',  // snow
    '13n': '❄️',  // snow
    '50d': '🌫️',  // mist
    '50n': '🌫️'   // mist
};

// Error Messages
const ERROR_MESSAGES = {
    NO_API_KEY: 'Please enter your OpenWeatherMap API key first',
    INVALID_API_KEY: 'Invalid API key. Please check your key and try again',
    NETWORK_ERROR: 'Network error. Please check your connection',
    API_ERROR: 'Weather API error. Please try again later',
    LOCATION_ERROR: 'Unable to get location data'
};

// Usage Instructions
/**
 * HOW TO SET UP:
 * 1. Get a free API key from https://openweathermap.org/api
 * 2. Copy this file to config.js in the same directory
 * 3. Replace 'your_openweathermap_api_key_here' with your actual API key
 * 4. The application will automatically use the API key from config.js
 * 
 * ALTERNATIVE METHOD:
 * You can also enter your API key directly in the web interface,
 * which will be stored in localStorage for future use.
 */

// Example of how to use the configuration
// if (typeof WEATHER_CONFIG !== 'undefined' && WEATHER_CONFIG.API_KEY !== 'your_openweathermap_api_key_here') {
//     // Use the configured API key
//     localStorage.setItem('weatherApiKey', WEATHER_CONFIG.API_KEY);
// }