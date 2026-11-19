import { products } from "../data/products";
import ProductCard from "../components/HomePage/ProductCard";

export default function HomePage() {
	return (
		<div className="flex flex-col gap-8">
			<h1 className="text-3xl font-semibold">Order food</h1>

			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
					/>
				))}
			</div>
		</div>
	)
}
