import Script from "next/script";
("use client");
import React from "react";
import { Heading } from "./Heading";
import { ButtonLink } from "./ButtonLink";

const Hero = () => {
	return (
		<section className="hero relative h-dvh overflow-hidden text-zinc-800 m-0">
			{/* Removed WideLogo and TallLogo background */}
			<div className="grid absolute inset-0 mx-auto mt-24 max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16 w-full h-full">
				<div className="flex flex-col-reverse lg:flex-row w-full h-full items-center justify-between gap-8">
					<div className="flex-1 flex flex-col justify-center">
						<Heading size="lg" className="relative max-w-2xl place-self-start">
							Hi, I&apos;m{" "}
							<span className="text-brand-purple">Aryan Sharma</span>
							<br />
							<span className="mt-6 block text-2xl font-bold">
								Creative Developer & Designer
							</span>
						</Heading>
						<div className="relative flex flex-col w-full items-center justify-between ~gap-2/4 lg:flex-row mt-6">
							<div className="max-w-[45ch] font-semibold ~text-lg/xl">
								<p>
									I craft interactive, visually engaging web experiences that
									blend code and creativity. Welcome to my portfolio!
								</p>
							</div>
							<ButtonLink
								href="#projects"
								icon="plus"
								size="lg"
								className="z-20 mt-2 block"
							>
								View Projects
							</ButtonLink>
						</div>
					</div>
					{/* Spline Web Viewer (small) */}
					<Script
						type="module"
						src="https://unpkg.com/@splinetool/viewer@1.10.41/build/spline-viewer.js"
					/>
					<div className="flex-1 w-full max-w-xl h-[300px] min-h-[200px] max-h-[350px] flex items-center justify-center bg-white rounded-xl shadow-lg z-10">
						<spline-viewer
							url="https://prod.spline.design/1sMgnGO94Nhv2WXz/scene.splinecode"
							style={{ width: "100%", height: "100%" }}
						></spline-viewer>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
