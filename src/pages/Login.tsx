import ButtonField from '../components/ui/ButtonField'
import SocialButtonField from '../components/ui/SocialButtonField'
import TextField from '../components/ui/TextField'
import logo from '/quatro_estacoes_logo.jpg'
import { useState, type ChangeEvent } from 'react'
import { api } from '../services/api'
import { useNavigate } from 'react-router-dom'

import { ClockIcon } from '@heroicons/react/24/outline'

function Login() {
	const navigate = useNavigate()
	const [campButtons, setCampButtons] = useState(false)
	const [loginInput, setLoginInput] = useState({
		email: '',
		password: '',
	})
	const [registerInputs, setRegisterInputs] = useState({
		userName: '',
		email: '',
		password: '',
		cpf: '',
		fone: '',
	})

	const login = async () => {
		console.log(loginInput)
		try {
			console.log(loginInput)
			const response = await api.post('/auth/login', {
				email: loginInput.email,
				password: loginInput.password,
			})

			console.log(response)
		} catch (error) {
			console.log(error)
		}
	}

	const register = async () => {
		try {
			const data = await api.post('/auth/register', {
				userName: registerInputs.userName,
				email: registerInputs.email,
				password: registerInputs.password,
				cpf: registerInputs.cpf,
				fone: registerInputs.fone,
			})

			setRegisterInputs({
				userName: '',
				email: '',
				password: '',
				cpf: '',
				fone: '',
			})

			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<main className="bg-background grid h-screen grid-cols-2 overflow-hidden">
			<div className="bg-contrast flex items-center justify-center gap-5">
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
							Bem vindo de à
						</p>
						<p className="font-bold text-white md:text-3xl lg:text-5xl">
							4 Estações Vasos & Acessórios!
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

			<div className="bg-background flex justify-center">
				<div className="mt-1 w-[50%] rounded-sm bg-white px-10 py-5 shadow-lg">
					<div className="flex flex-col gap-2">
						{campButtons ? (
							<>
								<h1 className="text-inputText text-lg font-bold">
									Criar conta
								</h1>
								<p className="text-md">
									Preencha seus dados para começar a comprar
								</p>
							</>
						) : (
							<>
								<h1 className="text-inputText text-lg font-bold">Acessar</h1>
								<p className="text-md">
									Entre com seus dados ou crie uma conta nova
								</p>
							</>
						)}
						<hr className="border-contrast my-3 border-t-2" />
					</div>

					<div className="mt-5 grid grid-cols-2 text-center">
						<button
							className={`${!campButtons ? 'text-contrast' : 'text-gray-500'} text-md cursor-pointer font-bold duration-500 ease-in-out`}
							type="button"
							onClick={() => setCampButtons(false)}>
							ENTRAR
						</button>
						<button
							className={`${!campButtons ? 'text-gray-500' : 'text-contrast'} text-md cursor-pointer font-bold duration-500 ease-in-out`}
							type="button"
							onClick={() => setCampButtons(true)}>
							CADASTRAR
						</button>
						<hr
							className={`${campButtons ? 'border-gray-200' : 'border-contrast'} my-5 border-t-2 duration-500 ease-in-out`}
						/>
						<hr
							className={`${!campButtons ? 'border-gray-200' : 'border-contrast'} my-5 border-t-2 duration-500 ease-in-out`}
						/>
					</div>

					{!campButtons && (
						<form
							onSubmit={login}
							className="mt-3 flex flex-col gap-3">
							<TextField
								label="Email"
								placeholder="seu@email.com"
								value={loginInput.email}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setLoginInput({ ...loginInput, email: e.target.value })
								}
							/>

							<TextField
								label="Senha"
								type="password"
								placeholder="Digite sua senha"
								value={loginInput.password}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setLoginInput({ ...loginInput, password: e.target.value })
								}
							/>

							<div className="flex justify-end">
								<a
									href="#"
									className="text-contrast text-sm font-medium">
									Esqueci minha senha!
								</a>
							</div>

							<ButtonField
								type="submit"
								title="ENTRAR"
								typeField="contrast"
							/>

							<div className="relative my-6 flex items-center">
								<div className="grow border-t border-gray-300"></div>
								<span className="mx-5 shrink text-xs font-bold tracking-wider text-gray-500 uppercase">
									Ou entre com
								</span>
								<div className="grow border-t border-gray-300"></div>
							</div>

							<SocialButtonField
								icon="google"
								title="Google"
								type="button"
							/>
						</form>
					)}

					{campButtons && (
						<form
							onSubmit={register}
							className="flex flex-col gap-3">
							<TextField
								label="Nome completo"
								placeholder="Digite seu nome"
								value={registerInputs.userName}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setRegisterInputs({
										...registerInputs,
										userName: e.target.value,
									})
								}
							/>

							<TextField
								label="Email"
								placeholder="exemplo@gmail.com"
								value={registerInputs.email}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setRegisterInputs({
										...registerInputs,
										email: e.target.value,
									})
								}
							/>

							<TextField
								label="Senha"
								type="password"
								placeholder="Digite sua senha"
								value={registerInputs.password}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setRegisterInputs({
										...registerInputs,
										password: e.target.value,
									})
								}
							/>

							<TextField
								label="CPF"
								placeholder="000.000.000-00"
								value={registerInputs.cpf}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setRegisterInputs({ ...registerInputs, cpf: e.target.value })
								}
							/>

							<TextField
								label="Telefone"
								placeholder="(99) 9 9999-9999"
								value={registerInputs.fone}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setRegisterInputs({ ...registerInputs, fone: e.target.value })
								}
							/>

							<ButtonField
								title="Criar"
								typeField="contrast"
							/>

							<hr className="mt-2 border-t border-gray-200" />
							<p className="text-textBtnSocialMedia text-center text-sm">
								Já tem uma conta?{' '}
								<button
									className="text-contrast cursor-pointer font-bold"
									onClick={() => setCampButtons(false)}>
									Entre!
								</button>
							</p>
						</form>
					)}
				</div>
			</div>
		</main>
	)
}

export default Login
