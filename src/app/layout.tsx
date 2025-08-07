"use client";
import "./globals.css";
import { Bowlby_One_SC, DM_Mono } from "next/font/google";
import { navigationData } from "@/data/navagationData";
import LoadingScreen from "@/app/components/LoadingScreen";
import React, { useEffect, useState } from "react";

const bowlby = Bowlby_One_SC({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-bowlby-sc",
	weight: "400",
});

const dmMono = DM_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-dm-mono",
	weight: "500",
});

import Link from "next/link";
function Logo(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 411 211"
			{...props}
		>
			<title>PORTFOLIO</title>
			<rect
				width="411"
				height="211"
				rx="32"
				fill="currentColor"
				fillOpacity="0.08"
			/>
			<text
				x="50%"
				y="50%"
				textAnchor="middle"
				dy=".3em"
				fontSize="48"
				fill="currentColor"
			>
				PORTFOLIO
			</text>
		</svg>
	);
}

function Header() {
	return (
		<header className="header absolute left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 md:h-32">
			<div className="mx-auto grid w-full max-w-6xl grid-cols-[auto,auto] items-center gap-6 md:grid-cols-[1fr,auto,1fr]">
				<Link href="/" className="justify-self-start" aria-label="Home">
					<Logo className="text-brand-purple ~h-12/20 " />
				</Link>
				<nav
					aria-label="Main"
					className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
				>
					<ul className="flex flex-wrap items-center justify-center gap-8">
						{navigationData.navigation.map((item) => (
							<li key={item.text}>
								<Link href={item.link} className="~text-lg/xl">
									{item.text}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className="justify-self-end">
					{/* Cart button removed for portfolio */}
				</div>
			</div>
		</header>
	);
}

function SVGFilters() {
	return (
		<svg className="h-0 w-0">
			<defs>
				{Array.from({ length: 5 }).map((_, index) => (
					<filter id={`squiggle-${index}`} key={index}>
						<feTurbulence
							baseFrequency="0.01"
							id="turbulence"
							numOctaves="2"
							result="noise"
							seed={index}
						></feTurbulence>
						<feDisplacementMap
							id="displacement"
							in2="noise"
							in="SourceGraphic"
							scale="4"
						></feDisplacementMap>
					</filter>
				))}
			</defs>
		</svg>
	);
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 1400);
		return () => clearTimeout(timer);
	}, []);
	return (
		<html lang="en">
			<body
				className={`${bowlby.variable} ${dmMono.variable} antialiased font-mono font-medium text-zinc-800`}
			>
				{loading && <LoadingScreen />}
				<main style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s" }}>
					<Header />
					{children}
				</main>
				<SVGFilters />
			</body>
		</html>
	);
}
