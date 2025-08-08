"use client";
import React, { useRef, useEffect, useState } from "react";

import Image from "next/image";

import ProjectCard from "@/app/components/SkateBoard";
import projectData from "@/data/skateboardData";
import TextAndImage from "@/app/components/TextAndImage";
import ParallaxSection from "@/app/components/ParallaxSection";
import TextType from "@/app/components/TextType";

// Heading replaced by TextType for typing animation

const Hero = () => (
	<section className="hero relative h-dvh overflow-hidden text-zinc-800 m-0 border-none">
		<div className="grid absolute inset-0 mx-auto mt-16 max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16 w-full h-full">
			<div className="flex flex-col-reverse lg:flex-row w-full h-full items-center justify-between gap-8">
				<div className="flex-1 flex flex-col justify-center">
					<div className="relative max-w-2xl place-self-start">
						<span className="block font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
							<TextType
								as="span"
								text={["Hi, my name is"]}
								typingSpeed={60}
								pauseDuration={1200}
								showCursor={false}
								className="text-white"
							/>
						</span>
						<span
							className="block font-sans uppercase text-2xl md:text-5xl lg:text-6xl font-extrabold  drop-shadow-lg tracking-tight pl-2"
							style={{ left: "-10px", position: "relative" }}
						>
							<TextType
								as="span"
								text={["HASSAN MANSURI"]}
								typingSpeed={80}
								pauseDuration={3000}
								showCursor={true}
								className=""
								textColors={["#000"]}
							/>
						</span>
					</div>
					<TextType
						as="span"
						text={["Full Stack Engineer & UI Specialist"]}
						className="mt-6 block text-3xl font-bold text-brand-purple"
						typingSpeed={60}
						pauseDuration={2000}
						showCursor={false}
					/>
					<div className="relative flex flex-col w-full items-center justify-between ~gap-2/4 lg:flex-row mt-6">
						<div className="max-w-[45ch] font-semibold ~text-lg/xl">
							<p>
								I build robust, scalable web applications and beautiful user
								interfaces. Let&apos;s create something amazing together!
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
				{/* Right side image with hover interaction - moved up and right */}
				<div
					className="flex-1 w-full max-w-xl h-[300px] min-h-[200px] max-h-[350px] flex items-start justify-end relative z-30"
					style={{ marginTop: "-40px", marginRight: "-40px" }}
				>
					<div
						className="group w-[90%] h-[90%] flex items-center justify-center cursor-pointer transition-transform duration-300"
						style={{ perspective: "1200px" }}
					>
						<Image
							src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
							alt="Showcase"
							width={350}
							height={350}
							className="rounded-2xl shadow-2xl object-cover w-full h-full max-h-[350px] max-w-xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
							style={{ willChange: "transform" }}
							priority
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
);


const ProductGrid = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const cardsContainerRef = useRef<HTMLDivElement>(null);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [isInParallaxMode, setIsInParallaxMode] = useState(false);
	const initialScrollY = useRef(0);
	const sectionStartY = useRef(0);
	const sectionEndY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			if (!sectionRef.current || !cardsContainerRef.current) return;

			const section = sectionRef.current;
			const rect = section.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			const sectionHeight = section.offsetHeight;
			const currentScrollY = window.scrollY;

			// Calculate section boundaries
			const sectionTop = rect.top;
			const sectionBottom = rect.bottom;

			// Check if section is fully in viewport (heading at top, bottom at bottom)
			const isSectionFullyVisible = sectionTop <= 0 && sectionBottom >= windowHeight;

			if (isSectionFullyVisible && !isInParallaxMode) {
				// Enter parallax mode
				setIsInParallaxMode(true);
				initialScrollY.current = currentScrollY;
				sectionStartY.current = section.offsetTop;
				sectionEndY.current = section.offsetTop + sectionHeight;
				// Reset progress when entering
				setScrollProgress(0);
			} else if (!isSectionFullyVisible && isInParallaxMode) {
				// Exit parallax mode
				setIsInParallaxMode(false);
				setScrollProgress(0);
			}

			// Only calculate progress if we're in parallax mode and not already at the limit
			if (isInParallaxMode && scrollProgress < 0.7) {
				// Calculate progress within the parallax section
				const totalParallaxDistance = sectionHeight - windowHeight;
				const currentParallaxProgress = currentScrollY - initialScrollY.current;
				const progress = Math.max(0, Math.min(0.7, currentParallaxProgress / totalParallaxDistance));
				
				setScrollProgress(progress);
			}
		};

		// Add scroll event listener with throttling for better performance
		let ticking = false;
		const throttledHandleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', throttledHandleScroll, { passive: true });
		
		// Initial calculation
		handleScroll();

		// Cleanup
		return () => {
			window.removeEventListener('scroll', throttledHandleScroll);
		};
	}, [isInParallaxMode, scrollProgress]);

	// Add keyboard support for manual exit
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isInParallaxMode && (e.key === 'Escape' || e.key === ' ')) {
				e.preventDefault();
				setIsInParallaxMode(false);
				setScrollProgress(0.7); // Stop at the same point as auto-exit
			}
		};

		if (isInParallaxMode) {
			window.addEventListener('keydown', handleKeyDown);
		}

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isInParallaxMode]);

	// Handle scroll locking when in parallax mode
	useEffect(() => {
		const handleWheel = (e: WheelEvent) => {
			if (isInParallaxMode) {
				e.preventDefault();
				
				// Simulate scroll progress based on wheel delta with smoother speed
				const delta = e.deltaY;
				const section = sectionRef.current;
				if (section) {
					const sectionHeight = section.offsetHeight;
					const windowHeight = window.innerHeight;
					const totalParallaxDistance = sectionHeight - windowHeight;
					
					// Faster scroll speed - not too slow
					const progressIncrement = (delta / totalParallaxDistance) * 0.08; // Increased from 0.03 to 0.08
					const newProgress = Math.max(0, Math.min(0.7, scrollProgress + progressIncrement)); // Stop at 70% (2nd-3rd card from left)
					setScrollProgress(newProgress);
					
					// Exit parallax mode when we reach the desired stopping point
					if (newProgress >= 0.7) {
						setIsInParallaxMode(false);
						// Resume normal scrolling by scrolling to the end of the section
						setTimeout(() => {
							window.scrollTo({
								top: section.offsetTop + section.offsetHeight,
								behavior: 'smooth'
							});
						}, 100);
					}
				}
			}
		};

		if (isInParallaxMode) {
			// Lock scroll position
			document.body.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.width = '100%';
			document.body.style.top = `-${initialScrollY.current}px`;
			
			// Add wheel event listener
			window.addEventListener('wheel', handleWheel, { passive: false });
		} else {
			// Unlock scroll position with proper cleanup
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.width = '';
			document.body.style.top = '';
		}

		return () => {
			// Cleanup
			window.removeEventListener('wheel', handleWheel);
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.width = '';
			document.body.style.top = '';
		};
	}, [isInParallaxMode, scrollProgress]);

	// Calculate horizontal movement based on scroll progress
	// Move cards from right to left as user scrolls through the section
	// Stop at 70% to show 2nd-3rd card from the left
	const translateX = scrollProgress * -250; // Adjusted range to stop at desired point

	return (
		<section
			ref={sectionRef}
			className={`relative text-zinc-800 max-sm:mb-32 max-md:mb-32 py-16 px-4 overflow-hidden transition-all duration-500 ${
				isInParallaxMode ? 'bg-brand-purple/10' : ''
			}`}
			id="projects"
			style={{
				borderRadius: "2rem",
				boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
				minHeight: "100vh", // Increased height for better parallax effect
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
			<div className="relative z-10 flex flex-col items-center justify-center">
				<TextType
					as="h2"
					text={["PROJECTS"]}
					className="mb-3 text-center font-sans uppercase text-white drop-shadow-lg text-4xl md:text-5xl lg:text-6xl tracking-tight"
					typingSpeed={60}
					pauseDuration={2000}
					showCursor={false}
				/>
				<TextType
					as="div"
					text={["Explore some of my recent work and creative projects."]}
					className="text-center mb-8 text-2xl md:text-3xl font-semibold text-white/90 drop-shadow"
					typingSpeed={40}
					pauseDuration={2000}
					showCursor={false}
				/>
				
				{/* Parallax Progress Indicator */}
				{isInParallaxMode && (
					<div className="fixed top-4 right-4 z-50 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
						<div className="flex items-center justify-between mb-2">
							<div className="text-sm font-medium">Horizontal Scroll Active</div>
							<button 
								onClick={() => {
									setIsInParallaxMode(false);
									setScrollProgress(0.7);
								}}
								className="text-xs bg-brand-lime text-black px-2 py-1 rounded hover:bg-brand-lime/80 transition-colors"
							>
								Skip
							</button>
						</div>
						<div className="w-full bg-white/20 rounded-full h-2">
							<div 
								className="bg-brand-lime h-2 rounded-full transition-all duration-300"
								style={{ width: `${scrollProgress * 100}%` }}
							/>
						</div>
						<div className="text-xs mt-1 opacity-75">
							{Math.round(scrollProgress * 100)}% complete • Stop at 70% • Press ESC to skip
						</div>
					</div>
				)}
				
				{/* Horizontal scroll container */}
				<div className="w-full overflow-hidden py-8">
					<div 
						ref={cardsContainerRef}
						className="flex gap-8 transition-transform duration-300 ease-out"
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
};
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";

const Homepage = () => {
	return (
		<div className="bg-texture bg-brand-pink">
			<Hero />
			<ProductGrid />
			<ParallaxSection>
				{/* About Section - Expanded */}
				<TextAndImage
					variation="right"
					theme="orange"
					heading="About Me"
					text={
						"I'm Aryan Sharma, a passionate developer and designer based in India. I specialize in building interactive, visually stunning web applications that deliver real value. With a background in both design and engineering, I love turning ideas into delightful digital experiences.\n\nContact: aryan.sharma@email.com | +91-9876543210\nLocation: New Delhi, India\nExperience: 4+ years in web development\nEducation: B.Tech in Computer Science\nInterests: UI/UX, Animation, 3D, Open Source, Music, Travel."
					}
					buttonText="Download Resume"
					buttonLink="/resume.pdf"
					imageForeground="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
					imageBackground="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
				/>

				{/* Skills Section - Structured & Animated */}
				<section className="bg-brand-blue bg-texture py-16 px-4">
					<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:gap-24">
						<div className="flex flex-col gap-8 animate-fade-in-up">
							<TextType
								as="h2"
								text={["Skills"]}
								className="text-4xl font-bold text-white mb-2"
								typingSpeed={60}
								pauseDuration={2000}
								showCursor={false}
							/>
							<div className="text-lg text-white/90 max-w-md mb-4">
								A quick overview of my technical skills and tools I use daily.
							</div>
							<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
								{[
									{
										group: "Frontend",
										skills: [
											"React",
											"Next.js",
											"TypeScript",
											"JavaScript",
											"Tailwind CSS",
											"Framer Motion",
											"CSS3",
											"HTML5",
										],
									},
									{
										group: "Backend",
										skills: [
											"Node.js",
											"Express",
											"MongoDB",
											"Firebase",
											"REST APIs",
										],
									},
									{
										group: "Design",
										skills: ["Figma", "Adobe XD", "UI/UX", "Animation"],
									},
									{
										group: "Tools",
										skills: ["Git", "VS Code", "Jira", "Vercel", "Netlify"],
									},
								].map(({ group, skills }) => (
									<div
										key={group}
										className="rounded-xl bg-white/10 p-4 shadow-lg border border-white/10 animate-fade-in-up"
									>
										<div className="font-bold text-brand-lime mb-2">
											{group}
										</div>
										<ul className="space-y-1">
											{skills.map((skill) => (
												<li key={skill} className="flex items-center gap-2">
													<span className="inline-block w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
													<span className="text-white/90 font-medium">
														{skill}
													</span>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
						<div className="flex justify-center items-center animate-fade-in-up">
							<Image
								src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
								alt="Skills"
								width={300}
								height={400}
								className="rounded-2xl shadow-2xl w-full max-w-xs"
								priority
							/>
						</div>
					</div>
				</section>
				{/* New Contact Section */}
				<section className="bg-brand-lime bg-texture py-16 px-4 min-h-[90vh]">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:gap-24 max-w-6xl mx-auto">
						<div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 animate-fade-in-up">
							<TextType
								as="h2"
								text={["Contact"]}
								className="text-4xl font-bold text-white"
								typingSpeed={60}
								pauseDuration={2000}
								showCursor={false}
							/>
							<div className="text-lg text-white max-w-md">
								Interested in working together, collaborating, or just want to
								say hi? I&apos;m always open to new opportunities and creative
								projects. Let&apos;s connect!
							</div>
						</div>
						<div className="flex justify-center items-center animate-fade-in-up">
							<ContactForm />
						</div>
					</div>
				</section>
			</ParallaxSection>
			<Footer />
		</div>
	);
};

export default Homepage;
