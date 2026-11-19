import { createBrowserRouter } from 'react-router'

import App from '../App'
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import AboutPage from '../pages/AboutPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProductPage from '../pages/ProductPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "product/:id",
				element: <ProductPage />,
			},
			{
				path: "cart",
				element: <CartPage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
])
