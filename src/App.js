import {useState} from 'react'
import axios from 'axios'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import './App.css'

const GEOCODING_API_URL = 'https://api.openweathermap.org/geo/1.0/direct'
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '535f7ab029b8b2e463f8c8b9a08a790e'

const convertToFahrenheit = celsius => (celsius * 9) / 5 + 32

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = async city => {
    setLoading(true)
    try {
      setError('')
      setWeatherData(null)

      console.log(`Searching for city: ${city}`)

      const geoResponse = await axios.get(GEOCODING_API_URL, {
        params: {
          q: city,
          limit: 1,
          appid: API_KEY,
        },
      })

      console.log('Geocoding API response:', geoResponse.data)

      if (geoResponse.data.length === 0) {
        throw new Error('City not found')
      }

      const {lat, lon, state, name} = geoResponse.data[0]

      console.log(`Coordinates for ${city}: Latitude=${lat}, Longitude=${lon}`)

      const weatherResponse = await axios.get(WEATHER_API_URL, {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: 'metric',
        },
      })

      console.log('Weather API response:', weatherResponse.data)

      const weather = {
        location: `${name}, ${state || 'Unknown State'}`,
        temperature: {
          celsius: weatherResponse.data.main.temp,
          fahrenheit: convertToFahrenheit(weatherResponse.data.main.temp),
        },
        dateTime: new Date(weatherResponse.data.dt * 1000).toLocaleString(),
      }

      setWeatherData(weather)
    } catch (err) {
      console.error('Error fetching weather data:', err)
      if (err.response && err.response.status === 404) {
        setError('Error fetching data')
      } else {
        setError('City not found / Please Enter a Main City Near by You.')
      }
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherDisplay data={weatherData} />}
      <Footer />
    </div>
  )
}

export default App
