"use client";
import React from "react";

import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "./CardEffect";
import { ButtonLink } from "./ButtonLink";
function Heading({
	as: Comp = "h1",
	className = "",
	children = "",
	size = "lg",
}) {
	return (
		<Comp
			className={[
				"font-sans uppercase",
				size === "xl" && "~text-4xl/8xl",
				size === "lg" && "~text-4xl/7xl",
				size === "md" && "~text-3xl/5xl",
				size === "sm" && "~text-2xl/4xl",
				size === "xs" && "~text-lg/xl",
				className,
			]
				.filter(Boolean)
				.join(" ")}
		>
			{children}
		</Comp>
	);
}

const ProjectCard = ({ title, image, description, link }) => {
	return (
		<div className="group relative mx-auto w-full max-w-md px-8 pt-8 pb-10 mb-12 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-white/95">
			<div className="flex flex-col items-center gap-4">
				<CardContainer
					containerClassName="w-full flex justify-center"
					className=""
				>
					<CardBody className="w-full flex justify-center">
						<CardItem translateZ={60}>
							<img
								src={image}
								alt={title}
								width={320}
								height={200}
								className="rounded-xl object-cover shadow group-hover:shadow-lg transition-shadow duration-300"
							/>
						</CardItem>
					</CardBody>
				</CardContainer>
				<Heading
					as="h3"
					size="xs"
					className="text-center text-brand-purple font-bold mt-4 mb-2"
				>
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="cursor-pointer underline underline-offset-4 hover:text-brand-purple transition-colors duration-200"
					>
						{title}
					</a>
				</Heading>
				<p className="text-center text-sm text-zinc-700 font-medium mb-4 px-2 leading-relaxed">
					{description}
				</p>
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-2 block bg-brand-purple hover:bg-brand-purple/80 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
				>
					View Project
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
