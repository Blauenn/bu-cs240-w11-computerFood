import { NavLink } from "react-router"
import CartItem from "../components/CartPage/CartItem"
import { useCartStore } from "../stores/cartStore"
import { priceFormatting } from "../utils/string"

export default function CartPage() {
	const cart = useCartStore((state) => state.cart)
	const totalPrice = useCartStore((state) => state.getTotalPrice())
	const resetCart = useCartStore((state) => state.reset)
	const checkout = useCartStore((state) => state.checkout)

	return (
		<div className="flex flex-col gap-8">
			<div className="flex items-center justify-between">
				<h1 className="text-3xl font-semibold">Cart</h1>
				{cart.length > 0 && (
					<button
						onClick={resetCart}
						className="button">
						Reset cart
					</button>
				)}
			</div>

			<div className="grid xl:grid-cols-2 gap-4">
				{cart.length > 0
					? (
						<>
							<div className="xl:col-span-2 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-8 border border-gray-200 p-8 rounded-2xl mb-4">
								<div className="w-full flex items-center justify-between">
									<h1 className="text-2xl font-semibold">Total</h1>
									<div className="flex items-center justify-center gap-6">
										<h1 className="text-2xl">{priceFormatting(totalPrice)} ฿</h1>
									</div>
								</div>
								<button
									onClick={checkout}
									className="w-full sm:w-32 button flex items-center justify-center gap-3">
									Checkout
								</button>
							</div>
							{cart.map((item) => (
								<CartItem key={item.product.id} cartItem={item} />
							))}
						</>
					)
					: (
						<p className="text-lg"><span className="opacity-50 italic">No items in cart. </span> <NavLink to="/" className="underline text-pink-400">Order something</NavLink></p>
					)
				}
			</div>
		</div>
	)
}
