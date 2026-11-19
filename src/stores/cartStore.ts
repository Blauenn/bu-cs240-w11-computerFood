import { create } from "zustand";
import type { CartData, ProductData } from "../interface/Products";
import { persist } from "zustand/middleware";
import { priceFormatting } from "../utils/string";

interface CartStore {
	cart: CartData[];

	add: (product: ProductData) => void
	delete: (productId: number) => void
	updateAmount: (productId: number, amount: number) => void
	changeAmount: (productId: number, amount: number) => void
	getItemCount: () => number
	getTotalPrice: () => number
	reset: () => void
	checkout: () => void
}

export const useCartStore = create<CartStore>()(
	persist(
		(set, get) => ({
			cart: [],

			add: (product) => set((state) => {
				const existingItem = state.cart.find(
					(item) => item.product.id === product.id
				)

				if (existingItem) {
					return {
						cart: state.cart.map((item) =>
							item.product.id === product.id
								? { ...item, amount: item.amount + 1 }
								: item
						)
					}
				}

				return {
					cart: [...state.cart, { product, amount: 1 }]
				}
			}),

			delete: (productId) => set((state) => ({
				cart: state.cart.filter(
					(item) => item.product.id !== productId
				)
			})),

			updateAmount: (productId, amount) => set((state) => ({
				cart: state.cart.map((item) => item.product.id === productId
					? { ...item, amount: amount }
					: item
				)
					.filter((item) => item.amount >= 1) // If amount falls below 1, delete
			})),

			changeAmount: (productId, amount) => set((state) => ({
				cart: state.cart.map((item) => item.product.id === productId
					? { ...item, amount: item.amount + amount }
					: item
				)
					.filter((item) => item.amount >= 1) // If amount falls below 1, delete
			})),

			getItemCount: () =>
				get().cart.reduce(
					(total, item) => total + item.amount,
					0
				),

			getTotalPrice: () =>
				get().cart.reduce(
					(total, item) => total + (item.amount * item.product.price),
					0
				),

			reset: () => set({ cart: [] }),

			checkout: () => {
				alert(`The food has been ordered!\nThe total price is ${priceFormatting(get().getTotalPrice())} ฿.`)

				set(() => ({
					cart: []
				}))
			}
		}),
		{ name: "cart-storage" }
	)
)
