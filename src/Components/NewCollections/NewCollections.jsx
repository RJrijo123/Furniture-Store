import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './NewCollections.css';
import new_collections from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  const navigate = useNavigate();

  const handleShowMoreClick = () => {
    navigate('/shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='new-collections'>
      <h1>Our Products</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
      <button className="show-more-btn" onClick={handleShowMoreClick}>
        Show More
      </button>
    </div>
  );
};

export default NewCollections;
