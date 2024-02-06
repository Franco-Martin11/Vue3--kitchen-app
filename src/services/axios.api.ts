import type { ApiUrls } from '@/types/apiData'
import axios from 'axios'

//example
const baseUrl = import.meta.env.VITE_BASE_URL
const $axios = axios.create({
  baseURL: baseUrl,
  timeout: 1000
})

export default $axios

export const apiUrls: ApiUrls = {
  searchMealByName: (name) => `/search.php?s=${name}`,
  listAllMealsByFirstLetter: (firstLetter) => `/search.php?f=${firstLetter}`,
  lookupMealById: (id) => `/lookup.php?i=${id}`,
  lookupRandomMeal: () => 'random.php',
  listAllMealCategories: () => '/categories.php',
  listAllCategories: () => '/list.php?c=list',
  listAllAreas: () => '/list.php?a=list',
  listAllIngredients: () => '/list.php?i=list',
  filterByMainIngredient: () => '/filter.php?i=chicken_breast',
  filterByCategory: () => '/filter.php?c=Seafood',
  filterByArea: () => '/filter.php?a=Canadian'
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

