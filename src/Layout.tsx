import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
	return (
		<main className="flex min-h-screen w-screen flex-col">
			<Header />
			<div className="flex flex-1 flex-col overflow-auto">
				<Outlet />
			</div>
		</main>
	)
}

export default Layout
