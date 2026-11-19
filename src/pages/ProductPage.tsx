import { Link, useParams } from "react-router"
import { products } from "../data/products"
import { CaretLeftIcon, SmileyNervousIcon } from "@phosphor-icons/react"
import ProductLabel from "../components/Product/ProductLabel"
import { useCartStore } from "../stores/cartStore"

export default function ProductPage() {
	const { id } = useParams()

	const addToCart = useCartStore((state) => state.add)

	const product = products.find((product) => product.id === Number(id))

	if (!product) {
		return (
			<div className="flex flex-col items-center justify-center gap-8">
				<SmileyNervousIcon size={100} weight="duotone" className="opacity-50 mt-16" />
				<h1 className="text-3xl opacity-50">Product not found</h1>
			</div>
		)
	}

	return (
		<div className="flex flex-col gap-8">
			<Link to="/" className="flex items-center gap-4 hover:text-pink-400 transition-all duration-100">
				<CaretLeftIcon size={26} />
				<p className="text-2xl font-semibold">Return</p>
			</Link>

			<div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
				<img
					className="w-full h-full object-contain rounded-2xl shadow-md border border-gray-200 sm:w-40 sm:h-40 md:w-64 md:h-64"
					src={product.imageUrl}
					alt={`An image of ${product.title}`}
				/>

				<div className="flex flex-col gap-6">
					<h1 className="text-4xl font-semibold">{product.title}</h1>
					<ProductLabel label="Description" value={product.description} />
					<ProductLabel label="Price per serving" value={`${product.price} ฿`} />
					<button
						onClick={() => {
							addToCart(product)
						}}

						className="self-start text-2xl flex items-center justify-center border border-gray-200 hover:bg-pink-400 hover:text-white hover:border-transparent rounded-2xl px-8 py-4 transition-all duration-100 cursor-pointer mt-4">
						Order 1 serving of {product.title}
					</button>
				</div>

			</div>
		</div>
	)
}
