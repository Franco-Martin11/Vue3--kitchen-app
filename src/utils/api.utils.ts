import { apiUrls } from '@/services/axios.api'

export const apiURLEndpoint = (
  id: string | number | string[]
): { url: string; params: { i?: number; s?: string } } => {
  if (typeof id === 'number') {
    return { url: apiUrls.lookupMealById(), params: { i: id } }
  } else if (typeof id === 'string') {
    if (!isNaN(Number(id))) {
      return { url: apiUrls.lookupMealById(), params: { i: Number(id) } }
    } else {
      return { url: apiUrls.searchMealByName(), params: { s: id } }
    }
  }

  return { url: '', params: {} }
}
