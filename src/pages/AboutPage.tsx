import { CameraIcon, GithubLogoIcon, SketchLogoIcon } from "@phosphor-icons/react";
import ContactRow from "../components/About/ContactRow";

export default function AboutPage() {
	return (
		<div className="flex flex-col gap-8">
			<h1 className="text-3xl font-semibold">About me</h1>

			<div className="flex flex-col md:flex-row gap-8 md:gap-16 border border-gray-200 p-8 rounded-2xl">
				<div className="md:basis-[35%]">
					<img
						src="https://avatars.githubusercontent.com/u/85344725?v=4"
						className="sm:w-64  rounded-full shadow-md"
					/>
				</div>

				<div className="md:basis-[65%] flex flex-col gap-8">
					<div className="flex flex-col gap-2 md:gap-3">
						<p className="opacity-50 md:text-lg">1-68-070-675-9</p>
						<h1 className="text-2xl md:text-3xl font-semibold">Nawee Moongmart</h1>
						<p className="opacity-50 md:text-lg">Section 227E</p>
					</div>

					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-3">
							<SketchLogoIcon size={26} weight="duotone" className="opacity-50" />
							<h1 className="text-xl font-semibold">Bangkok University</h1>
						</div>
						<p className="text-lg opacity-50">School of Information Technology and Innovation</p>
						<p className="text-lg opacity-50">Computer Science major</p>
					</div>

					<div className="flex flex-col gap-2">
						<ContactRow
							icon={GithubLogoIcon}
							label="GitHub"
							value="Blauenn"
							url="https://github.com/blauenn"
						/>
						<ContactRow
							icon={CameraIcon}
							label="Flickr"
							value="naweewiwi.01"
							url="https://flickr.com/people/blauenuwu/"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
