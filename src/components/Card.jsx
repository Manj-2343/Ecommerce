import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return <div className="p-2">{children}</div>;
};

// Button.js

export const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white  mt-2 rounded-lg hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
};
