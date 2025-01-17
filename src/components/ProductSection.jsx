/* eslint-disable react/jsx-key */
import React from "react";
import { Card } from "@material-tailwind/react";
import { products } from "../assets/dummy";

const ProductGrid = () => {
  // Agrupar los productos por categoría
  const groupedProducts = products.reduce((groups, product) => {
    const { category } = product;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {});

  return (
    <>
      <div className="flex flex-col mx-20">
        {Object.entries(groupedProducts).map(([category, products]) => (
          <div
            key={category}
            className="flex flex-col items-start justify-between"
          >
            <div className="text-1xl md:text-2xl font-extralight text-defaultBlue leading-snug">
              <h3 className="uppercase">{category}</h3>
            </div>
            <div className="grid grid-cols-4">
              {products.map(({ img, title, subCategory, description }) => (
                <Card className="mx-8 mb-12 rounded-none shadow-2xl lg:w-60">
                  <div className="flex flex-col items-end justify-items-end">
                    <div key={title} className="m-5 flex flex-col ">
                      <img src={img} alt="" className="" />
                      <h3 className="text-base text-left font-semibold uppercase">
                        {title}
                      </h3>
                      <p className="mb-2 text-xs uppercase text-defaultRed">
                        {subCategory}
                      </p>
                      <p className="text-sm text-left">{description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
