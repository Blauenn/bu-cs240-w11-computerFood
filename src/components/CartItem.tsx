import { MinusCircleIcon, PlusCircleIcon, TrashIcon } from "@phosphor-icons/react";
import type { CartData } from "../interface/Products";
import { useEffect, useState } from "react";
import { priceFormatting } from "../functions/string";

type Props = {
	cartItem: CartData;
	handleCartItemAmountChange: (productId: number, amount: number) => void;
	handleCartItemAmountSet: (productId: number, amount: number) => void;
	handleCartItemDelete: (productId: number) => void;
}

export default function CartItem({ cartItem, handleCartItemAmountChange, handleCartItemAmountSet, handleCartItemDelete }: Props) {
	{/* Temporary cart value for UI display only */ }
	const [amount, setAmount] = useState(String(cartItem.amount));

	{/* Update the UI with the actual amount */ }
	useEffect(() => {
		setAmount(String(cartItem.amount));
	}, [cartItem.amount]);

	return (
		<div key={cartItem.product.id} className='border border-gray-200 flex items-center justify-between gap-2 p-4 rounded-2xl'>
			<div className='w-full flex flex-col lg:flex-row lg:justify-between gap-6'>
				<div className="lg:basis-3/7 flex gap-6">
					<img
						className="size-24 object-contain rounded-2xl shadow-md border border-gray-200"
						src={cartItem.product.imageUrl}
						alt={`An image of ${cartItem.product.title}`} />
					<div>
						<h1 className='text-lg font-bold mb-1'>{cartItem.product.title}</h1>
						<p className='text-sm opacity-50 mb-2 line-clamp-3'>{cartItem.product.description}</p>
						<h2 className='hidden sm:block text-lg font-bold'>{priceFormatting(cartItem.product.price)} ฿</h2>
					</div>
				</div>

				<div className="lg:basis-4/7 flex items-center justify-between lg:justify-end gap-2 lg:gap-8">
					<div className="flex items-center gap-2">
						<MinusCircleIcon
							onClick={() => handleCartItemAmountChange(cartItem.product.id, -1)}
							size={24}
							weight="duotone"
							className="cart-icon"
						/>

						<input
							type="text"
							inputMode="numeric"
							value={amount}
							onChange={(event) => {
								const value = event.target.value;

								// Only allow positive numbers 
								if (/^\d*$/.test(value)) {
									setAmount(value);
								}
							}}
							onBlur={() => {
								if (amount === "") {
									setAmount(String(cartItem.amount));
									return;
								}

								handleCartItemAmountSet(
									cartItem.product.id,
									Number(amount)
								);
							}}
							className="max-w-20 text-center border border-gray-200 rounded-2xl px-4 py-2"
						/>
						<PlusCircleIcon
							onClick={() => handleCartItemAmountChange(cartItem.product.id, 1)}
							size={24}
							weight="duotone"
							className="cart-icon" />
					</div>
					<div className="max-w-42 flex items-center gap-6">
						<h2 className="text-2xl font-bold truncate">{priceFormatting(cartItem.product.price * cartItem.amount)} ฿</h2>
						<TrashIcon
							onClick={() => handleCartItemDelete(cartItem.product.id)}
							size={30}
							weight="duotone"
							className="hidden sm:block cart-icon hover:text-red-400"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
