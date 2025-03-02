import React from "react";
import Image from "next/image";
// import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { ButtonLink } from "./ButtonLink";
import { HorizontalLine, VerticalLine } from "./Line";
import { Scribble } from "./Scribble";

interface SkateBoardProps {
	name: string;
	image: string;
	price?: number; // Made price optional
	customizerLink: string;
}

const SkateBoard: React.FC<SkateBoardProps> = ({
	name,
	image,
	price,
	customizerLink,
}) => {
	return (
		<div className="group relative mx-auto w-full mx-w-72 px-8 pt-4">
			<VerticalLine className="absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400 left-4" />
			<VerticalLine className="absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400 right-4" />
			<HorizontalLine className="-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400" />

			<FaStar className="text-yellow-400" />
			<div className="~mb-1 overflow-hidden py-4">
                <Scribble className="absolute inset-0 h-full w-full " color={'#f00'}/>
				<Image
					src={image}
					alt={name}
					width={150}
					height={200}
					className="rounded-md object-cover mx-auto w-[58%] origin-top transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-150"
				/>
			</div>
			<div className="text-gray-600 ~text-sm/2xl flex flex-col items-center justify-between">
				<HorizontalLine className="-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400" />

				<h3 className="mt-2 my-2 text-center font-sans leading-tight ~text-lg/xl">
					{name}
				</h3>
				<span className="font-bold">
					&#8377;{" "}
					{price !== undefined ? `${price.toFixed(2)}` : "Price Not Available"}
				</span>
				<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
					<ButtonLink
						href={customizerLink}
						icon="skateboard"
						size="sm"
						className="mt-2 block"
					>
						Customize
					</ButtonLink>
				</div>
			</div>
		</div>
	);
};

export default SkateBoard;
