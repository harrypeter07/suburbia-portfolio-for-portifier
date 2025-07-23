import Hero from "@/app/components/Hero";
import React from "react";
import ProductGrid from "@/app/components/ProductGrid";
import TextAndImage from "@/app/components/TextAndImage";
import ParallaxSection from "@/app/components/ParallaxSection";

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
					text="I'm Aryan Sharma, a passionate developer and designer based in India. I specialize in building interactive, visually stunning web applications that deliver real value. With a background in both design and engineering, I love turning ideas into delightful digital experiences."
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
