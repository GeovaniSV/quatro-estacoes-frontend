import TextField from '../../components/ui/TextField'
import ButtonField from '../../components/ui/ButtonField'
import { Formik } from 'formik'

function RegisterForm() {
	return (
		<Formik
			initialValues={{
				userName: '',
				email: '',
				password: '',
				cpf: '',
				fone: '',
			}}
			validate={(values) => {
				const errors = { email: '' }
				if (!values.email) {
					errors.email = 'Required'
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				) {
					errors.email = 'Invalid email address'
				}
				return errors
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2))
					setSubmitting(false)
				}, 400)
			}}>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
				/* and other goodies */
			}) => (
				<form className="flex flex-col gap-3">
					<TextField
						label="Nome completo"
						placeholder="Digite seu nome"
						name="userName"
						value={values.userName}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.email}
					/>

					<TextField
						label="Email"
						placeholder="exemplo@gmail.com"
						name="email"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
					/>

					<TextField
						label="Senha"
						type="password"
						placeholder="Digite sua senha"
					/>

					<TextField
						label="CPF"
						placeholder="000.000.000-00"
					/>

					<TextField
						label="Telefone"
						placeholder="(99) 9 9999-9999"
					/>

					<ButtonField
						title="Criar"
						typeField="contrast"
					/>
				</form>
			)}
		</Formik>
	)
}

export default RegisterForm
