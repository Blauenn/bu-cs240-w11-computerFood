export interface ProductData {
	id: number;
	title: string;
	description: string;
	price: number;
	imageUrl: string;
}

export interface CartData {
	product: ProductData,
	amount: number
}
