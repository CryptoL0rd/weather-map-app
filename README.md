# Interactive Weather Map

A responsive web application that displays an interactive map with weather information using Leaflet.js and OpenWeatherMap API.

## Features

- **Interactive Map**: Built with Leaflet.js and OpenStreetMap tiles
- **Weather Data**: Real-time weather information from OpenWeatherMap One Call API 3.0
- **Responsive Design**: Mobile-first approach with responsive layout
- **API Key Management**: Secure storage of API keys using localStorage
- **Error Handling**: Comprehensive error handling for API calls and user interactions
- **Click Events**: Click anywhere on the map to get weather data for that location

## Setup Instructions

1. **Get API Key**: 
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account and get your API key

2. **Configure Application**:
   - Option 1: Enter your API key directly in the web interface
   - Option 2: Create `config/config.js` from `config/config.example.js` and add your API key

3. **Run the Application**:
   - Open `index.html` in a web browser
   - Enter your API key when prompted
   - Click anywhere on the map to get weather data

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

## License

This project is open source and available under the MIT License.