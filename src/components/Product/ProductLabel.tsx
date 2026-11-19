type Props = {
	label: string
	value: string
}

export default function ProductLabel({ label, value }: Props) {
	return (
		<div className="flex flex-col gap-2">
			<h1 className="text-lg opacity-50">{label}:</h1>
			<p className="text-xl font-semibold">{value}</p>
		</div>
	)
}
