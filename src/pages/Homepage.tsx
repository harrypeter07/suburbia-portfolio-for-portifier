import Hero from "@/app/components/Hero";
import React from "react";
// import Settings from './settings'
import ProductGrid from "@/app/components/ProductGrid";
import TextAndImage from "@/app/components/TextAndImage";
import ParallaxSection from "@/app/components/ParallaxSection";

const Homepage = () => {
	return (
		<div className="bg-texture bg-brand-pink">
			= <Hero />
			{/* <Settings/> */}
			<ProductGrid />
      <ParallaxSection >
        
          <TextAndImage variation="right" theme="orange" />
        
       
          <TextAndImage variation="left" theme="blue" />
       
       
          <TextAndImage variation="right" theme="lime" />
      
      </ParallaxSection>
		</div>
	);
};

export default Homepage;
