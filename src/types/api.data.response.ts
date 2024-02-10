export interface Meal extends RecipeInformation {
  idMeal: string
  strMeal: string
  strDrinkAlternate: string | null
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  strTags: string
  strYoutube: string
  strSource: string | null
  strImageSource: string | null
  strCreativeCommonsConfirmed: string | null
  dateModified: string | null
}

export interface MealsResponse {
  meals: Meal[]
}
type Ingredient = string | number | null

export interface RecipeInformation {
  strIngredient1: Ingredient
  strIngredient2: Ingredient
  strIngredient3: Ingredient
  strIngredient4: Ingredient
  strIngredient5: Ingredient
  strIngredient6: Ingredient
  strIngredient7: Ingredient
  strIngredient8: Ingredient
  strIngredient9: Ingredient
  strIngredient10: Ingredient
  strIngredient11: Ingredient
  strIngredient12: Ingredient
  strIngredient13: Ingredient
  strIngredient14: Ingredient
  strIngredient15: Ingredient
  strIngredient16: Ingredient
  strIngredient17: Ingredient
  strIngredient18: Ingredient
  strIngredient19: Ingredient
  strIngredient20: Ingredient
  strMeasure1: Ingredient
  strMeasure2: Ingredient
  strMeasure3: Ingredient
  strMeasure4: Ingredient
  strMeasure5: Ingredient
  strMeasure6: Ingredient
  strMeasure7: Ingredient
  strMeasure8: Ingredient
  strMeasure9: Ingredient
  strMeasure10: Ingredient
  strMeasure11: Ingredient
  strMeasure12: Ingredient
  strMeasure13: Ingredient
  strMeasure14: Ingredient
  strMeasure15: Ingredient
  strMeasure16: Ingredient
  strMeasure17: Ingredient
  strMeasure18: Ingredient
  strMeasure19: Ingredient
  strMeasure20: Ingredient
}
export interface StepMeasure {
  strIngredients: string[]
  strMeasure: string[]
}

export interface ApiUrls {
  searchMealByName: (name?: string) => string
  listAllMealsByFirstLetter: (firstLetter: string) => string
  lookupMealById: () => string
  lookupRandomMeal: () => string
  listAllMealCategories: () => string
  listAllCategories: () => string
  listAllAreas: () => string
  listAllIngredients: () => string
  filterByMainIngredient: () => string
  filterByCategory: () => string
  filterByArea: () => string
}

export interface MealCategory {
  strCategory: string
}

export interface MealCategoriesResponse {
  meals: MealCategory[]
}

export interface FilterMealByCategory {
  strMeal: string
  strMealThumb: string
  idMeal: string
}

export interface FilterMealByCategoryResponse {
  meals: FilterMealByCategory[]
}
