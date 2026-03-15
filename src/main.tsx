import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Layout from './Layout'

const router = createBrowserRouter([
	{ path: '/login', element: <Login /> },
	{ element: <Layout />, children: [{ path: '/home', element: <Home /> }] },
	{ path: '/', element: <Navigate to={'/home'} /> },
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
