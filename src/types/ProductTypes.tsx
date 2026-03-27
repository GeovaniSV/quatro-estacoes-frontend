type ProductType = {
	id?: number
	productName: string
	productDescription: string
	productPrice?: number
	priceView?: number
	imagePublicId: string
}

interface ProductFilters {
	name?: string
	min_price?: string
	max_price?: string
}

export type { ProductType, ProductFilters }
