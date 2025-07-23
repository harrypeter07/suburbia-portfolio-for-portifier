import React from "react";
import Image from "next/image";
import { ButtonLink } from "./ButtonLink";
import { LinkPreview } from "@/components/ui/link-preview";
import { Heading } from "./Heading";

interface ProjectCardProps {
	title: string;
	image: string;
	description: string;
	link: string;
}

function isValidUrl(url: string) {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	image,
	description,
	link,
}) => {
	const validUrl = isValidUrl(link);
	return (
		<div className="group relative mx-auto w-full max-w-md px-8 pt-8 pb-10 mb-12 rounded-2xl bg-white/80 shadow-lg border border-zinc-200 hover:shadow-2xl transition-all">
			<div className="flex flex-col items-center gap-4">
				<div className="w-full flex justify-center">
					{validUrl ? (
						<LinkPreview url={link} width={320} height={200}>
							<Image
								src={image}
								alt={title}
								width={320}
								height={200}
								className="rounded-xl object-cover border border-zinc-300 shadow"
							/>
						</LinkPreview>
					) : (
						<Image
							src={image}
							alt={title}
							width={320}
							height={200}
							className="rounded-xl object-cover border border-zinc-300 shadow"
						/>
					)}
				</div>
				<Heading
					as="h3"
					size="lg"
					className="text-center text-brand-purple font-bold mt-4 mb-2"
				>
					{validUrl ? (
						<LinkPreview url={link} width={320} height={200}>
							<span className="cursor-pointer underline underline-offset-4 hover:text-brand-purple transition-colors duration-200">
								{title}
							</span>
						</LinkPreview>
					) : (
						<span className="cursor-pointer underline underline-offset-4 text-brand-purple transition-colors duration-200">
							{title}
						</span>
					)}
				</Heading>
				<p className="text-center text-lg text-zinc-700 font-medium mb-4 px-2 leading-relaxed">
					{description}
				</p>
				<ButtonLink href={link} icon="plus" size="md" className="mt-2 block">
					View Project
				</ButtonLink>
			</div>
		</div>
	);
};

export default ProjectCard;
