export function priceFormatting(price: string | number) {
	return Intl.NumberFormat("en-US").format(Number(price))
}
