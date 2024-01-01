class WeatherMapApp {
    constructor() {
        this.map = null;
        this.marker = null;
        this.apiKey = null;
        this.currentWeatherData = null;
        
        this.init();
    }

    init() {
        this.loadApiKey();
        this.initMap();
        this.bindEvents();
        this.updateUI();
    }

    loadApiKey() {
        this.apiKey = localStorage.getItem('weatherApiKey');
        const apiKeyInput = document.getElementById('apiKeyInput');
        if (this.apiKey) {
            apiKeyInput.value = this.apiKey;
        }
    }

    initMap() {
        // Initialize map centered on a default location (London)
        this.map = L.map('map').setView([51.505, -0.09], 13);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(this.map);

        // Add click event listener to the map
        this.map.on('click', (e) => {
            this.handleMapClick(e);
        });
    }

    bindEvents() {
        // API Key management
        document.getElementById('saveApiKey').addEventListener('click', () => {
            this.saveApiKey();
        });

        document.getElementById('clearApiKey').addEventListener('click', () => {
            this.clearApiKey();
        });

        // Clear weather data
        document.getElementById('clearWeather').addEventListener('click', () => {
            this.clearWeatherData();
        });

        // Error modal
        document.getElementById('closeError').addEventListener('click', () => {
            this.hideError();
        });
    }

    saveApiKey() {
        const apiKeyInput = document.getElementById('apiKeyInput');
        const key = apiKeyInput.value.trim();
        
        if (key) {
            this.apiKey = key;
            localStorage.setItem('weatherApiKey', key);
            this.showNotification('API Key saved successfully!');
        } else {
            this.showError('Please enter a valid API key');
        }
    }

    clearApiKey() {
        this.apiKey = null;
        localStorage.removeItem('weatherApiKey');
        document.getElementById('apiKeyInput').value = '';
        this.showNotification('API Key cleared');
    }

    async handleMapClick(e) {
        if (!this.apiKey) {
            this.showError('Please enter your OpenWeatherMap API key first');
            return;
        }

        const { lat, lng } = e.latlng;
        
        // Clear previous marker
        if (this.marker) {
            this.map.removeLayer(this.marker);
        }

        // Add new marker
        this.marker = L.marker([lat, lng])
            .addTo(this.map)
            .bindPopup('Loading weather data...')
            .openPopup();

        try {
            this.showLoading();
            const weatherData = await this.fetchWeatherData(lat, lng);
            this.currentWeatherData = weatherData;
            this.updateWeatherDisplay(weatherData);
            this.updateMarkerPopup(weatherData);
            this.hideLoading();
        } catch (error) {
            this.hideLoading();
            this.showError(`Failed to fetch weather data: ${error.message}`);
            if (this.marker) {
                this.map.removeLayer(this.marker);
                this.marker = null;
            }
        }
    }

    async fetchWeatherData(lat, lng) {
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude=minutely&units=metric&appid=${this.apiKey}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }

    updateWeatherDisplay(weatherData) {
        const weatherInfo = document.getElementById('weatherInfo');
        
        if (!weatherData || !weatherData.current) {
            weatherInfo.innerHTML = '<p class="placeholder">No weather data available</p>';
            return;
        }

        const current = weatherData.current;
        const daily = weatherData.daily?.[0];
        
        weatherInfo.innerHTML = `
            <div class="weather-card">
                <h3>Current Weather</h3>
                <div class="weather-details">
                    <div class="weather-item">
                        <span class="label">Temperature</span>
                        <span class="value">${Math.round(current.temp)}°C</span>
                    </div>
                    <div class="weather-item">
                        <span class="label">Feels Like</span>
                        <span class="value">${Math.round(current.feels_like)}°C</span>
                    </div>
                    <div class="weather-item">
                        <span class="label">Humidity</span>
                        <span class="value">${current.humidity}%</span>
                    </div>
                    <div class="weather-item">
                        <span class="label">Pressure</span>
                        <span class="value">${current.pressure} hPa</span>
                    </div>
                    <div class="weather-item">
                        <span class="label">Wind Speed</span>
                        <span class="value">${current.wind_speed} m/s</span>
                    </div>
                    <div class="weather-item">
                        <span class="label">UV Index</span>
                        <span class="value">${current.uvi}</span>
                    </div>
                </div>
            </div>
            
            ${daily ? `
            <div class="weather-card">
                <h3>Today's Forecast</h3>
                <div class="weather-details">
                    <div class="weather-item">
                        <span class="label">High</span>
                        <span class="value">${Math.round(daily.temp.max)}°C</span>
                    </div>
                    <div class="weather-item">
                        <span class="label">Low</span>
                        <span class="value">${Math.round(daily.temp.min)}°C</span>
                    </div>
                    <div class="weather-item">
                        <span class="label">Conditions</span>
                        <span class="value">${daily.weather[0].main}</span>
                    </div>
                </div>
            </div>
            ` : ''}
        `;
    }

    updateMarkerPopup(weatherData) {
        if (this.marker && weatherData.current) {
            const current = weatherData.current;
            const popupContent = `
                <div style="text-align: center;">
                    <strong>${Math.round(current.temp)}°C</strong><br>
                    ${current.weather[0].description}<br>
                    💧 ${current.humidity}% | 💨 ${current.wind_speed} m/s
                </div>
            `;
            this.marker.setPopupContent(popupContent);
        }
    }

    clearWeatherData() {
        if (this.marker) {
            this.map.removeLayer(this.marker);
            this.marker = null;
        }
        this.currentWeatherData = null;
        document.getElementById('weatherInfo').innerHTML = '<p class="placeholder">Click anywhere on the map to get weather data</p>';
    }

    showLoading() {
        document.getElementById('loadingOverlay').classList.add('visible');
    }

    hideLoading() {
        document.getElementById('loadingOverlay').classList.remove('visible');
    }

    showError(message) {
        document.getElementById('errorMessage').textContent = message;
        document.getElementById('errorModal').classList.add('visible');
    }

    hideError() {
        document.getElementById('errorModal').classList.remove('visible');
    }

    showNotification(message) {
        // Simple notification implementation
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 1rem;
            border-radius: 4px;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 3000);
    }

    updateUI() {
        const hasApiKey = !!this.apiKey;
        document.getElementById('apiKeyInput').value = this.apiKey || '';
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WeatherMapApp();
});

// Error handling for uncaught errors
window.addEventListener('error', (event) => {
    console.error('Uncaught error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});