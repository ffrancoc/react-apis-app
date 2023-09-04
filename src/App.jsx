import { RickAndMortyAPI } from "./components/RickAndMortyAPI"
import { WeatherAPI } from "./components/WeatherAPI"

export const App = () => {
  return (
    <div className="app-container">
      {/* <RickAndMortyAPI /> */}
      <WeatherAPI />
    </div>
  )
}

