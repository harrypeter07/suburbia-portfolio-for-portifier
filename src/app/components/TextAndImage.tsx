import React from "react";
import clsx from "clsx";
import { Heading } from "./Heading";
import { ButtonLink } from "./ButtonLink";
import { ParallaxImage } from "./ParallaxImage";

const TextAndImage = ({ theme = "lime", variation = "left" }) => {
	const sectionClasses = clsx("bg-texture text-white p-8", {
		"bg-brand-blue": theme === "blue",
		"bg-brand-orange": theme === "orange",
		"bg-brand-lime": theme === "lime",
		"bg-brand-navy": theme === "navy",
	});

	return (
		<section className={`${sectionClasses} scroll-smooth`}>
			<div
				className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:gap-24 scroll-smooth"
			>
				<div 
					className={clsx(
						"flex flex-col items-center gap-8 text-center md:items-start md:text-left", 
						{ "md:order-2": variation === "right" }
					)}
				>
					<Heading as="h2" size="lg">
						TEXT
					</Heading>
					<div className="body max-w-md text-lg leading-relaxed">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
						enim?
					</div>
					<ButtonLink color={theme === "lime" ? "orange" : "lime"} href="/">
						Buy Now !
					</ButtonLink>
				</div>

				<ParallaxImage foregroundImage="/prismic/guy-1.png" backgroundImage="/prismic/paint-background.png" />
			</div>
		</section>
	);
};

export default TextAndImage;