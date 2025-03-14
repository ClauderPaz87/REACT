import { useWeatherStore } from "../store/WeatherStore.jsx";

const ValuesCityDay = () => {
  const { weatherDay } = useWeatherStore();
  const forecasts = weatherDay[0].data.list;
  let dailyForeCast = {};
  
  forecasts.forEach((forecast, index) => {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForeCast[date]) {
      dailyForeCast[date] = forecast;
    }
  });

  const fiveDay = Object.values(dailyForeCast).slice(0, 5);
  
  const convertDate = (date)=>{
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday: 'long', day:'2-digit'})
    return newDate
  } 

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="d-flex justify-content-center bg-secondary-subtle rounded-3 w-50">
        {fiveDay.map((fore) => (
          <div className="ms-4" key={fore.dt}>
            <p>{convertDate(fore)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${fore.weather[0].icon}.png`}
            />
            <p>{fore.weather[0].description}</p>
            <p>{Math.round(fore.main.temp_min)}°C / {Math.round(fore.main.temp_max)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesCityDay;
