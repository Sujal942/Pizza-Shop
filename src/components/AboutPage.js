import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-6">About Our Pizza Place</h1>
        <p className="text-lg mb-4">
          Welcome to Our Pizza Place, where we're passionate about crafting
          delicious pizzas!
        </p>
        <p className="text-lg mb-4">
          At Our Pizza Place, we believe that pizza is more than just food; it's
          an experience. That's why we use only the finest ingredients,
          handpicked by our chefs to ensure the highest quality and taste in
          every bite.
        </p>
        <p className="text-lg mb-4">
          Our mission is to serve you mouthwatering pizzas made with love and
          care. Whether you're a cheese lover, a meat enthusiast, or a veggie
          fanatic, we have a pizza for everyone.
        </p>
        <p className="text-lg mb-4">Meet Our Team:</p>
        <ul className="list-disc ml-8 mb-4">
          <li>Michael - Head Chef</li>
          <li>Sarah - Pizza Maker Extraordinaire</li>
          <li>David - Customer Service Specialist</li>
        </ul>
        <p className="text-lg">
          We're dedicated to providing you with exceptional service and
          unforgettable flavors. Thank you for choosing Our Pizza Place!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
