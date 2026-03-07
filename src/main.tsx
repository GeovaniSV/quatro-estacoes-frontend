import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Login from './pages/Login'

const router = createBrowserRouter([
	{ path: '/login', element: <Login /> },
	{ path: '/', element: <Navigate to={'/login'} /> },
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
