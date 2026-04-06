import TextField from './ui/TextField'
import logo from '/quatro_estacoes_logo.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useProducts } from '../hooks/useProducts'
import type { ProductFilters } from '../types/ProductTypes'

function Header() {
	const [name, setName] = useState('')
	const [Filters] = useState<ProductFilters>({
		name: [name],
	})

	// Terminar a combobox para procurar produtos por nome, apenas!
	const { data } = useProducts(Filters)

	console.log(name, 'array: ', Filters)
	console.log('data do header', data?.products)

	return (
		<header className="border-contrast bg-background/5 flex justify-between border-b-2 px-5 py-5 shadow-sm lg:px-16">
			<div className="flex gap-5">
				<Link
					to={'/home'}
					className="bg-contrast h-16 w-16 rounded-sm p-2 max-sm:hidden">
					<img
						src={logo}
						alt="Logo 4 Estações"
						className="h-full rounded-full"
					/>
				</Link>
				<div className="max-sm:hidden">
					<h1 className="text-inputText text-xl font-bold max-md:hidden">
						4 Estações Vasos & Acessórios
					</h1>
					<p className="text-inputText max-md:hidden">
						Transforme seus ambientes
					</p>
				</div>
			</div>

			<div className="flex items-center gap-5">
				<form onSubmit={() => {}}>
					<TextField
						placeholder="Buscar produtos..."
						className="max-w-2xl min-w-2xs"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</form>

				<button className="border-BtnSocialMediaBorder hover:bg-contrast cursor-pointer rounded-sm border p-2 shadow-sm duration-300 ease-in-out hover:text-white">
					<UserIcon className="size-6" />
				</button>
				<button className="border-BtnSocialMediaBorder hover:bg-contrast cursor-pointer rounded-sm border p-2 shadow-sm duration-300 ease-in-out hover:text-white">
					<ShoppingCartIcon className="size-6" />
				</button>
			</div>
		</header>
	)
}

export default Header
