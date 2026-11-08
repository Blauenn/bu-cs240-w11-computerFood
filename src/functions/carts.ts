import type { CartData } from "../interface/Products";

export function getItemsInCart(cart: CartData[]) {
	return cart.reduce((total, item) => total + item.amount, 0)
}

export function getTotalInCart(cart: CartData[]) {
	return cart.reduce((total, item) => total + item.product.price * item.amount, 0)
}
