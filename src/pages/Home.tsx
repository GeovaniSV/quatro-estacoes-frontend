import CheckBox from '../components/ui/CheckBox'
import ButtonField from '../components/ui/ButtonField'
import ProductCard from '../components/ProductCard'
import type { ProductType, ProductFilters } from '../types/ProductTypes'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../functions/ProductFunctions'

function Home() {
	const [Filters, setFilters] = useState<ProductFilters>({
		name: '',
		min_price: '',
		max_price: '',
		page: '1',
		per_page: '10',
	})

	const handleFilters = (
		target: keyof ProductFilters,
		value: string,
		checked: boolean,
	) => {
		setFilters((prev) => ({
			...prev,
			[target]: checked ? value : '',
		}))
	}

	const { data, isLoading } = useQuery({
		queryKey: ['products', Filters],
		queryFn: () => getProducts(Filters),
	})

	console.log(data)

	return (
		<main className="bg-background flex-1 overflow-hidden p-5 lg:p-10">
			<div className="gap-5 md:grid md:grid-cols-4">
				<div className="hidden bg-white p-5 md:block">
					<h1 className="text-title font-bold md:text-lg">FILTROS</h1>
					<hr className="border-contrast my-5 border-t-2" />
					<div className="flex flex-col gap-3">
						<h2 className="text-title text-sm font-bold md:text-lg">Modelos</h2>
						<div className="flex flex-col gap-2">
							<CheckBox
								label="Estilo"
								onCheckChange={(checked) =>
									handleFilters('name', 'Estilo', checked)
								}
							/>
							<CheckBox
								label="Asteca"
								onCheckChange={(checked) =>
									handleFilters('name', 'Asteca', checked)
								}
							/>
						</div>
					</div>
					<ButtonField
						title="Aplicar"
						typeField="contrast"
						className="mt-10 w-full"
					/>
				</div>
				<div className="col-span-3 min-w-0">
					<div className="rounded-sm border border-gray-200 bg-white p-5 shadow-lg">
						<h1 className="text-title text-sm font-bold md:text-lg">
							itens encontrados
						</h1>
					</div>
					<div className="mt-5 flex gap-5 overflow-hidden">
						{isLoading ? (
							<p>Carregando calma ai...</p>
						) : (
							<>
								{/* Mobile: 2 colunas */}
								<div className="flex w-full gap-5 lg:hidden">
									<div className="flex flex-1 flex-col gap-5">
										{data
											.filter((_: ProductType, i: number) => i % 2 === 0)
											.map((product: ProductType) => (
												<ProductCard
													key={product.id}
													id={product.id}
													productName={product.productName}
													productDescription={product.productDescription}
													priceView={product.priceView}
													imagePublicId={product.imagePublicId}
													productLink={`/product/${product.id}`}
												/>
											))}
									</div>
									<div className="flex flex-1 flex-col gap-5">
										{data
											.filter((_: ProductType, i: number) => i % 2 === 1)
											.map((product: ProductType) => (
												<ProductCard
													key={product.id}
													id={product.id}
													productName={product.productName}
													productDescription={product.productDescription}
													priceView={product.priceView}
													imagePublicId={product.imagePublicId}
													productLink={`/product/${product.id}`}
												/>
											))}
									</div>
								</div>

								{/* Desktop: 3 colunas */}
								<div className="hidden w-full gap-5 lg:flex">
									<div className="flex flex-1 flex-col">
										{data
											.filter((_: ProductType, i: number) => i % 3 === 0)
											.map((product: ProductType) => (
												<ProductCard
													key={product.id}
													id={product.id}
													productName={product.productName}
													productDescription={product.productDescription}
													priceView={product.priceView}
													imagePublicId={product.imagePublicId}
													productLink={`/product/${product.id}`}
												/>
											))}
									</div>
									<div className="flex flex-1 flex-col">
										{data
											.filter((_: ProductType, i: number) => i % 3 === 1)
											.map((product: ProductType) => (
												<ProductCard
													key={product.id}
													id={product.id}
													productName={product.productName}
													productDescription={product.productDescription}
													priceView={product.priceView}
													imagePublicId={product.imagePublicId}
													productLink={`/product/${product.id}`}
												/>
											))}
									</div>
									<div className="flex flex-1 flex-col">
										{data
											.filter((_: ProductType, i: number) => i % 3 === 2)
											.map((product: ProductType) => (
												<ProductCard
													key={product.id}
													id={product.id}
													productName={product.productName}
													productDescription={product.productDescription}
													priceView={product.priceView}
													imagePublicId={product.imagePublicId}
													productLink={`/product/${product.id}`}
												/>
											))}
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}

export default Home
