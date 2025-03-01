"use client"
import React from "react";

const Hero = () => {
	return (
		<section className="hero">
			<div className="heading">
				<h1 className="text-8xl text-teal-400">SURF ON CLOUDS <span className="text-blue-500  mt-6 ">WHEELS THAT GIVES WINGS</span></h1>
				<p>
					
				</p>
			</div>

			<div className="body bg-red-600 h-6 ~mt-10/4 w-10"></div>

			<div className="button">
                <button className="cursor-pointer" onClick={() => alert("Hello")}>
                    Click
                </button>
            </div>
		</section>
	);
};

export default Hero;
