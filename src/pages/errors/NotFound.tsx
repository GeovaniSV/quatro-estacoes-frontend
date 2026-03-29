function NotFound() {
	return (
		<div className="flex h-screen w-full items-center justify-center bg-gray-100">
			<div className="rounded-md bg-white p-8 shadow-md">
				<h1 className="text-4xl font-bold text-gray-800">
					404 - Página Não Encontrada
				</h1>
				<p className="mt-4 text-gray-600">
					Ops! A página que você está procurando não existe.
				</p>
			</div>
		</div>
	)
}

export default NotFound
