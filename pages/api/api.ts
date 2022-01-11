import axios from "axios"

export const ProjectsJob = (query:string) => {
  return axios.get(`https://imdb-api.com/en/API/SearchMovie/k_0m5jc69n/${query}`, {
  
  })
}