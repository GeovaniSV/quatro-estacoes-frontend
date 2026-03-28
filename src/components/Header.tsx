import { Link } from 'react-router-dom'
import TextField from './ui/TextField'
import logo from '/quatro_estacoes_logo.jpg'

import { UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

function Header() {
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
				<TextField
					placeholder="Buscar produtos..."
					className="max-w-2xl min-w-2xs"
				/>

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
