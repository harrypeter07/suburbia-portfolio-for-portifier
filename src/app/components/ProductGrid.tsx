"use client";
import React, { useRef, useEffect, useState } from "react";
import ProjectCard from "./SkateBoard";
import projectData from "@/data/skateboardData";
import { Heading } from "./Heading";

const ProductGrid: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const cardsContainerRef = useRef<HTMLDivElement>(null);
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (!sectionRef.current || !cardsContainerRef.current) return;

			const section = sectionRef.current;
			const rect = section.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			const sectionHeight = section.offsetHeight;

			// Calculate if section is in viewport
			const sectionTop = rect.top;
			const sectionBottom = rect.bottom;

			// Only animate when section is in viewport
			if (sectionTop < windowHeight && sectionBottom > 0) {
				// Calculate scroll progress within the section (0 to 1)
				const totalScrollDistance = windowHeight + sectionHeight;
				const currentScrollPosition = windowHeight - sectionTop;
				const progress = Math.max(0, Math.min(1, currentScrollPosition / totalScrollDistance));
				
				setScrollProgress(progress);
			} else {
				// Reset progress when section is out of viewport
				setScrollProgress(0);
			}
		};

		// Add scroll event listener
		window.addEventListener('scroll', handleScroll, { passive: true });
		
		// Initial calculation
		handleScroll();

		// Cleanup
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Calculate horizontal movement based on scroll progress
	const translateX = scrollProgress * -100; // Move from right to left

	return (
		<section
			ref={sectionRef}
			className="relative text-zinc-800 bg-texture bg-brand-gray max-sm:mb-32 max-md:mb-32 overflow-hidden"
			id="projects"
		>
			<Heading className="mb-5 text-center ~mb-4/6" as="h2">
				Projects
			</Heading>
			<div className="text-center ~mb-6/10">
				Explore some of my recent work and creative projects.
			</div>
			
			{/* Horizontal scroll container */}
			<div className="w-full overflow-hidden">
				<div 
					ref={cardsContainerRef}
					className="flex gap-4 transition-transform duration-300 ease-out"
					style={{
						transform: `translateX(${translateX}%)`,
					}}
				>
					{projectData.map((project, index) => (
						<div key={index} className="flex-shrink-0 w-full max-w-md">
							<ProjectCard
								title={project.title}
								image={project.image}
								description={project.description}
								link={project.link}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductGrid;
