# 🌤️ Interactive Weather Map

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://cryptol0rd.github.io/weather-map-app/)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://cryptol0rd.github.io/weather-map-app/)

A responsive web application that displays an interactive map with weather information using Leaflet.js and OpenWeatherMap API.

## 🚀 Live Demo

**Try it now:** [https://cryptol0rd.github.io/weather-map-app/](https://cryptol0rd.github.io/weather-map-app/)

### What Works Without API Key:
- ✅ Interactive map navigation
- ✅ Click anywhere to see coordinates
- ✅ Map markers with location data
- ✅ Responsive design on all devices

### Weather Features (Requires API Key):
- 🌡️ Real-time temperature data
- 💧 Humidity and pressure readings
- 💨 Wind speed and direction
- ☀️ UV index information
- 📅 Daily weather forecasts
- 🌦️ Weather condition icons

## Features

- **Interactive Map**: Built with Leaflet.js and OpenStreetMap tiles
- **Weather Data**: Real-time weather information from OpenWeatherMap One Call API 3.0
- **Responsive Design**: Mobile-first approach with responsive layout
- **API Key Management**: Secure storage of API keys using localStorage
- **Error Handling**: Comprehensive error handling for API calls and user interactions
- **Click Events**: Click anywhere on the map to get weather data for that location

## Setup Instructions

### Quick Start (No API Key Needed)
1. **Visit the Live Demo**: [https://cryptol0rd.github.io/weather-map-app/](https://cryptol0rd.github.io/weather-map-app/)
2. **Explore the Map**: Click anywhere to see coordinates and location data
3. **Basic Features**: All map functionality works without any setup

### Enable Weather Features (API Key Required)
1. **Get API Key**: 
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account and get your API key (free tier available)

2. **Configure Application**:
   - **Option 1 (Recommended)**: Enter your API key directly in the web interface
     - Open the application
     - Enter your API key in the header input field
     - Click "Save API Key" - it will be stored securely in your browser
   
   - **Option 2**: Advanced configuration via config file
     - Create `config/config.js` from `config/config.example.js`
     - Replace `'your_openweathermap_api_key_here'` with your actual API key
     - The application will automatically use this configuration

3. **Start Using Weather Features**:
   - Once API key is configured, click anywhere on the map
   - Enjoy real-time weather data for any location worldwide!

## File Structure

```
├── index.html          # Main HTML file
├── styles/
│   └── main.css        # CSS styles with responsive design
├── scripts/
│   └── app.js          # JavaScript functionality
├── config/
│   └── config.example.js # Example configuration file
└── README.md          # This file
```

## Technologies Used

- **Leaflet.js**: Interactive maps
- **OpenWeatherMap API**: Weather data
- **Vanilla JavaScript**: Application logic
- **CSS3**: Responsive styling
- **HTML5**: Semantic markup

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Deployment Status

✅ **Live on GitHub Pages**: This application is successfully deployed and accessible at [https://cryptol0rd.github.io/weather-map-app/](https://cryptol0rd.github.io/weather-map-app/)

The deployment includes:
- Automatic builds from the main branch
- HTTPS secure connection
- Global CDN distribution
- Mobile-responsive design

## Troubleshooting

**Common Issues:**
- **Weather data not loading**: Ensure you have a valid OpenWeatherMap API key
- **Map not loading**: Check your internet connection
- **API key errors**: Verify your API key is correct and has proper permissions

**Need Help?**
- Check the OpenWeatherMap API documentation
- Ensure your API key has access to the One Call API 3.0
- Free accounts may have rate limits - consider upgrading if needed

## License

This project is open source and available under the MIT License.