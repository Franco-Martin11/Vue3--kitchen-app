import axios from 'axios'

//example
const baseUrl = import.meta.env.BASE_URL
const $axios = axios.create({
  baseURL: baseUrl
})

export default $axios

// export const mealApi = axios.create({
//   baseURL: baseUrl,
//   timeout: 1000,
// });
