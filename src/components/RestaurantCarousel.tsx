import React from 'react';
import { Restaurant } from '../types';

interface RestaurantCarouselProps {
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant;
  onRestaurantSelect: (restaurant: Restaurant) => void;
}

export const RestaurantCarousel: React.FC<RestaurantCarouselProps> = ({
  restaurants,
  selectedRestaurant,
  onRestaurantSelect
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8" dir="rtl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl md:text-3xl font-bold text-gray-900 text-center">
          فودکورت خلیج فارس
        </h1>
        <img className="w-10 h-10 md:w-12 md:h-12 object-contain" src="/images/khalij.png" loading="lazy" alt="" />
      </div>
      
      
      <div className="relative">
        <div className="flex space-x-6 space-x-reverse overflow-x-auto py-2 scrollbar-hide justify-center">
          {restaurants.map((restaurant) => (
            <button
              key={restaurant.id}
              onClick={() => onRestaurantSelect(restaurant)}
              className={`flex-shrink-0 group transition-all duration-200 ${
                selectedRestaurant.id === restaurant.id
                  ? 'transform scale-105'
                  : 'hover:transform hover:scale-105'
              }`}
            > 
              <div
                className={`w-20 h-20 rounded-full overflow-hidden border-4 transition-all duration-200 ${
                  selectedRestaurant.id === restaurant.id
                    ? 'border-blue-500 shadow-lg'
                    : 'border-gray-200 group-hover:border-blue-300 group-hover:shadow-md'
                }`}
              >
                <img
                  src={restaurant.logo}
                  alt={restaurant.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                className={`text-sm font-medium mt-2 text-center transition-colors duration-200 whitespace-nowrap ${
                  selectedRestaurant.id === restaurant.id
                    ? 'text-blue-600'
                    : 'text-gray-700 group-hover:text-blue-600'
                }`}
              >
                {restaurant.name}
              </p>
            </button>
          ))}
        </div>
        
        {/* Gradient overlays for scroll indication */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-l from-transparent to-white pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
      </div>
    </div>
  );
};