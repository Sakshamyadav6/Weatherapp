import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";  
import axios from "axios";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0cd375c47bba01e4e3b9e18a78a8b958&units=metric`
      );
      setWeather(response.data);
      setError(null); 
    } catch (error) {
      setError("Opps! City Not Found😥");
      setWeather(null);  
    }
  };

  const handleKeyPress = (event:any) => {
    if (event.key === "Enter") {
      fetchWeatherData();
    }
  };

  return (
    <>
      <TextField
        id="standard-basic"
        label="Enter Your City Name"
        variant="standard"
        style={{ width: "600px", marginBottom: "150px" }}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <br />
      {!weather && (
        <Button variant="contained" color="info" onClick={fetchWeatherData}>
          Search
        </Button>
      )}
      {error && <h1 style={{color:'red'}}>{error}</h1>} 
      {weather && (
        <div>
          <h2>Weather in {weather.name}😊</h2>
          <p>Temperature: {weather.main.temp}°C</p>
                  <p>Weather: {weather.weather[0].description}</p>
                  <h5>Have a good day!🥰</h5>
        </div>
      )}
    </>
  );
};

export default Home;
