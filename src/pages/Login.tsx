import ButtonField from '../components/ui/ButtonField'
import SocialButtonField from '../components/ui/SocialButtonField'
import TextField from '../components/ui/TextField'
import logo from '../../public/quatro_estacoes_logo.jpg'

import { ClockIcon } from '@heroicons/react/24/outline'

function Login() {
	return (
		<main className="bg-background flex h-screen">
			<div className="bg-contrast flex h-full w-2/4 items-center justify-center gap-5">
				<div className="h-[90%] w-3/4">
					<div className="bg-contrastLight h-24 w-24 rounded-sm p-2">
						<img
							src={logo}
							alt="Logo 4 Estações"
							className="h-full rounded-full"
						/>
					</div>

					<div className="mt-5">
						<p className="font-bold text-white md:text-3xl lg:text-5xl">
							Bem vindo de volta à
						</p>
						<p className="font-bold text-white md:text-3xl lg:text-5xl">
							4 Estações Vasos & Acessórios !
						</p>

						<p className="mt-5 text-white md:text-lg lg:text-2xl">
							Faça o Login para acessar sua conta e aproveitar todos nossos
							produtos.
						</p>
					</div>

					<div className="mt-10 flex flex-col gap-5">
						<div className="flex gap-5">
							<div className="bg-contrastLight flex h-14 w-14 items-center justify-center rounded-sm">
								{' '}
								<ClockIcon className="size-11 text-white" />
							</div>

							<div className="flex flex-col gap-2">
								<p className="md:text-md font-bold text-white lg:text-lg">
									Produção rápida
								</p>
								<p className="md:text-md text-white">
									Produção rápida e eficiente!
								</p>
							</div>
						</div>

						<div className="flex gap-5">
							<div className="bg-contrastLight flex h-14 w-14 items-center justify-center rounded-sm">
								{' '}
								<ClockIcon className="size-11 text-white" />
							</div>

							<div className="flex flex-col gap-2">
								<p className="text-lg font-bold text-white">Produção rápida</p>
								<p className="text-white">Produção rápida e eficiente!</p>
							</div>
						</div>

						<div className="flex gap-5">
							<div className="bg-contrastLight flex h-14 w-14 items-center justify-center rounded-sm">
								{' '}
								<ClockIcon className="size-11 text-white" />
							</div>

							<div className="flex flex-col gap-2">
								<p className="text-lg font-bold text-white">Produção rápida</p>
								<p className="text-white">Produção rápida e eficiente!</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col"></div>
		</main>
	)
}

export default Login
