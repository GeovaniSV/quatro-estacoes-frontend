import { api } from '../services/api'
import type { ProductFilters } from '../types/ProductTypes'

export const getProducts = async (filters: ProductFilters) => {
	const params = new URLSearchParams()
	if (filters.name) {
		filters.name.forEach((name) => params.append('name[]', name))
	}
	if (filters.min_price) params.append('min_price', filters.min_price)
	if (filters.max_price) params.append('max_price', filters.max_price)
	if (filters.page) params.append('page', filters.page)
	if (filters.per_page) params.append('per_page', filters.per_page)

	console.log(params.toString())

	try {
		const { data } = await api.get('/products', {
			params,
		})

		return data.data
	} catch (error) {
		console.log(error)
	}
}
