import './index.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Login from './pages/Login'
import Home from './pages/Home'
import Layout from './Layout'

const router = createBrowserRouter([
	{ path: '/auth', element: <Login /> },
	{ element: <Layout />, children: [{ path: '/home', element: <Home /> }] },
	{ path: '/', element: <Navigate to={'/home'} /> },
])

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
	</QueryClientProvider>,
)
