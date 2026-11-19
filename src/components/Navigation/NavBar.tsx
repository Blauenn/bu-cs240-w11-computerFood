import { ListIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { NavLink } from "react-router";
import { useCartStore } from "../../stores/cartStore";

export default function NavBar() {
	const itemCount = useCartStore((state) => state.getItemCount())

	const [showMenu, setShowMenu] = useState<boolean>(false)

	return (
		<div className="fixed z-50 top-0 left-0 w-full flex items-center justify-between p-6 sm:p-8 bg-white border-b border-gray-200">
			<h1 className="w-32 text-wrap sm:w-full text-2xl sm:text-3xl font-bold">Computer Food</h1>

			{/* Desktop Navigation */}
			<div className="hidden sm:flex items-center gap-4">
				<NavLink
					to="/"
					className={({ isActive }) => `
					    button flex items-center justify-center
					    ${isActive && "bg-pink-400 text-white border-transparent"}
					`}
				>
					Home
				</NavLink>

				<NavLink
					to="/about"
					className={({ isActive }) => `
					    button flex items-center justify-center mr-4
					    ${isActive && "bg-pink-400 text-white border-transparent"}
					`}
				>
					About
				</NavLink>

				<NavLink
					to="/cart"
					className={({ isActive }) => `
					    button group flex items-center gap-3
					    ${isActive && "bg-pink-400 text-white border-transparent flex gap-3"}
					`}
				>
					{itemCount > 0 && (
						<div className="border border-gray-200/50 min-w-6 bg-pink-400 px-2 py-1 rounded-full">
							<p className="text-white text-sm">{itemCount}</p>
						</div>
					)}
					<ShoppingCartIcon
						size={26}
						weight="duotone"
						className="opacity-50 group-hover:opacity-100 group-[.bg-pink-400]:opacity-100"
					/>
				</NavLink>
			</div>

			{/* Mobile Navigation */}
			<div className="relative sm:hidden">
				<button
					onClick={() => setShowMenu(!showMenu)}
					className="button flex items-center justify-center gap-3 group"
				>
					{itemCount > 0 && (
						<div className="border border-transparent group-hover:border-gray-200/50 min-w-6 bg-pink-400 px-2 py-1 rounded-full">
							<p className="text-white text-sm">{itemCount}</p>
						</div>
					)}
					<ListIcon size={26} />
				</button>

				<div className={`${showMenu ? "flex" : "hidden"} absolute top-full right-0 mt-4 w-56 flex-col gap-3 bg-white border border-gray-200 rounded-xl shadow-lg p-4`}>
					<NavLink
						to="/"
						onClick={() => setShowMenu(false)}
						className={({ isActive }) => `
						    button
						    ${isActive && "bg-pink-400 text-white border-transparent"}
						    `}
					>
						Home
					</NavLink>

					<NavLink
						to="/about"
						onClick={() => setShowMenu(false)}
						className={({ isActive }) => `
						    button mb-4
						    ${isActive && "bg-pink-400 text-white border-transparent"}
						    `}
					>
						About
					</NavLink>

					<NavLink
						to="/cart"
						onClick={() => setShowMenu(false)}
						className={({ isActive }) => `
						    button
						    ${isActive && "bg-pink-400 text-white border-transparent"}
						    `}
					>
						{itemCount > 0
							? `Cart · ${itemCount == 1
								? "1 item"
								: itemCount + " items"}`
							: "Cart"
						}
					</NavLink>
				</div>
			</div>
		</div>
	)
}
