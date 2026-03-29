import CheckBox from '../components/ui/CheckBox'
import ProductCard from '../components/ProductCard'
import { Field, Label, Select } from '@headlessui/react'
import type { ProductType, ProductFilters } from '../types/ProductTypes'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../functions/ProductFunctions'
import ButtonField from '../components/ui/ButtonField'

const options = [
	{ id: 1, min_price: '', max_price: '', priceView: 'Todos os preços' },
	{
		id: 2,
		min_price: '25',
		max_price: '100',
		priceView: 'R$25,00 - R$100,00',
	},
	{
		id: 3,
		min_price: '10000',
		max_price: '20000',
		priceView: 'R$100,00 - R$200,00',
	},
	{
		id: 4,
		min_price: '20000',
		max_price: '50000',
		priceView: 'R$200,00 - R$500,00',
	},
	{
		id: 5,
		min_price: '50000',
		max_price: '100000',
		priceView: 'R$500,00 - R$1.000,00',
	},
]

function Home() {
	const [selectedOption, setSelectedOption] = useState<number>(1)
	const [Filters, setFilters] = useState<ProductFilters>({
		name: [],
		min_price: '',
		max_price: '',
		page: '1',
		per_page: '10',
	})

	const handleCheckBoxFilters = (
		target: keyof ProductFilters,
		value: string,
		checked: boolean,
	) => {
		setFilters((prev) => ({
			...prev,
			name: checked
				? [...(prev.name || []), value]
				: prev.name?.filter((name) => name !== value) || [],
		}))
	}

	const handleSelectFilters = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const id = parseInt(e.target.value)
		setSelectedOption(id)
		const option = options.find((opt) => opt.id === id)
		if (option) {
			setFilters((prev) => ({
				...prev,
				min_price: option.min_price,
				max_price: option.max_price,
			}))
		}
	}

	const cleanFilters = () => {
		setFilters({
			name: [],
			min_price: '',
			max_price: '',
		})

		handleSelectFilters({
			target: {
				value: '1',
			},
		} as React.ChangeEvent<HTMLSelectElement>)
	}

	console.log(Filters)

	const { data, isError, isLoading } = useQuery({
		queryKey: ['products', Filters],
		queryFn: () => getProducts(Filters),
	})

	console.log(isError, isLoading, data)

	return (
		<main className="bg-background flex-1 overflow-hidden p-5 lg:p-10">
			<div className="items-start gap-5 md:grid md:grid-cols-4">
				<div className="hidden bg-white p-5 md:block">
					<h1 className="text-title font-bold md:text-lg">FILTROS</h1>
					<hr className="border-contrast my-5 border-t-2" />
					<div className="flex flex-col gap-3">
						<h2 className="text-title text-sm font-bold md:text-lg">Modelos</h2>
						<div className="flex flex-col gap-2">
							<CheckBox
								label="Estilo"
								onCheckChange={(checked) =>
									handleCheckBoxFilters('name', 'Estilo', checked)
								}
							/>
							<CheckBox
								label="Asteca"
								onCheckChange={(checked) =>
									handleCheckBoxFilters('name', 'Asteca', checked)
								}
							/>

							<hr className="my-5 border-t-2 border-gray-200" />

							<Field className="flex flex-col gap-2">
								<Label className="text-sm font-bold">Filtrar por valor</Label>
								<Select
									value={selectedOption}
									onChange={handleSelectFilters}>
									{options.map((opt) => (
										<option
											key={opt.id}
											value={opt.id}>
											{opt.priceView}
										</option>
									))}
								</Select>
							</Field>
						</div>
					</div>
				</div>
				<div className="col-span-3 min-w-0">
					<div className="rounded-sm border border-gray-200 bg-white p-5 shadow-lg">
						<h1 className="text-title text-sm font-bold md:text-lg">
							itens encontrados
						</h1>
					</div>
					<div className="mt-5 flex gap-5 overflow-hidden">
						{isError ? (
							<div className="flex w-full flex-col items-center gap-5 border-gray-200 bg-white p-5 shadow-lg">
								<h1 className="text-contrast text-2xl font-bold">
									Produtos não encontrados
								</h1>

								<p className="text-subtitle mt-2 text-sm">
									Ops! Não conseguimos encontrar produtos com esses filtros.
								</p>

								<hr className="my-2 w-full border-t-2 border-gray-200" />
								<ButtonField
									title="Limpar Filtros"
									typeField="contrast"
									onClick={cleanFilters}
								/>
							</div>
						) : isLoading ? (
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
