import React from 'react';
import {
  FaHeart,
  FaCar,
  FaGasPump,
  FaChair,
} from 'react-icons/fa';

const CarCard = ({ car }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white shadow-lg rounded-lg">
        <img
          className="h-48 w-full object-cover rounded-t-lg"
          src={car.imageURL}
          alt={car.brand}
        />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-2">{car.brand}</h2>
            <p className="border border-dotted border-blue-500 p-1 text-blue-500">
              {car.release_year}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-blue-500 text-lg mr-1">
                <FaChair />
              </span>
              <p className="text-gray-700">{car.seating_capacity}</p>
            </div>
            <p className="text-gray-700">{car.oil_type}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-blue-500 text-lg mr-1">
                <FaGasPump />
              </span>
              <p className="text-gray-700">{car.mileage}</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 text-lg mr-1">
                <FaCar />
              </span>
              <p className="text-gray-700">{car.type}</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center border-t-2 pt-2">
            <p className="text-xl text-gray-800 font-semibold">
              ${car.price}/month
            </p>
            <div className="flex space-x-2">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full">
                <FaHeart />
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
