import axios from 'axios'

export const openWeatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather?APPID=ca85377a4d275b5c10cc75addd3f1695&units=metric'
})

export const api = axios.create({
  baseURL: 'https://citieslist.herokuapp.com/cities'
})