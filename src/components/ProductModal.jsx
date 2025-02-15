// components/ProductModal.js
import React from "react";
import Modal from "../components/Modal";

const ProductModal = ({ selectedProduct, closeProductModal, darkMode }) => {
  return (
    selectedProduct && (
      <Modal onClose={closeProductModal}>
        <h2
          className={`text-2xl font-bold mb-2 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {selectedProduct.title}
        </h2>
        <img
          src={selectedProduct.image}
          alt={selectedProduct.title}
          className="h-40 w-full object-contain cursor-pointer"
        />
        <p className={`${darkMode ? "text-white" : "text-black"}`}>
          {selectedProduct.description}
        </p>
        <p
          className={`font-bold mt-2 ${darkMode ? "text-white" : "text-black"}`}
        >
          ${selectedProduct.price}
        </p>
      </Modal>
    )
  );
};
export default ProductModal;
