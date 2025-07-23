import React from "react";
import ProjectCard from "./SkateBoard";
import projectData from "@/data/skateboardData";
import { Heading } from "./Heading";
const ProductGrid: React.FC = () => {
	return (
		<section
			className="relative text-zinc-800 bg-texture bg-brand-gray  max-sm:mb-32 max-md:mb-32"
			id="projects"
		>
			<Heading className="mb-5 text-center ~mb-4/6" as="h2">
				Projects
			</Heading>
			<div className="text-center ~mb-6/10">
				Explore some of my recent work and creative projects.
			</div>
			<div className="w-full gap-4 md:grid-cols-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
				{projectData.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						image={project.image}
						description={project.description}
						link={project.link}
					/>
				))}
			</div>
		</section>
	);
};

export default ProductGrid;
