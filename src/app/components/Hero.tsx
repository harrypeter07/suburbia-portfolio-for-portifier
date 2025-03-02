"use client";
import React from "react";
import { Heading } from "./Heading";
import { ButtonLink } from "./ButtonLink";
import { WideLogo } from "./WideLogo";
import { TallLogo } from "./TallLogo";

const Hero = () => {
	return (
		// bounded styling here fpr now
		<section className="hero  relative h-dvh overflow-hidden text-zinc-800  m-6">
  

    <div className="absolute inset-0 flex items-center pt-20">
		<WideLogo className="w-full text-brand-purple hidden opacity-20 mix-blend-multiply lg:block"/>
		<TallLogo className="w-full text-brand-purple  opacity-20 mix-blend-multiply lg:hidden"/>
	</div>


			<div className="grid absolute inset-0 mx-auto mt-24 max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16">
				    <Heading size="lg" className="relative max-w-2xl     place-self-start">
				    	WHEELS <span className=" mt-6 ">THAT GIVES WINGSSS</span>
				    </Heading>

				    <div className="relative flex flex-col w-full items-center  justify-between ~gap-2/4 lg:flex-row">
					   <div className="max-w-[45ch] font-semibold ~text-lg/xl">
					       <p>
							Get Ready to Ride on Clouds
						   </p>
					   </div>
					   <ButtonLink href='/' icon="skateboard" size="lg" className="z-20 mt-2 block">
						CLICK ME
					   </ButtonLink>


				    	
				    </div>
			</div>
		</section>
	);
};

export default Hero;
