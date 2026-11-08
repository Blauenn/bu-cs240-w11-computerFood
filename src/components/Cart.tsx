import { HandCoinsIcon, ShoppingCartIcon, XCircleIcon } from "@phosphor-icons/react"
import { getTotalInCart } from "../functions/carts"
import type { CartData } from "../interface/Products"
import CartItem from "./CartItem"
import type React from "react"
import type { SetStateAction } from "react"
import { priceFormatting } from "../functions/string"

type Props = {
	cart: CartData[];
	showCart: boolean;
	setShowCart: React.Dispatch<SetStateAction<boolean>>;
	handleCartItemAmountChange: (productId: number, amount: number) => void;
	handleCartItemAmountSet: (productId: number, amount: number) => void;
	handleCartItemDelete: (productId: number) => void;
	handleCheckout: () => void;
}

export default function Cart({ cart, showCart, setShowCart, handleCartItemAmountChange, handleCartItemAmountSet, handleCartItemDelete, handleCheckout }: Props) {
	return (
		<div className={`
			   ${!showCart && 'hidden'} 
			    fixed z-100 bg-white border border-gray-200 p-8 rounded-2xl shadow-lg 
			    w-[90vw] sm:right-4 sm:top-4 md:w-[75vw] xl:w-[50vw] md:right-10 md:top-10 
			    xl:right-36 xl:top-10 
			    max-h-[90vh] overflow-y-auto`}>
			<div className='flex items-center justify-between mb-8'>
				<XCircleIcon onClick={() => setShowCart(false)} size={32} weight="duotone" className="opacity-50 hover:opacity-100 hover:text-red-400 transition-all duration-100 cursor-pointer" />

				{cart.length > 0 && (
					<button
						onClick={handleCheckout}
						className="flex items-center gap-4 border border-gray-200 rounded-2xl px-4 py-3 hover:bg-pink-400 hover:border-transparent group transition-all duration-100 cursor-pointer">
						<HandCoinsIcon size={26} weight="duotone" className="opacity-50 group-hover:opacity-100 group-hover:text-white" />
						<p className="group-hover:text-white">Checkout</p>
					</button>
				)}
			</div>

			<div className='md:max-h-[75vh] flex flex-col gap-4'>
				{cart.length > 0 ? (
					<>
						<div className='border border-gray-200 flex items-center justify-between px-6 py-4 rounded-2xl'>
							<h1 className='text-xl'>Total</h1>
							<p className='text-xl font-bold'>{priceFormatting(getTotalInCart(cart))} ฿</p>
						</div>
						{cart.map((item) => (
							<CartItem
								key={item.product.id}
								cartItem={item}
								handleCartItemAmountChange={handleCartItemAmountChange}
								handleCartItemAmountSet={handleCartItemAmountSet}
								handleCartItemDelete={handleCartItemDelete}
							/>
						))}
					</>
				) : (
					<div className='w-full flex items-center flex-col gap-6 py-4'>
						<ShoppingCartIcon size={64} weight="duotone" className="opacity-50" />
						<p className="text-xl opacity-50">Please select a product</p>
					</div>
				)}
			</div>

		</div>

	)
}


