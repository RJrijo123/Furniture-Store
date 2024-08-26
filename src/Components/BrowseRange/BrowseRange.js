import React from 'react';
import './BrowseRange.css';

import diningImage from '../Assets/Mask Group.png';
import livingImage from '../Assets/Image-living room.png';
import bedroomImage from '../Assets/Mask Group1.png';

const BrowseRange = () => {
  return (
    <div className="browse-range">
      <h2>Browse The Range</h2>
      <p>Explore our diverse selection of products to find what you need.</p>
      <div className="browse-categories">
        <div className="category-item">
          <img src={diningImage} alt="Dining" />
          <h3>Dining</h3>
        </div>
        <div className="category-item">
          <img src={livingImage} alt="Living" />
          <h3>Living</h3>
        </div>
        <div className="category-item">
          <img src={bedroomImage} alt="Bedroom" />
          <h3>Bedroom</h3>
        </div>
      </div>
    </div>
  );
}

export default BrowseRange;
