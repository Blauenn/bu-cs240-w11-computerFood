import { useNavigate } from "react-router";
import type { ProductData } from "../../interface/Products"
import { useCartStore } from "../../stores/cartStore";
import { priceFormatting } from "../../utils/string";

interface Props {
	product: ProductData;
}

export default function ProductCard({ product }: Props) {
	const addToCart = useCartStore((state) => state.add)

	// useNavigate is used instead of Link because there's a button within the div.
	//
	// If we use Link, the button can only be clicked once, and the page changes.
	const navigate = useNavigate()

	return (
		<div
			onClick={() => navigate(`/product/${product.id}`)}
			className="border border-gray-200 rounded-2xl flex flex-col gap-4 justify-between p-4 hover:scale-102 transition-all duration-100 cursor-pointer"
		>
			<div className="flex flex-col gap-4">
				<div className="w-full aspect-square">
					<img
						className="w-full h-full object-contain rounded-2xl shadow-md"
						src={product.imageUrl}
						alt={`An image of ${product.title}`} />
				</div>

				<div className="flex flex-col gap-2">
					<h1 className="text-xl font-bold">{product.title}</h1>
					<p className="text-md opacity-50">{product.description}</p>
				</div>
			</div>

			<div className="flex items-center justify-between">
				<h2 className="text-lg opacity-50">{priceFormatting(product.price)} ฿</h2>
				<button
					onClick={(event) => {
						event.stopPropagation()
						addToCart(product)
					}}

					className="button">
					Order 1
				</button>
			</div>
		</div>
	)
}
