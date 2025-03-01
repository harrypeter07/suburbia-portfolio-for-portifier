"use client"
import React from "react";

const Hero = () => {
	return (
		<section className="hero">
			<div className="heading">
				<h1 className="text-5xl">SURF ON CLOUDS <span className="text-blue-600 block text-4xl pt-3 ">WHEELS THAT GIVES WINGS</span></h1>
				<p>
					
				</p>
			</div>

			<div className="body"></div>

			<div className="button">
                <button className="cursor-pointer" onClick={() => alert("Hello")}>
                    Click
                </button>
            </div>
		</section>
	);
};

export default Hero;
