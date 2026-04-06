import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../functions/ProductFunctions'
import type { ProductFilters } from '../types/ProductTypes'

export function useProducts(filters: ProductFilters) {
	return useQuery({
		queryKey: ['products', filters],
		queryFn: () => getProducts(filters),
	})
}
