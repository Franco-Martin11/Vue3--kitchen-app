import type { Meal, StepMeasure } from '@/types/apiData'

export const FilteredData = (dataArr: Meal[]) => {
  const Filter = dataArr.map((element: Meal): StepMeasure => {
    const strIngredients = []
    const strMeasure = []

    for (let index = 1; index <= 20; index++) {
      const ingredientKey = `strIngredient${index}`
      const measureKey = `strMeasure${index}`

      const ingredientValue = element[ingredientKey]?.trim()
      const measureValue = element[measureKey]?.trim()

      if (ingredientValue !== '') {
        strIngredients.push(ingredientValue)
      }

      if (measureValue !== '') {
        strMeasure.push(measureValue)
      }
    }

    const filteredElement: StepMeasure = {
      // ...element,
      strIngredients,
      strMeasure
    }

    return filteredElement
  })

  return Filter
}
