import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { api } from '../services/api'
import type { ProductType } from '../types/ProductTypes'
import CheckBox from '../components/ui/CheckBox'
import ButtonField from '../components/ui/ButtonField'

function Home() {
	const [products, setProducts] = useState<ProductType[]>([])

	console.log(products.map((product) => product.product_name))

	useEffect(() => {
		const getProducts = async () => {
			try {
				const { data } = await api.get('/products?page=1&limit=10')

				setProducts(data.data)
				console.log(data)
			} catch (error) {
				console.log(error)
			}
		}

		getProducts()
	}, [])
	return (
		<main className="bg-background flex-1 p-5 lg:p-10">
			<div className="gap-5 md:grid md:grid-cols-4">
				<div className="hidden bg-white p-5 md:block">
					<h1 className="text-title font-bold md:text-lg">FILTROS</h1>
					<hr className="border-contrast my-5 border-t-2" />
					<div className="flex flex-col gap-3">
						<h2 className="text-title text-sm font-bold md:text-lg">Modelos</h2>
						<div className="flex flex-col gap-2">
							<CheckBox label="Estilo" />
							<CheckBox label="Pilão" />
							<CheckBox label="Vietnã" />
							<CheckBox label="Copo" />
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
							{products.length} itens encontrados
						</h1>
					</div>
					<div className="mt-5 grid grid-cols-2 gap-5 lg:grid-cols-3">
						{products.map((product) => (
							<ProductCard
								key={product.id}
								id={product.id}
								product_name={product.product_name}
								product_description={product.product_description}
								price_view={product.price_view}
								image_public_id={product.image_public_id}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	)
}

export default Home
