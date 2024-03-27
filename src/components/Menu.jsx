import React from "react";
import MenuCard from "./MenuCard"; // Importing MenuCard component

const Menu = () => {
  // Sample pizza data for demonstration
  const pizzas = [
    {
      id: 1,
      name: "Margherita",
      description:
        "Classic pizza topped with tomato sauce, mozzarella, and fresh basil.",
      price: 9.99,
      image:
        "/Users/sujaljain/Desktop/Pizza-Shop/src/assets/images/Margherita.PNG",
    },
    {
      id: 2,
      name: "Pepperoni",
      description:
        "Traditional pizza with pepperoni slices, tomato sauce, and mozzarella cheese.",
      price: 11.99,
      image: "pepperoni.jpg",
    },
    {
      id: 3,
      name: "Vegetarian",
      description:
        "Delicious pizza loaded with assorted vegetables and mozzarella cheese.",
      price: 10.99,
      image: "vegetarian.jpg",
    },
    {
      id: 4,
      name: "BBQ Chicken",
      description:
        "Savory pizza topped with BBQ sauce, grilled chicken, onions, and cilantro.",
      price: 12.99,
      image: "bbq_chicken.jpg",
    },
    {
      id: 5,
      name: "Hawaiian",
      description:
        "Tropical pizza featuring ham, pineapple, tomato sauce, and mozzarella cheese.",
      price: 11.99,
      image: "hawaiian.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ml-20 gap-9">
      {pizzas.map((pizza) => (
        <MenuCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Menu;
