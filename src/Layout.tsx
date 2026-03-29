import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
	return (
		<main className="flex min-h-screen w-full flex-col">
			<Header />
			<div className="flex h-full w-full min-w-0 flex-1 overflow-hidden">
				<Outlet />
			</div>
		</main>
	)
}

export default Layout
