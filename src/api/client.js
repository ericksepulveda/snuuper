const data = {
  electronics: require('./data/electronics.json'),
  movies: require('./data/movies.json'),
  videogames:  require('./data/videogames.json')
}

/* Async es overkill pero para simular llamada a API */
export async function get(s) {
  if ( Object.keys(data).indexOf(s) < 0 )
    throw Error("Not supported.")
  return data[s]
}

export async function categories() {
  return Object.keys(data)
}