import { api } from '../services/api'

export const getProducts = async () => {
	try {
		const { data } = await api.get('/products?page=1&limit=10')

		return data.data
	} catch (error) {
		console.log(error)
	}
}
