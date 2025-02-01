// components/CartModal.js
import React from "react";
import Modal from "./Modal";
import { Button } from "./Button";

const CartModal = ({ showCartModal, toggleCartModal, cart }) => {
  return (
    showCartModal && (
      <Modal onClose={toggleCartModal}>
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <div className="space-y-4">
          {cart.length > 0 ? (
            cart.map((product, index) => (
              <div
                key={index}
                className="flex justify-between items-center space-x-4"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p className="font-semibold">{product.title}</p>
                  <p className="font-bold">${product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty!</p>
          )}
        </div>

        {cart.length > 0 && (
          <div className="mt-4">
            <div className="flex justify-between">
              <span className="font-bold text-lg">Total:</span>
              <span className="font-bold text-lg">
                $
                {cart
                  .reduce((total, product) => total + product.price, 0)
                  .toFixed(2)}
              </span>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-4">
          <Button onClick={toggleCartModal}>Close</Button>
          <Button className="bg-blue-600">Checkout</Button>
        </div>
      </Modal>
    )
  );
};

export default CartModal;
