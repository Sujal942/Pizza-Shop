import React from "react";

const MenuCard = ({ pizza }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-xl">
      <img
        className="w-full h-64 object-cover"
        src={pizza.image}
        alt={pizza.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-center text-xl mb-2">{pizza.name}</div>
        <p className="text-gray-700 text-base">{pizza.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          ${pizza.price}
        </span>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
