import type React from "react"
import type { CartData, ProductData } from "../interface/Products"
import type { SetStateAction } from "react"

type AppendToCartType = {
	newProduct: ProductData,
	cart: CartData[],
	setCart: React.Dispatch<SetStateAction<CartData[]>>
}

export function appendToCart({ newProduct, cart, setCart }: AppendToCartType) {
	const existingItem = cart.find((item: CartData) =>
		item.product.id === newProduct.id)

	if (existingItem) {
		setCart((prevCart) => prevCart.map((item) =>
			// Find the exisiting item to +1 to its amount
			item.product.id === newProduct.id
				? { ...item, amount: item.amount + 1 }
				: item
		))
	}

	else {
		setCart((prevCart) => [
			...prevCart,
			{ product: newProduct, amount: 1 }
		])
	}
}
