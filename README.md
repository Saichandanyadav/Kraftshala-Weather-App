# Weather App

This Weather App allows users to search for the current weather conditions in
any city. The application displays the temperature in both Celsius and
Fahrenheit, along with the date and time of the weather data. Users can also
switch between light and dark modes.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Approach](#approach)
- [Manual on How to Get Weather Data](#manual-on-how-to-get-weather-data)
- [Known Issues or Limitations](#known-issues-or-limitations)

## Technologies Used

- **React**: For building the user interface.
- **Axios**: For making HTTP requests to the OpenWeather API.
- **CSS**: For styling the application, with media queries for responsiveness.
- **OpenWeather API**: For fetching weather data and geolocation data.
- **HTML**: For the structure of the web application.

## Setup and Installation

Follow these steps to set up and run the application locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:** Make sure you have [Node.js](https://nodejs.org/)
   installed.

   ```bash
   npm install
   ```

3. **Get API Key:** Sign up at [OpenWeather](https://openweathermap.org/) to get
   an API key. Update the `API_KEY` constant in the `App.js` file with your API
   key.

## Running the Application

1. **Start the development server:**

   ```bash
   npm start
   ```

2. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## Approach

### Overall Approach

- **Component-based Architecture**: The application is built using a
  component-based approach in React, which allows for reusability and easier
  maintenance.
- **API Integration**: The application fetches geolocation data and weather data
  from the OpenWeather API.
- **Responsive Design**: CSS media queries ensure that the application is usable
  on different screen sizes, including desktops, tablets, and mobile devices.
- **Error Handling**: The application handles various errors such as invalid
  city names and network issues, providing appropriate feedback to the user.

### Key Components

- **Header**: Contains the title and dark mode toggle.
- **SearchBar**: Allows users to enter a city name and search for its weather.
- **WeatherDisplay**: Shows the fetched weather data.
- **ErrorMessage**: Displays error messages to the user.
- **Footer**: Contains developer information and copyright notice.
- **Loader**: Displays a loading spinner while data is being fetched.

## Manual on How to Get Weather Data

1. **Open the Application**: Once the application is running, open it in your
   web browser at `http://localhost:3000`.

2. **Enter a City Name**: In the search bar at the top of the page, enter the
   name of the city for which you want to check the weather. Example:

3. **Click the Search Button**: Click on the "Search" button next to the input
   field. The application will fetch the weather data for the entered city.

4. **View the Weather Data**:

   - **Current Location**: The city and state (if available) will be displayed.
   - **Temperature**: The current temperature will be displayed in both Celsius
     and Fahrenheit.
   - **Date and Time**: The date and time when the weather data was retrieved
     will be shown.

5. **Error Handling**: If an invalid city name is entered or if there are
   network issues, an appropriate error message will be displayed below the
   search bar.

## Known Issues or Limitations

- **API Rate Limiting**: The OpenWeather API has a rate limit which might
  restrict the number of requests that can be made in a given time frame.
- **City Not Found**: If the city name is misspelled or not found in the
  OpenWeather database, an error message is displayed.
- **Geolocation Accuracy**: The accuracy of the geolocation data is dependent on
  the OpenWeather API.
- **HTTPS Requirement**: The application requires HTTPS for API calls in
  production. Ensure the deployed URL uses HTTPS to avoid mixed content issues.

---

-----------------------------Thank You-----------------------------------------
