import { useState, useRef } from 'react'
import axios from 'axios' 
import './App.css'
import './index.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'
import WeatherInformations5Days from './components/WeatherInformations5Days/WeatherInformations5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()

  const inputRef = useRef()

  async function searchCity (){
    const city = inputRef.current.value
    const key = "103d67355dd1f674faad81b3d03e4078"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)

    setWeather(apiInfo.data)
    setWeather5Days(apiInfo5Days.data)

    console.log(apiInfo5Days.data)

  }

  return (

    
    
    <div className='container'>
      <h1>DEV PREVISÃO DO TEMPO</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations  weather={weather}/>}
      {weather5Days && <WeatherInformations5Days  weather5Days={weather5Days}/>}
    </div>
  )
}

export default App
