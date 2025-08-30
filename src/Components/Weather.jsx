import React, { useEffect, useState } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=YOUR_API_KEY`
      )
        .then((res) => res.json())
        .then((data) =>
          setWeather({
            temp: data.main.temp,
            city: data.name,
            condition: data.weather[0].description,
          })
        );
    });
  }, []);

  return (
    <div className="widget">
      <h2>☁ Weather</h2>
      {weather ? (
        <p>
          {weather.city}: {weather.temp}°C ({weather.condition})
        </p>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}
