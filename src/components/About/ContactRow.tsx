import { type Icon } from "@phosphor-icons/react"

type Props = {
	icon: Icon
	label: string
	url?: string
	value: string
}

export default function ContactRow({ icon: IconComponent, label, url, value }: Props) {
	return (

		<div className="flex items-center justify-between">
			<div className="flex items-center gap-3 opacity-50">
				<IconComponent size={26} weight="duotone" />
				<p className="font-semibold">{label}</p>
			</div>

			{url ? (

				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-pink-400 font-semibold underline"
				>
					{value}
				</a>
			) : (
				<p className="font-semibold">{value}</p>
			)}
		</div>
	)
}
