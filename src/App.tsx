import React, { useState } from 'react';
import { RestaurantCarousel } from './components/RestaurantCarousel';
import { MenuDisplay } from './components/MenuDisplay';
import { restaurants } from './data/restaurants';
import { Restaurant } from './types';

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant>(restaurants[0]);

  const handleRestaurantSelect = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <RestaurantCarousel
          restaurants={restaurants}
          selectedRestaurant={selectedRestaurant}
          onRestaurantSelect={handleRestaurantSelect}
        />
        
        <MenuDisplay restaurant={selectedRestaurant} />
      </div>
    </div>
  );
}

export default App;