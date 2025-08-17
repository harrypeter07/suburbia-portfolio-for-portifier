"use client";
import { Inter, Bowlby_One_SC, DM_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const inter = Inter({ subsets: ["latin"] });
const bowlby = Bowlby_One_SC({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-bowlby",
});
const dmMono = DM_Mono({
	weight: ["300", "400", "500"],
	subsets: ["latin"],
	variable: "--font-dm-mono",
});

// Initialize GSAP ScrollTrigger
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

function SVGFilters() {
	return (
		<svg width="0" height="0" style={{ position: "absolute" }}>
			<defs>
				{Array.from({ length: 5 }, (_, i) => (
					<filter key={i} id={`noise-${i}`}>
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.8"
							numOctaves="4"
							stitchTiles="stitch"
						/>
						<feColorMatrix type="saturate" values="0" />
						<feBlend mode="multiply" in="SourceGraphic" />
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

	// Initialize Lenis smooth scrolling with GSAP integration
	useEffect(() => {
		if (typeof window === "undefined") return;

		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
			smooth: true,
			mouseMultiplier: 1,
			smoothTouch: false,
			touchMultiplier: 2,
			infinite: false,
		});

		// Integrate Lenis with GSAP ScrollTrigger
		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		return () => {
			lenis.destroy();
			gsap.ticker.remove(lenis.raf);
		};
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
