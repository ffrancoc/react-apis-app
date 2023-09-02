import PropTypes from 'prop-types'
import { getCharacterInfo, getEpisodeInfo, getLocationInfo } from "../helpers/apiRickAndMorty"

export const RickAndMortyAPI = ({episodeId, characterId, locationId}) => {

  const fetchEpisodeInfo = async () => {
    const data = await getEpisodeInfo(episodeId)
    console.log(data)
  }

  const fetchCharacterInfo = async () => {
    const data = await getCharacterInfo(characterId)
    console.log(data)
  }

  const fetchLocationInfo = async () => {
    const data = await getLocationInfo(locationId)
    console.log(data)
  }

  fetchEpisodeInfo()
  fetchCharacterInfo()
  fetchLocationInfo()
  
  return (
    <div>
        <h1>RickAndMortyAPI</h1>
    </div>
  )
}

RickAndMortyAPI.propTypes = {
  episodeId: PropTypes.number.isRequired,
  characterId: PropTypes.number.isRequired,
  locationId: PropTypes.number.isRequired
}

RickAndMortyAPI.defaultProps = {
  episodeId: 1,
  characterId: 1,
  locationId: 1,
}