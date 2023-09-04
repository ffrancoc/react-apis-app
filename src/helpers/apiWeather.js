

export const getWeatherInfo = async (countryCode) => {
  const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API}&q=${countryCode}`)

  const data = await result.json()
  return data
}
