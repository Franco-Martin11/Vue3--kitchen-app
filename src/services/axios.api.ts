import type { ApiUrls } from '@/types/api.data.response'
import axios from 'axios'

//example
const baseUrl = import.meta.env.VITE_BASE_URL
const $axios = axios.create({
  baseURL: baseUrl,
  timeout: 1000
})

export default $axios

export const apiUrls: ApiUrls = {
  searchMealByName: (name) => (name ? `/search.php?s=${name}` : '/search.php?'),
  listAllMealsByFirstLetter: (firstLetter) => `/search.php?f=${firstLetter}`,
  lookupMealById: () => `/lookup.php`,
  lookupRandomMeal: () => 'random.php',
  listAllMealCategories: () => '/categories.php',
  listAllCategories: () => '/list.php',
  listAllAreas: () => '/list.php?a=list',
  listAllIngredients: () => '/list.php?i=list',
  filterByMainIngredient: () => '/filter.php?i=chicken_breast',
  filterByCategory: () => '/filter.php',
  filterByArea: () => '/filter.php'
}

// export const getData = async () => {
//   const response: AxiosResponse<MealsResponse> = await axios.get(
//     'https://www.themealdb.com/api/json/v1/1/lookup.php',
//     {
//       params: {
//         i: 52772
//       }
//     }
//   )

//   const dataArr = response.data.meals

//   if (dataArr === null) {
//     return null
//   }

//   const filterData = dataArr.map((element: Meal) => {
//     const strIngredients: string[] = []
//     const strMeasure: string[] = []

//     for (let index = 1; index <= 20; index++) {
//       const ingredientKey = `strIngredient${index}`
//       const measureKey = `strMeasure${index}`

//       const ingredientValue = element[ingredientKey]?.trim()
//       const measureValue = element[measureKey]?.trim()

//       if (ingredientValue !== '') {
//         strIngredients.push(ingredientValue)
//       }

//       if (measureValue !== '') {
//         strMeasure.push(measureValue)
//       }
//     }

//     const filteredElement: Meal = {
//       ...element,
//       strIngredients,
//       strMeasure
//     }

//     return filteredElement
//   })
//   console.log(filterData)
//   return filterData
// }
