"use client";
import React from "react";
import { Heading } from "./Heading";

const Hero = () => {
	return (
		// bounded styling here fpr now
		<section className="hero  relative h-dvh overflow-hidden text-zinc-800  m-6">
			<div className="grid absolute inset-0 mx-auto mt-24 max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16">
				<Heading size="lg" className="relative max-w-2xl place-self-start">
					WHEELS <span className=" mt-6 ">THAT GIVES WINGSSS</span>
				</Heading>
			</div>

			<div className="body bg-brand-pink h-6  w-10"></div>

			<div className="button">
				<button className="cursor-pointer" onClick={() => alert("Hello")}>
					Click
				</button>
			</div>
		</section>
	);
};

export default Hero;
