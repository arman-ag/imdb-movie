import axios from "axios"

export const topMovieList = () => {
  return axios.get(`https://imdb-api.com/en/API/Top250Movies/k_0m5jc69n`)
}