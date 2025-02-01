// components/ProductList.js
import React from "react";
import { Card, CardContent } from "./Card";
import { Button } from "./Button";

const ProductList = ({
  currentProducts,
  openProductModal,
  addToCart,
  darkMode,
}) => {
  return (
    <main className="w-full lg:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {currentProducts.map((product) => (
        <Card key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            className="h-40 w-full object-contain cursor-pointer"
            onClick={() => openProductModal(product)}
          />
          <CardContent>
            <h3 className="font-bold text-lg text-black dark:text-white">
              {product.title.length > 30
                ? `${product.title.slice(0, 30)}...`
                : product.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {product.category}
            </p>
            <p className="font-bold text-black dark:text-white">
              ${product.price}
            </p>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </CardContent>
        </Card>
      ))}
    </main>
  );
};

export default ProductList;
