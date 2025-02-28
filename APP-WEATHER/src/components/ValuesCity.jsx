import { useWeatherStore } from "../store/weatherStore";

const ValuesCity = () => {
  const { weather } = useWeatherStore();
  
  if (!weather || !weather.data) {
    return <p className="text-center">Carregando dados do clima...</p>;
  }

  const src = `http://openweathermap.org/img/wn/${weather.data.weather[0].icon}.png`;

  return (
    <div className="d-flex justify-content-center">
      <div className="bg-secondary-subtle rounded-3 w-50">

            <div className="mt-3">
            <p className="fw-bolder fs-3 text-center">{weather.data.name}</p>
            </div>

            <div>
            <p className="fw-bolder fs-1 mb-0 text-center">
                {" "}
                <img style={{height:'90px'}} src={src} alt={`Imagem da cidade ${weather.data.name}`} />
                {Math.round(weather.data.main.temp)}°C
            </p>
            </div>

            <div className="mt-1">
                <p className="fw-semibold fs-5 text-center">{weather.data.weather[0].description}</p>
            </div>

            <div className="d-flex justify-content-around mt-5 fs-5 fw-semibold">
                <div>
                    <p className="">Sensação Térmica:{weather.data.main.feels_like}°C</p>
                </div>
                <div>
                    <p>Umidade:{weather.data.main.humidity}%</p>
                </div>
                <div>
                    <p className="me-2">Pressão:{weather.data.main.pressure}hPa</p>
                </div>
            </div>

      </div>
    </div>
  );
};

export default ValuesCity;
