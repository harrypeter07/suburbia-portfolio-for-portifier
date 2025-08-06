"use client";
import React from "react";
import Script from "next/script";

const ThreeDPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white gap-12 py-12">
      <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.41/build/spline-viewer.js" />
      <div className="w-full max-w-3xl h-[500px] flex items-center justify-center rounded-xl shadow-lg bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* Spline Web Viewer */}
        <spline-viewer url="https://prod.spline.design/1sMgnGO94Nhv2WXz/scene.splinecode" style={{width: '100%', height: '100%'}}></spline-viewer>
      </div>
    </section>
  );
};

export default ThreeDPage;
