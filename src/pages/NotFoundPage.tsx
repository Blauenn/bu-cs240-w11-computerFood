import { SmileyNervousIcon } from "@phosphor-icons/react";
import { Link } from "react-router";

export default function NotFoundPage() {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<SmileyNervousIcon size={100} weight="duotone" className="opacity-50 mt-16" />
			<h1 className="text-3xl opacity-50">Page not found</h1>
			<Link
				to="/"
				className="underline text-pink-400 cursor-pointer"
			>
				Let's get back to the home page
			</Link>
		</div>
	)
}
