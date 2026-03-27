import CheckBox from '../components/ui/CheckBox'
import ButtonField from '../components/ui/ButtonField'
import ProductCard from '../components/ProductCard'
import type { ProductType } from '../types/ProductTypes'
import { useEffect } from 'react'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { getProducts } from '../functions/ProductFunctions'

function Home() {
	const queryClient = useQueryClient()

	const handleFilters = (target: string, value: string) => {
		const filters: Record<string, string> = {
			name: '',
			min_price: '',
			max_price: '',
			page: '',
			per_page: '',
		}

		let queryParams: string = ''

		queryParams += `&${target}=${value}`

		console.log(queryParams)
	}

	const { data, error, isLoading } = useQuery({
		queryKey: ['products'],
		queryFn: getProducts,
	})

	console.log(data)

	return (
		<main className="bg-background flex-1 p-5 lg:p-10">
			<div className="gap-5 md:grid md:grid-cols-4">
				<div className="hidden bg-white p-5 md:block">
					<h1 className="text-title font-bold md:text-lg">FILTROS</h1>
					<hr className="border-contrast my-5 border-t-2" />
					<div className="flex flex-col gap-3">
						<h2 className="text-title text-sm font-bold md:text-lg">Modelos</h2>
						<div className="flex flex-col gap-2">
							<CheckBox
								label="Estilo"
								onCheckChange={() => handleFilters('name', 'Estilo')}
							/>
						</div>
					</div>
					<ButtonField
						title="Aplicar"
						typeField="contrast"
						className="mt-10 w-full"
					/>
				</div>
				<div className="col-span-3">
					<div className="rounded-sm border border-gray-200 bg-white p-5 shadow-lg">
						<h1 className="text-title text-sm font-bold md:text-lg">
							itens encontrados
						</h1>
					</div>
					<div className="mt-5 grid grid-cols-2 gap-5 lg:grid-cols-3">
						{isLoading ? (
							<p>Carregando calma ai...</p>
						) : (
							data.map((product: ProductType) => (
								<ProductCard
									key={product.id}
									id={product.id}
									productName={product.productName}
									productDescription={product.productDescription}
									priceView={product.priceView}
									imagePublicId={product.imagePublicId}
								/>
							))
						)}
					</div>
				</div>
			</div>
		</main>
	)
}

export default Home
