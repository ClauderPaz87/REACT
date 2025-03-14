import "./style.css";
import ValuesCity from "../../components/ValuesCity";
import ValuesCityDay from "../../components/ValuesCityDay";
import { useRef } from "react";
import { useWeatherStore } from "../../store/WeatherStore.jsx";
import axios from "axios";

function App() {
  const inputCity = useRef('')
  const {apiData,apiDataDay,weather,weatherDay} = useWeatherStore()

  const searchCity = async (e)=>{
    e.preventDefault()
    const city = inputCity.current.value
    const key = "33d0cb806c46ea4ad2a90ca42631c058"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const urlDay = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const data = await axios.get(url)
    const dataDay = await axios.get(urlDay)
    apiData(data)
    apiDataDay(dataDay)
   
  }

  return (
    <div>
      <div className="mt-4">

        <form onSubmit={searchCity}>
          <div className="d-flex justify-content-center">
            <h1 style={{ color: "white" }} className="fw-bolder">
              Previsão do Tempo
            </h1>
          </div>
          <div className="input-group mb-3 mt-4 d-flex justify-content-center">
            <input
              ref={inputCity}
              type="text"
              className="w-25 border-0 rounded-pill rounded-end p-2"
              placeholder="Nome da cidade"
            />
            <button
              style={{ color: "white" }}
              className="rounded-pill rounded-start p-2 btn btn-warning"
              type="submit"
              id="button-addon2"
            >
              Buscar
            </button>
          </div>
        </form>

        {weather ? <ValuesCity/>: ''}
        {weatherDay ? <ValuesCityDay/>: ''}

      </div>
    </div>
  );
}

export default App;
