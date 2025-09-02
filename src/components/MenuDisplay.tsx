import React from 'react';
import { Restaurant, MenuItem } from '../types';

interface MenuDisplayProps {
  restaurant: Restaurant;
}


export const MenuDisplay: React.FC<MenuDisplayProps> = ({ restaurant }) => {
  // Group menu items by category
  const groupedMenu = restaurant.menu.reduce((acc, item) => {
    const category = item.category || 'سایر';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <div className="max-w-6xl mx-auto" dir="rtl">
      {/* Restaurant Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
        <div className="flex items-center justify-center space-x-6 space-x-reverse">
          <img
            src={restaurant.logo}
            alt={restaurant.name}
            loading="lazy"
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {restaurant.name}
            </h2>
            <p className="text-md md:text-lg text-gray-600">
              {restaurant.description}
            </p>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="space-y-8">
        {Object.entries(groupedMenu).map(([category, items]) => (
          <div key={category} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-100 text-right">
              {category}
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <div key={item.id} className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-all duration-200">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-lg font-bold text-blue-600 mr-2">
                        {item.price.toLocaleString('fa-IR')}<span className="mr-1 text-sm">تومان</span>
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-gray-600 text-sm leading-relaxed text-right">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};