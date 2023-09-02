

export const getEpisodeInfo = async (episodeId) => {

// Validar episodio máximo permitido por la API REST
if (episodeId > 51) return {} 

  const result = await fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
  const response = await result.json()
  return response
}


export const getCharacterInfo = async (characterId) => {
    
    // Validar el número máximo de personaje permitido por la API REST
    if (characterId > 826 ) return {} 

    const result = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
    const response = await result.json()
    return response
}


export const getLocationInfo = async (locationId) => {
    // Validar el número máximo de location permitido por la API REST
    if (locationId > 126 ) return {}

    const result = await fetch(`https://rickandmortyapi.com/api/location/${locationId}`)
    const response = await result.json()
    return response
}