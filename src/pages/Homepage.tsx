"use client"
import React, { ReactNode, ElementType } from "react";

import ProjectCard from "@/app/components/SkateBoard";
import projectData from "@/data/skateboardData";
import TextAndImage from "@/app/components/TextAndImage";
import ParallaxSection from "@/app/components/ParallaxSection";

interface HeadingProps {
	as?: ElementType;
	className?: string;
	children: ReactNode;
	size?: "xl" | "lg" | "md" | "sm" | "xs";
}

function Heading({
	as: Comp = "h1",
	className,
	children,
	size = "lg",
}: HeadingProps) {
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

const Hero = () => (
	<section className="hero relative h-dvh overflow-hidden text-zinc-800 m-6">
		<div className="grid absolute inset-0 mx-auto mt-24 max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16">
			<Heading size="lg" className="relative max-w-2xl place-self-start">
				Hi, I&apos;m <span className="text-brand-purple">Aryan Sharma</span>
				<br />
				<span className="mt-6 block text-2xl font-bold">
					Creative Developer & Designer
				</span>
			</Heading>
			<div className="relative flex flex-col w-full items-center justify-between ~gap-2/4 lg:flex-row">
				<div className="max-w-[45ch] font-semibold ~text-lg/xl">
					<p>
						I craft interactive, visually engaging web experiences that blend
						code and creativity. Welcome to my portfolio!
					</p>
				</div>
				<a
					href="#projects"
					className="z-20 mt-2 block button-cutout group mx-4 inline-flex items-center bg-gradient-to-b from-25% to-75% bg-[length:100%_400%] font-bold transition-[filter,background-position] duration-300 hover:bg-bottom from-brand-purple to-brand-lime text-white hover:text-black ~text-lg/2xl ~gap-3/4 ~px-1/2 ~py-3/4"
				>
					<span className="flex size-6 items-center justify-center transition-transform group-hover:-rotate-[25deg] size-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width="24"
							height="24"
						>
							<path fill="currentColor" d="M12 5v14m7-7H5" />
						</svg>
					</span>
					<div className="w-px self-stretch bg-black/25" />
					View Projects
				</a>
			</div>
		</div>
	</section>
);

const ProductGrid = () => (
	<section
		className="relative text-zinc-800 max-sm:mb-32 max-md:mb-32 py-16 px-4 overflow-hidden"
		id="projects"
		style={{
			borderRadius: "2rem",
			boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
			minHeight: "60vh",
		}}
	>
		{/* Animated Background */}
		<div 
			className="absolute inset-0 animate-scroll-left"
			style={{
				backgroundImage: "url('/background-9509852_1280.webp')",
				backgroundSize: "200% 100%",
				backgroundPosition: "0% center",
				backgroundRepeat: "repeat-x",
			}}
		/>
		
		{/* Overlay for better text readability */}
		<div className="absolute inset-0 bg-black/20 rounded-2xl" />
		
		{/* Content */}
		<div className="relative z-10">
			<Heading className="mb-5 text-center ~mb-4/6 drop-shadow-lg text-white" as="h2" size="md">
				Projects
			</Heading>
			<div className="text-center ~mb-6/10 text-lg font-medium text-white/90 drop-shadow">
				Explore some of my recent work and creative projects.
			</div>
			<div className="w-full gap-8 md:grid-cols-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
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
		</div>
		
		<style jsx>{`
			@keyframes scroll-left {
				0% {
					background-position: 0% center;
				}
				100% {
					background-position: -200% center;
				}
			}
			
			.animate-scroll-left {
				animation: scroll-left 30s linear infinite;
			}
		`}</style>
	</section>
);

const Homepage = () => {
	return (
		<div className="bg-texture bg-brand-pink">
			<Hero />
			<ProductGrid />
			<ParallaxSection>
				{/* About Section */}
				<TextAndImage
					variation="right"
					theme="orange"
					heading="About Me"
					text={
						"I&apos;m Aryan Sharma, a passionate developer and designer based in India. I specialize in building interactive, visually stunning web applications that deliver real value. With a background in both design and engineering, I love turning ideas into delightful digital experiences."
					}
					buttonText="Download Resume"
					buttonLink="/resume.pdf"
					imageForeground="/prismic/guy-1.png"
					imageBackground="/prismic/paint-background.png"
				/>
				{/* Skills Section */}
				<TextAndImage
					variation="left"
					theme="blue"
					heading="Skills"
					text="JavaScript, TypeScript, React, Next.js, Node.js, CSS, Tailwind, Framer Motion, Three.js, Figma, UI/UX Design, Animation, Responsive Design, and more. Always learning, always building."
					buttonText="See My Work"
					buttonLink="#projects"
					imageForeground="/prismic/guy-2.png"
					imageBackground="/prismic/paint-background.png"
				/>
				{/* Contact Section */}
				<TextAndImage
					variation="right"
					theme="lime"
					heading="Contact"
					text="Interested in working together, collaborating, or just want to say hi? I'm always open to new opportunities and creative projects. Let's connect!"
					buttonText="Email Me"
					buttonLink="mailto:aryan.sharma@email.com"
					imageForeground="/prismic/guy-3.png"
					imageBackground="/prismic/paint-background.png"
				/>
			</ParallaxSection>
		</div>
	);
};

export default Homepage;