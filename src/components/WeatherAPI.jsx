import { useState } from 'react'
import PropTypes from 'prop-types'
import { getWeatherInfo } from "../helpers/apiWeather"
import { useEffect } from 'react'

export const WeatherAPI = ({countryCode}) => {

    const [weatherInfo, setWeatherInfo] = useState({})

    const fetchWeatherInfo = async () => {
        const  {current} = await getWeatherInfo(countryCode)
        return current
    }

    useEffect(() => {

        fetchWeatherInfo().then(data => {
            setWeatherInfo(data.condition)
            // console.log(data)
        })        
    })

    fetchWeatherInfo()

  return (
    <div>
        <h3>WeatherAPI</h3>
        <p>Clima hoy <strong>{countryCode}</strong> {weatherInfo.text} <span><img src={weatherInfo.icon} alt="icon" /></span> </p>
    </div>
  )
}

WeatherAPI.propTypes = {
    countryCode: PropTypes.string.isRequired
}

WeatherAPI.defaultProps = {
    countryCode: 'Guatemalan'
}
