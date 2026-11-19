import { MinusCircleIcon, PlusCircleIcon, TrashIcon } from "@phosphor-icons/react"
import type { CartData } from "../../interface/Products"
import { useCartStore } from "../../stores/cartStore"
import { useState } from "react"
import { priceFormatting } from "../../utils/string"

type Props = {
	cartItem: CartData
}

export default function CartItem({ cartItem }: Props) {
	const deleteFromCart = useCartStore((state) => state.delete)
	const changeAmount = useCartStore((state) => state.changeAmount)
	const updateAmount = useCartStore((state) => state.updateAmount)

	const [amount, setAmount] = useState(cartItem.amount)

	return (
		<div className="min-w-0 border border-gray-200 p-8 flex flex-col sm:flex-row gap-8 rounded-2xl">
			<img
				className="w-full h-full object-contain rounded-2xl shadow-md border border-gray-200 sm:w-40 sm:h-40"
				src={cartItem.product.imageUrl}
				alt={`An image of ${cartItem.product.title}`}
			/>

			<div className="flex-1 flex flex-col gap-8">
				<div className="flex flex-col gap-4">
					<h2 className="text-2xl font-semibold">{cartItem.product.title}</h2>
					<p className="opacity-50">{cartItem.product.description}</p>
				</div>

				<div className="flex items-center justify-between gap-6">
					<h1 className="text-2xl font-semibold">{priceFormatting(cartItem.product.price * cartItem.amount)} ฿</h1>

					<div className="flex items-center justify-center gap-4">
						<div className="flex items-center justify-center gap-2">
							<button
								onClick={() => {
									setAmount((prev) => prev - 1)
									changeAmount(cartItem.product.id, -1)
								}}
								className="icon-button"
							>
								<MinusCircleIcon size={28} weight="duotone" />
							</button>

							<input
								type="number"
								value={amount}
								onChange={(e) => {
									setAmount(Number(e.target.value))
								}}
								onBlur={() => {
									updateAmount(cartItem.product.id, Math.max(1, amount))
								}}
								className="border border-gray-200 bg-gray-200/50 w-12 sm:w-16 text-center flex items-center justify-center rounded-xl p-2"
							/>

							<button
								onClick={() => {
									setAmount((prev) => prev + 1)
									changeAmount(cartItem.product.id, 1)
								}}
								className="icon-button"
							>
								<PlusCircleIcon size={28} weight="duotone" />
							</button>
						</div>

						<TrashIcon
							onClick={() => { deleteFromCart(cartItem.product.id) }}
							size={28}
							weight="duotone"
							className="hidden sm:block icon-button hover:text-red-400"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
