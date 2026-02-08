import ButtonField from '../components/ui/ButtonField'
import SocialButtonField from '../components/ui/SocialButtonField'
import TextField from '../components/ui/TextField'

function Login() {
	return (
		<main className="bg-background flex h-screen items-center justify-center">
			<div className="flex h-4/5 w-2/4 flex-col items-center justify-center gap-5 border bg-white">
				<TextField
					label="E-MAIL"
					placeholder="Digite aqui pra digitar"
				/>

				<ButtonField
					title="Entrar"
					typeField="contrast"
				/>

				<SocialButtonField
					title="Google"
					icon="google"
				/>
			</div>
		</main>
	)
}

export default Login
