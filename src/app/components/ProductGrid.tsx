import React from "react";
import SkateBoard from "./SkateBoard";
// import skateboardData from "../data/skateboardData";
import skateboardData from "@/data/skateboardData";
import { Heading } from "./Heading";
const ProductGrid: React.FC = () => {
  return (
    <section className="relative text-zinc-800 bg-texture bg-brand-gray  max-sm:mb-32 max-md:mb-32">
        <Heading className="mb-5 text-center ~mb-4/6" as="h2">Latest Drops</Heading>
        <div className="text-center ~mb-6/10">Grab the best deals on our latest skateboard collection.
        </div>
    <div className="w-full gap-4 md:grid-cols-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {skateboardData.map((board, index) => (
        <SkateBoard
          key={index}
          name={board.name}
          image={board.image}
          price={board.price}
          customizerLink={board.customizerLink}
        />

      ))}
    </div>
    </section>
  );
};

export default ProductGrid;
