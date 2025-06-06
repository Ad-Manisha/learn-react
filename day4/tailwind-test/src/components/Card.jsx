import React from "react";
import learn from "../assets/learn.jpg";

const Card = ({ title, content, btnText = "See More" }) => {
  return (
    <>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img
          className="w-full h-48 object-cover"
          src={learn}
          alt="Card Image"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            #50DaysOfReact
          </h2>

          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="mt-2 text-gray-600">{content}</p>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400">
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
