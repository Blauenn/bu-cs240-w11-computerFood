import type { SetStateAction } from "react"
import type { CartData, ProductData } from "../interface/Products"
import { appendToCart } from "../functions/products"
import { priceFormatting } from "../functions/string"

interface Props {
	product: ProductData;
	cart: CartData[];
	setCart: React.Dispatch<SetStateAction<CartData[]>>;
}

export default function ProductCard({ product, cart, setCart }: Props) {

	return (
		<div className="border border-gray-200 rounded-2xl flex flex-col gap-4 justify-between p-4 hover:scale-102 transition-all duration-100">
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
					onClick={() => { appendToCart({ newProduct: product, cart, setCart }) }}
					className="button">Order 1</button>
			</div>
		</div>
	)
}
